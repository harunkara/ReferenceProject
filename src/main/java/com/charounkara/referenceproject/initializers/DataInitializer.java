package com.charounkara.referenceproject.initializers;

import com.charounkara.referenceproject.models.entities.Role;
import com.charounkara.referenceproject.models.entities.Currency;
import com.charounkara.referenceproject.models.enums.CurrencyType;
import com.charounkara.referenceproject.repositories.CurrencyRepository;
import com.charounkara.referenceproject.repositories.RoleRepository;
import com.charounkara.referenceproject.repositories.UserRepository;
import org.jsoup.Jsoup;
import org.jsoup.select.Elements;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.RestTemplate;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import java.util.*;

@Component
public class DataInitializer {

    private final RoleRepository roleRepository;
    private final UserRepository userRepository;
    @Autowired
    public DataInitializer(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository=userRepository;
    }

    @Bean
    public CommandLineRunner run() {
        return args -> {
            List<Role> roles = new ArrayList<>();
            roles.add(new Role("USER"));
            roles.add(new Role("ADMIN"));
            //Adding Roles ADMIN and USER
            roles.forEach(role -> {
                if (roleRepository.findByAuthority(role.getAuthority()).isEmpty()) {
                    roleRepository.save(role);
                }
            });
        };
    }
    //Para birimlerinin anlık fiyatlarını kaydeden kısım
    private static final String API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

    @Autowired
    private CurrencyRepository currencyRepository;
    //Her 100 dakikada bir çalıştır
    @Scheduled(fixedRate = 6000000)
    public void fetchAndStoreCurrencyRates() {
        RestTemplate restTemplate = new RestTemplate();
        try {
            ResponseEntity<Map> response = restTemplate.getForEntity(API_URL, Map.class);
            Map<String, Object> responseBody = response.getBody();

            if (responseBody != null && responseBody.containsKey("rates")) {
                Map<String, Double> rates = (Map<String, Double>) responseBody.get("rates");

                for (Map.Entry<String, Double> entry : rates.entrySet()) {
                    String currencyName = entry.getKey();
                    double price = ((Number) entry.getValue()).doubleValue();

                    // Veritabanında aynı isimde döviz varsa, onu güncelle
                    Optional<Currency> existingCurrency = currencyRepository.findByName(currencyName);

                    if (existingCurrency.isPresent()) {
                        Currency currency = existingCurrency.get();
                        currency.setCurrentPrice(price);
                        currencyRepository.save(currency);
                    } else {
                        // Yoksa yeni bir döviz ekle
                        Currency currency = new Currency();
                        currency.setName(currencyName);
                        currency.setCurrentPrice(price);
                        currency.setType(CurrencyType.FOREIGNEXCHANGE);
                        currencyRepository.save(currency);
                    }
                }
            }

        } catch (HttpClientErrorException | HttpServerErrorException e) {
            System.out.println("Error while fetching exchange rates: " + e.getMessage());
        }
    }
    //Altın fiyatını çekip veritabannına yazan kısım
    //100 dakikada bir çalıştır
    @Scheduled(fixedRate = 6000000)
    public void fetchAndStoreGoldPrice(){
        try {
            // Hedef URL
            String url = "https://kinesis.money/gold-price/gold-price-per-kilo/";

            // Sayfayı çekin

            Document document = Jsoup.connect(url).get();
            Element priceElement = document.selectFirst("span.h5.ks-price[qty='1'][symbol='KAU'][currency='USD'][weight='KG'][change='true'] .ks-price--value");

            // Get the value as a string
            String priceString = priceElement.text();

            // Remove the dollar sign and commas
            String cleanedString = priceString.replaceAll("[$,]", "");

            // Convert to double
            double priceValue = Double.parseDouble(cleanedString);
            System.out.println("OuterHTML:"+document.outerHtml());
            System.out.println("Bura"+priceValue);
            if (priceValue>0) {
                double gramAmountOfOneDollar=(1/(priceValue/1000));
                Optional<Currency> existingCurrency = currencyRepository.findByName("XAU");
                if (existingCurrency.isPresent()) {
                    Currency currency = existingCurrency.get();
                    currency.setCurrentPrice(gramAmountOfOneDollar);
                    currencyRepository.save(currency);
                } else {
                    // Yoksa yeni bir döviz ekle
                    Currency currency = new Currency();
                    currency.setName("XAU");
                    currency.setCurrentPrice(gramAmountOfOneDollar);
                    currency.setType(CurrencyType.GOLD);
                    currencyRepository.save(currency);
                }
                System.out.println("Gram Amount " + gramAmountOfOneDollar);
            } else {
                System.out.println("Gold price row not found.");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    //Her 100 dakikada bir Türkiye borsasını güncelle
    @Scheduled(fixedRate =6000000 )
    public void fetchAndStoreStockPrice(){
        try {
            // Target URL
            String url = "https://uzmanpara.milliyet.com.tr/canli-borsa/bist-TUM-hisseleri/";

            // Fetch the page
            Document document = Jsoup.connect(url).get();

            // Select all stock rows
            Elements rows = document.select("tbody tr.zebra");

            // Loop through each row to get stock data
            for (Element row : rows) {
                // Extract the stock name
                String stockName = row.select("b").text();

                // Extract the current price
                String priceString = row.select("#h_td_fiyat_id_" + stockName).text();
                //Remove dot
                String dotDeleted=priceString.replace(".", "").replaceAll("[^\\d,]", "").trim();
                // Remove commas for parsing
                String cleanedString = dotDeleted.replace(",", ".");
                double currentPrice = Double.parseDouble(cleanedString);
                System.out.println("currentPrice"+currentPrice);
                // Check if the stock is already in the database
                Optional<Currency> existingCurrency = currencyRepository.findByName(stockName);
                double dollarTRY=currencyRepository.findByName("TRY").get().getCurrentPrice();
                if (existingCurrency.isPresent()) {
                    // Update existing stock price
                    Currency currency = existingCurrency.get();
                    currency.setCurrentPrice(currentPrice/dollarTRY);
                    currencyRepository.save(currency);
                } else {
                    // If it doesn't exist, create a new stock entry
                    Currency currency = new Currency();
                    currency.setName(stockName);
                    currency.setCurrentPrice(currentPrice/dollarTRY);
                    currency.setType(CurrencyType.STOCK);
                    currencyRepository.save(currency);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
