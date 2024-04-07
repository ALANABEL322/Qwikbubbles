import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
// import Navbar from "~/components/navbar /Navbar";
// import Sidemenu from "~/components/sideMenu/Sidemenu";


export default component$(() => {
  return (
    <>   
    {/* <Navbar /> 
    <Sidemenu />  */}
  {/* <div class="flex items-center justify-center">
  <h1 class="text-9xl">Qwik</h1>
  </div>    */}
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
