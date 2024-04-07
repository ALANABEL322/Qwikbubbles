import { component$, useTask$ } from "@builder.io/qwik";
const SearchIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#1C6271"
      d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
    />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export default component$(() => {
  const coinGeckoApiKey = import.meta.env.PUBLIC_COINGECKO_API_KEY;
  useTask$(async () => {
    console.log(coinGeckoApiKey);
  });

  return (
    <nav class="absolute right-0 z-[1000] ml-auto flex h-20 w-[84.4%] items-center border-b border-[#0D2137] bg-[#09182A] px-6 py-9">
      <div class="flex-1">
        <div class="relative flex items-center">
          <div class="relative w-1/3 ">
            <input
              type="text"
              placeholder="Search for any token or wallet"
              style={{textDecoration: "#1C6271"}}
              class="pl-14 text-[#1C6271] placeholder-[#1C6271]::placeholder w-full rounded-full border border-[#85b3db79] bg-[#06111D] p-2 px-4 py-3  duration-300 hover:border-[#6c87d1cc] focus:placeholder-transparent "
            />
            <div class=" absolute inset-y-0 left-3 flex items-center pl-3">
              {SearchIcon}
            </div>
          </div>
          <ul class="ml-auto flex items-center">
            <li class=" flex cursor-pointer justify-end rounded-md border border-[#85b3db79] hover:border-[#6c87d1cc] ">
              <button class="px-7 py-2 text-[#85B3DB] hover:text-blue-300">
                Login/Connect
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});
