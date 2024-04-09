import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";
import Navbar from "../components/navbar /Navbar";
import Sidemenu from "~/components/sideMenu/Sidemenu";
import NavTemplateMovile from "../components/navtemplatemovile/NavTemplateMovile";
import Paged from "~/components/paged/Paged";
export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Sidemenu />
      <Navbar />
      <NavTemplateMovile />
      <Paged />
      <main>
        <Slot />
      </main>
    </>
  );
});
