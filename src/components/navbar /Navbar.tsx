import { component$, useTask$ } from "@builder.io/qwik";

import styles from "./Navbar.module.css";

export default component$(() => {
  const coinGeckoApiKey = import.meta.env.PUBLIC_COINGECKO_API_KEY;
  useTask$(async () => {
    console.log(coinGeckoApiKey);
  });

  return (
    <navbar class={[styles.navbar]}>
      <div class={[styles.wrapper]}>
        <div class="w-[500px] ">
          <input
            type="text"
            placeholder="Search for any token or wallet"
            class="w-full rounded-full border border-[#85b3db79]  bg-[#06111D] p-2 px-4 py-2 duration-300 hover:border-blue-400"
          />
        </div>
        <ul>
          <li class="cursor-pointer rounded-md border border-[#85b3db79] hover:border-blue-400">
            <button class=" border px-7 py-2  text-[#85B3DB] hover:text-blue-300">
              Login/Connect
            </button>
          </li>
        </ul>
      </div>
    </navbar>
  );
});
