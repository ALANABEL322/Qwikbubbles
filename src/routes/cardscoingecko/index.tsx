import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { getCoinGecko } from "~/api/coingecko";
import type { Coingecko } from "../../interface/card";
import styles from "../../components/sideMenu/index.module.css";

interface CardState {
  cards: Coingecko[];
  offset: number;
  isLoading: boolean;
}

export default component$(() => {
  const cardState = useStore<CardState>({
    cards: [],
    offset: 0,
    isLoading: false,
  });

  useVisibleTask$(async () => {
    const cards = await getCoinGecko({ number: 10, offset: cardState.offset });
    console.log({ "console log visibletask": cards });
    cardState.cards = cards;
  });

  return (
    <>
      <div class="mb-4 grid place-items-center gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        {cardState.cards.map((card) => {
          const cambioPrecioPorcentaje = card.price_change_percentage_24h;
          cambioPrecioPorcentaje > 0 ? "text-green-500" : "text-red-500";
          return (
            <div
              key={card.id}
              class={`flex min-h-[360px] w-[300px] flex-col items-center justify-center rounded-full  border-2 border-black bg-gradient-to-r p-8 ${cambioPrecioPorcentaje > 0 ? "from-green-400 to-green-600" : "from-red-400 to-red-600"}`}
            >
              <img src={card.image} alt={card.name} height={280} width={280} />
              <h1
                class={[
                  styles.FONT_CARD_TITTLE,
                  "text-2xl font-medium text-white",
                ]}
              >
                {" "}
                {card.name.toUpperCase()}
              </h1>

              {cambioPrecioPorcentaje !== 0 && (
                <p class="text-xl text-gray-400">
                  {cambioPrecioPorcentaje.toFixed(2)}%
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
});
