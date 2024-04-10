import type { Coingecko } from "../interface/card";

const baseUrl = import.meta.env.PUBLIC_BASE_URL;
const currency = import.meta.env.PUBLIC_CURRENCY;
const order = import.meta.env.PUBLIC_ORDER;
const sparkline = import.meta.env.PUBLIC_SPARKLINE;
const locale = import.meta.env.PUBLIC_LOCALE;
const apiKey = import.meta.env.PUBLIC_COINGECKO_API_KEY;

export interface CoinGeckoParams {
  number: number;
  offset: number;
}

export const getCoinGecko = async ({ number, offset }: CoinGeckoParams) => {
  const response = await fetch(
    `${baseUrl}?vs_currency=${currency}&order=${order}&per_page=${number}&page=${offset}&sparkline=${sparkline}&locale=${locale}&apiKey=${apiKey}`,
  );
  const data = (await response.json()) as Coingecko[];
  console.log({ "console log del endpoint": data });
  return data;
};
