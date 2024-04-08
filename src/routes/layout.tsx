import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";
import Navbar from "../components/navbar /Navbar";
import Sidemenu from "~/components/sideMenu/Sidemenu";
import NavTemplateMovile from "../components/navtemplatemovile/NavTemplateMovile";
export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Sidemenu />
      <Navbar />
      <NavTemplateMovile />
      <main>
        <Slot />
      </main>
    </>
  );
});
