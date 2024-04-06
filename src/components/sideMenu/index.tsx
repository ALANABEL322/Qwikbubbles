import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";
export const Index = component$(() => {
  return (
    <div>
      <h1 class={styles.sidemenu}> Side menu</h1>
    </div>
  );
});
