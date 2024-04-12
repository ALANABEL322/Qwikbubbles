import { type DocumentHead } from "@builder.io/qwik-city";
import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { getCoinGecko } from "~/api/coingecko";
import * as d3 from "d3";

interface EstadoBurbuja {
  datos: { nombre: string; valor: number; image: string }[];
  radio: number;
  offset: number;
}

export default component$(() => {
  const estadoBurbuja = useStore<EstadoBurbuja>({
    datos: [],
    radio: 50,
    offset: 0,
  });

  useVisibleTask$(async () => {
    const cards = await getCoinGecko({
      number: 10,
      offset: estadoBurbuja.offset,
    });
    const datos = cards.map((card) => ({
      nombre: card.name,
      valor: card.price_change_percentage_24h,
      image: card.image,
    }));
    estadoBurbuja.datos = datos;
    // eslint-disable-next-line qwik/valid-lexical-scope
    updateBubbles();
  });

  function updateBubbles() {
    const bubbles = d3
      .select<HTMLDivElement, any>(".contenedor-burbujas")
      .selectAll<
        HTMLDivElement,
        { nombre: string; valor: number; image: string }
      >("div.burbuja")
      .data(estadoBurbuja.datos);

    bubbles.exit().remove();

    const newBubbles = bubbles.enter().append("div").attr("class", "burbuja");

    newBubbles
      .merge(bubbles)
      .style("width", estadoBurbuja.radio * 2 + "px")
      .style("height", estadoBurbuja.radio * 2 + "px")
      .style("borderRadius", estadoBurbuja.radio + "px")
      .style("backgroundColor", (d: any) => getColor(d.valor))
      .style(
        "transform",
        (d: any, i: number) =>
          `translate(${getPosition(estadoBurbuja.datos.length, i)})`,
      )
      .html(
        (d: any) =>
          `<img src="${d.image}" alt="${d.nombre}" height="280" width="280"/><div>${d.nombre}</div>`,
      );
  }

  function getPosition(
    cantidadBurbujas: number,
    indiceBurbuja: number,
  ): string {
    const angulo = (Math.PI * 2 * indiceBurbuja) / cantidadBurbujas;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const x = viewportWidth / 2 + Math.cos(angulo) * (viewportWidth / 3);
    const y = viewportHeight / 10 + Math.sin(angulo) * (viewportHeight / 3);

    return `${x}px, ${y}px`;
  }

  function getColor(valor: number): string {
    return valor > 0 ? "green" : "red";
  }

  const renderBubbles = () => {
    return (
      <div
        class="contenedor-burbujas"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div id="my_dataviz"></div>
        {estadoBurbuja.datos.map((item, index) => (
          <div
            key={index}
            class="burbuja"
            style={{
              width: estadoBurbuja.radio * 2 + "px",
              height: estadoBurbuja.radio * 2 + "px",
              borderRadius: estadoBurbuja.radio + "px",
              backgroundColor: getColor(item.valor),
              transform: `translate(${getPosition(
                estadoBurbuja.datos.length,
                index,
              )})`,
            }}
          >
            <img src={item.image} alt={item.nombre} height={280} width={280} />
            <div>{item.nombre}</div>
          </div>
        ))}
      </div>
    );
  };
  return renderBubbles();
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
