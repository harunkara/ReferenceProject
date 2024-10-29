import axios from "axios";

export const HomePageRequests = () => {
  async function getAllCurrencies(jwt: string | null) {
    const config = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
    const result = await axios.get(
      `${import.meta.env.VITE_API}/currency/getAll`,
      config
    );
    return result?.data;
  }
  return { getAllCurrencies };
};
