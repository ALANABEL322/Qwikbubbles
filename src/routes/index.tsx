import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import {
  component$,
  // Resource,
  // useResource$,
  // useSignal,
} from "@builder.io/qwik";
// import * as d3 from "d3";

export const useCoinData = routeLoader$(async () => {
  const baseUrl = import.meta.env.PUBLIC_BASE_URL;
  const currency = import.meta.env.PUBLIC_CURRENCY;
  const order = import.meta.env.PUBLIC_ORDER;
  const perPage = import.meta.env.PUBLIC_PER_PAGE;
  const page = import.meta.env.PUBLIC_PAGE;
  const sparkline = import.meta.env.PUBLIC_SPARKLINE;
  const locale = import.meta.env.PUBLIC_LOCALE;
  const apiKey = import.meta.env.PUBLIC_COINGECKO_API_KEY;

  const resp = await fetch(
    `${baseUrl}?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&locale=${locale}&apiKey=${apiKey}`,
  );
  const data = await resp.json();
  console.log(data);
  return data;
});

export default component$(() => {
  return (
    <div>
      <h1 class="flex items-center justify-center text-6xl text-slate-100">
        Bubbles
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to QwikBubbles",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
