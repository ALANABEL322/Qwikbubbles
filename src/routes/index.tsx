import { type DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

// interface IDataBubble {
//   id: string;
//   image: string;
//   current_price: number;
//   name: string;
// }

// export const useCoinData = routeLoader$(async () => {
//   const baseUrl = import.meta.env.PUBLIC_BASE_URL;
//   const currency = import.meta.env.PUBLIC_CURRENCY;
//   const order = import.meta.env.PUBLIC_ORDER;
//   const perPage = import.meta.env.PUBLIC_PER_PAGE;
//   const page = import.meta.env.PUBLIC_PAGE;
//   const sparkline = import.meta.env.PUBLIC_SPARKLINE;
//   const locale = import.meta.env.PUBLIC_LOCALE;
//   const apiKey = import.meta.env.PUBLIC_COINGECKO_API_KEY;

//   const resp = await fetch(
//     `${baseUrl}?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&locale=${locale}&apiKey=${apiKey}`,
//   );
//   const data = await resp.json();
//   console.log(data);
//   return data;
// });

export default component$(() => {
  // const cardBubble = useStore<IDataBubble[]>([]);

  return (
    <>
      {" "}
      <h1 class="flex items-center justify-center text-9xl text-slate-50">
        oooooooO
      </h1>
      {/* {cardBubble.map((bubble: IDataBubble, index: number) => (
        <div key={index} class="flex items-center justify-center">
          <div class="relative my-8 flex h-96 w-80 flex-col rounded-xl bg-white bg-clip-border pt-8 text-gray-700 shadow-md">
            <img
              src={bubble.image}
              alt={`image-${index}`}
              width={290}
              height={40}
              class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white shadow-lg"
            />
            <div class="p-6">
              <h3 class="text-blue-gray-900 mb-2 mt-4 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
                {bubble.name}
              </h3>
              <p class="mt-4 block text-base font-medium leading-relaxed text-inherit text-red-500 antialiased">
                {bubble.current_price}
              </p>
            </div>
          </div>
        </div>
      ))} */}
    </>
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
