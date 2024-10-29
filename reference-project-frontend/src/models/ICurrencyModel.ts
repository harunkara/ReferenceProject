import { CurrencyTypesEnum } from "./enums/CurrencyTypesEnum";

export interface ICurrencyModel {
  currencyId: number;
  currentPrice: number;
  name: string;
  type: CurrencyTypesEnum;
}
