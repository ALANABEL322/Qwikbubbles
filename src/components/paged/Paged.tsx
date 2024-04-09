import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class="block lg:hidden">
      <div class={[styles.containerpaged]}>
        <div class={[styles.paged]}>
          <h1 class="text-3xl text-white">paginado</h1>
        </div>
      </div>
    </div>
  );
});
