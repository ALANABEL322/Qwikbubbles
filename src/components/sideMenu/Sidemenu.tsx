import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export default component$(() => {
  const ImageProps: ImageProps = {
    src: "../../../public/fonts/moralismoneylogo.png",
    width: 300,
    height: 100,
    alt: "logoMoralisMoney",
  };

  return (
    <div class="z-40">
      <div class="left-0 flex h-full w-[400px] justify-start">
        <div class={styles.logo}>
          <a href="/" title="moralismoney">
            <image {...ImageProps} class="z-30 object-cover" />
          </a>
        </div>
      </div>
    </div>
  );
});
