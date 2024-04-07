import { component$, useTask$ } from "@builder.io/qwik";

export default component$(() => {
  const coinGeckoApiKey = import.meta.env.PUBLIC_COINGECKO_API_KEY;
  useTask$(async () => {
    console.log(coinGeckoApiKey);
  });

  return (
    <nav class="top-0 ml-auto flex h-16 w-[84.4%] items-center border-b border-[#0D2137] bg-[#09182A] px-6 py-9 z-30">
      <div class="flex-1">
        <div class="flex items-center ">
          <div class="w-2/5 justify-start">
            <input
              type="text"
              placeholder="Search for any token or wallet"
              class="w-full rounded-full border border-[#85b3db79] bg-[#06111D] p-2 px-4 py-2 duration-300 hover:border-[#6c87d1cc] "
            />
          </div>
          <ul class="ml-auto flex items-center">
            <li class=" flex cursor-pointer justify-end rounded-md border border-[#85b3db79] hover:border-[#6c87d1cc] ">
              <button class=" px-7 py-2 text-[#85B3DB] hover:text-blue-300">
                Login/Connect
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});
