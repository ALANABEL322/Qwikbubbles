import { $, component$, useSignal } from "@builder.io/qwik";
import styles from "./index.module.css";
import { Link } from "@builder.io/qwik-city";

interface ImageProps1 {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ImageProps2 {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface Subcategory {
  label: string;
  onClick: () => void;
}
export default component$(() => {
  const isOpen = useSignal(false);

  const ImageProps1: ImageProps1 = {
    src: "../../../public/fonts/MoralisMoneyLogomark.5b65b0d7.svg",
    width: 50,
    height: 50,
    alt: "logoMoralisMoney",
  };

  const ImageProps2: ImageProps2 = {
    src: "../../../public/fonts/MoralisMoneyLogotype.431faf8b.svg",
    width: 80,
    height: 50,
    alt: "logoMoralisMoney",
  };

  const toggleDropdown = $(() => {
    isOpen.value = !isOpen.value;
  });

  const subcategories: Subcategory[] = [
    {
      label: "Top Tokens by Market Cap",
      onClick: () => console.log("Subcategoría 1 clicked"),
    },
    {
      label: "Top Tokens On The Move",
      onClick: () => console.log("Subcategoría 2 clicked"),
    },
  ];

  return (
    <div class={[styles.sideMenu, "absolute z-10"]}>
      <div class="flex h-screen  w-[15.6%] flex-col bg-[#0F253D] ">
        <div class={[styles.logo, "mb-6 p-7"]}>
          <Link
            href="/"
            title="moralismoney"
            class=" flex items-center justify-center gap-3 "
          >
            <img {...ImageProps1} class="h-[35px] w-[45px] object-cover" />
            <img {...ImageProps2} class="h-[26px] w-[180px] object-cover" />
          </Link>
        </div>
        <div class="">
          <div class={[styles.navbarMenu, ""]}>
            <div class="relative">
              <button
                type="button"
                onClick$={toggleDropdown}
                class="relative flex items-center rounded-md bg-[#0D2035]  px-6 py-4 text-left  text-sm font-medium text-white hover:bg-[#0d20359a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={isOpen.value ? "true" : "false"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  viewBox="0 0 24 24"
                  class="left-0 mr-5 flex justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M13 3v24h-2V7H5v20H3v2h26v-2h-2V14h-6v13h-2V3zm2 2h2v22h-2z"
                    />
                  </svg>
                </svg>
                <span class="mr-10  text-[18px] font-semibold">
                  {" "}
                  Market Overview
                </span>

                <svg
                  class="w-15 absolute right-1 top-[50%] h-10 -translate-y-1/2 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={29}
                  height={20}
                  aria-hidden="true"
                ></svg>

                <svg
                  class="w-15  absolute right-1 top-[50%] h-10 -translate-y-1/2 transition-transform duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={29}
                  height={20}
                  aria-hidden="true"
                >
                  {isOpen.value ? (
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28"
                    />
                  ) : (
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 14.5a1 1 0 0 1-.71-.29L12 10.9l-3.3 3.18a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.42a1 1 0 0 1-.69.28"
                    />
                  )}
                </svg>
              </button>

              {isOpen.value && (
                <div
                  class="absolute right-0 top-full  mt-2 w-56 rounded-md bg-[#0F253D] ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    class="flex flex-col items-center justify-center py-1"
                    role="none"
                  >
                    {subcategories.map((subcategory, index) => (
                      <button
                        key={index}
                        onClick$={$(onclick)}
                        class="mr-4 flex w-full justify-center truncate px-7 py-4	text-left text-[15px] text-sm font-bold text-white  hover:bg-[#5f686e1e] hover:text-white"
                        role="menuitem"
                      >
                        {index === 1 && (
                          <svg
                            class="absolute right-0 mr-2 flex"
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="#527596"
                              d="M16 3c-3.844 0-7 3.156-7 7v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7m0 2c2.754 0 5 2.246 5 5v3H11v-3c0-2.754 2.246-5 5-5M8 15h16v12H8z"
                            />
                          </svg>
                        )}
                        {subcategory.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
