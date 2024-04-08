
import ImgMoralismoneylogotype431faf8b from '/public/fonts/MoralisMoneyLogotype.431faf8b.svg?jsx';import { $, component$, useSignal } from "@builder.io/qwik";
import styles from "./index.module.css";
import { Link } from "@builder.io/qwik-city";

const StartTrialIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 24 24"
    class="hover:text-slate-200"
  >
    <path
      fill="#85B3DB"
      d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
    />
  </svg>
);

interface ImageProps1 {
  src: string;
  alt: string;
}

interface ImageProps2 {
  src: string;
  alt: string;
}

interface Subcategory {
  label: string;
  onClick: () => void;
}

export default component$(() => {
  const isOpenOverview = useSignal(false);
  const isOpenResearch = useSignal(false);
  const isOpenLearn = useSignal(false);

  const ImageProps1: ImageProps1 = {
    src: "../../../public/fonts/MoralisMoneyLogomark.5b65b0d7.svg",
    alt: "logoMoralisMoney",
  };

  const ImageProps2: ImageProps2 = {
    src: "../../../public/fonts/MoralisMoneyLogotype.431faf8b.svg",
    alt: "logoMoralisMoney",
  };

  const toggleDropdownOverview = $(() => {
    isOpenOverview.value = !isOpenOverview.value;
  });

  const toggleDropdownResearch = $(() => {
    isOpenResearch.value = !isOpenResearch.value;
  });

  const toggleDropdownLearn = $(() => {
    isOpenLearn.value = !isOpenLearn.value;
  });

  const subcategoriesOverview: Subcategory[] = [
    {
      label: "Top Tokens by Market Cap",
      onClick: () => console.log("Subcategoría 1 clicked"),
    },
    {
      label: "Top Tokens On The Move",
      onClick: () => console.log("Subcategoría 2 clicked"),
    },
  ];

  const subcategoriesResearch: Subcategory[] = [
    {
      label: "Token Explorer",
      onClick: () => console.log("Subcategoría 1 clicked"),
    },
    {
      label: "Chains",
      onClick: () => console.log("Subcategoría 2 clicked"),
    },

    {
      label: "New Coins",
      onClick: () => console.log("Subcategoría 3 clicked"),
    },
    {
      label: "Private Alpha Group",
      onClick: () => console.log("Subcategoría 4 clicked"),
    },
  ];

  const subcategoriesLearn: Subcategory[] = [
    {
      label: "Free Ebook",
      onClick: () => console.log("Subcategoría 1 clicked"),
    },
    {
      label: "Get Money Line",
      onClick: () => console.log("Subcategoría 2 clicked"),
    },
    {
      label: "Blog",
      onClick: () => console.log("Subcategoría 3 clicked"),
    },
    {
      label: "Glossary",
      onClick: () => console.log("Subcategoría 4 clicked"),
    },
    {
      label: "FAQs",
      onClick: () => console.log("Subcategoría 5 clicked"),
    },
  ];

  return (
    <div class={[styles.sideMenu, "absolute z-10 hidden lg:block"]}>
      <div
        class={[styles.fixedWidhtMenu, "flex h-screen  flex-col bg-[#0F253D]"]}
      >
        <div class={[styles.logo, "mb-6 p-7"]}>
          <Link
            href="/"
            title="moralismoney"
            class=" flex items-center justify-center gap-3 "
          >
            <img {...ImageProps1} class=" object-cover" />
            <ImgMoralismoneylogotype431faf8b {...ImageProps2} class=" object-cover" />
          </Link>
        </div>
        <div class="">
          <div class={[styles.Menu, "gap-3"]}>
            <div class="relative">
              <button
                type="button"
                onClick$={toggleDropdownOverview}
                class="relative flex items-center rounded-md bg-[#0D2035]  px-6 py-4 text-left  text-sm font-medium text-white hover:bg-[#0d20359a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded={isOpenOverview.value ? "true" : "false"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="mb-1 mr-5 flex-shrink-0 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="25"
                    viewBox="0 0 24 24"
                    class="mr-5 flex-shrink-0 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 32 32"
                      class="flex-shrink-0 items-center justify-center"
                    >
                      <path
                        fill="currentColor"
                        d="M13 3v24h-2V7H5v20H3v2h26v-2h-2V14h-6v13h-2V3zm2 2h2v22h-2z"
                      />
                    </svg>
                  </svg>
                </svg>
                <span class="mr-10  truncate text-[18px] font-semibold">
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
                  {isOpenOverview.value ? (
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
              {isOpenOverview.value && (
                <div
                  class={[
                    styles.subMenu,
                    "relative left-14 mt-2 flex w-56 flex-col items-center rounded-md bg-[#0F253D] ring-1 ring-black ring-opacity-5",
                  ]}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {subcategoriesOverview.map((subcategory, index) => (
                    <button
                      key={index}
                      onClick$={$(onclick)}
                      class="flex w-full  justify-start  truncate px-4 py-4 text-[15px] text-sm font-bold text-white  hover:bg-[#5f686e1e] hover:text-white"
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
              )}
            </div>
            <div class="relative ">
              <button
                type="button"
                onClick$={toggleDropdownResearch}
                class={`relative mt-2 flex  items-center rounded-md py-4 pr-[60px] text-sm font-medium text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${
                  isOpenResearch.value
                    ? "bg-[#0D2035]"
                    : "bg-[#0F253D] hover:bg-[#6590c209]"
                }`}
                id="options-menu-Research"
                aria-haspopup="true"
                aria-expanded={isOpenResearch.value ? "true" : "false"}
                style={{
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="ml-5 mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5q0 .625.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
                  />
                </svg>

                <span class=" flex pr-20 text-[18px] font-semibold">
                  Research
                </span>
                <svg
                  class="w-15 absolute right-1  top-[50%] h-10 -translate-y-1/2 transition-transform duration-300"
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
                  {isOpenResearch.value ? (
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
              {isOpenResearch.value && (
                <div
                  class={[
                    styles.subMenu,
                    " relative left-14  mt-2 w-56 rounded-md bg-[#0F253D] ring-1 ring-black ring-opacity-5",
                  ]}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu-Research"
                >
                  {subcategoriesResearch.map((subcategory, index) => (
                    <button
                      key={index}
                      onClick$={$(onclick)}
                      class="mr-4 flex w-full justify-start truncate px-7 py-4	text-left text-[15px] text-sm font-bold text-white  hover:bg-[#5f686e1e] hover:text-white"
                      role="menuitem"
                    >
                      {subcategory.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/**button Saved */}
            <div class="relative ">
              <button
                type="button"
                class={`relative mt-2 flex  items-center rounded-md py-4 pr-[60px] text-left text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6590c209] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                id="options-menu-Saved"
                aria-haspopup="true"
                style={{
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="ml-5 mr-4"
                >
                  <path
                    fill="currentColor"
                    d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675q.9-1.138 1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025q.9 1.137 2.45 2.675T12 18.3m0-6.825"
                  />
                </svg>

                <span class=" flex pr-[101px] text-[18px] font-semibold">
                  Saved
                </span>
              </button>
            </div>
            {/**button Learn */}
            <div class="relative ">
              <button
                type="button"
                onClick$={toggleDropdownLearn}
                class={`relative mt-2 flex items-center rounded-md py-4 pr-[60px] text-sm font-medium text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${
                  isOpenLearn.value
                    ? "bg-[#0D2035]"
                    : "bg-[#0F253D] hover:bg-[#6590c209]"
                }`}
                id="options-menu-Learn"
                aria-haspopup="true"
                aria-expanded={isOpenLearn.value ? "true" : "false"}
                style={{
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="ml-5 mr-4"
                >
                  <path
                    fill="currentColor"
                    d="M6.5 20c1.7 0 4.15.65 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5c-1.17 0-2.39.15-3.5.5c-.75.25-1.4.55-2 1v14.6c0 .25.25.5.5.5c.1 0 .15 0 .25-.05C3.15 20.3 4.85 20 6.5 20m5.5-.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5v11.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5"
                  />
                </svg>

                <span class=" flex pr-[103px] text-[18px] font-semibold">
                  Learn
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
                  {isOpenLearn.value ? (
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
              {isOpenLearn.value && (
                <div
                  class={[
                    styles.subMenu,
                    " relative left-14  mt-2 w-56 rounded-md bg-[#0F253D] ring-1 ring-black ring-opacity-5",
                  ]}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu-Learn"
                >
                  {subcategoriesLearn.map((subcategory, index) => (
                    <button
                      key={index}
                      onClick$={$(onclick)}
                      class="mr-4 flex w-full justify-start truncate px-7 py-4	text-left text-[15px] text-sm font-bold text-white  hover:bg-[#5f686e1e] hover:text-white"
                      role="menuitem"
                    >
                      {subcategory.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/**button porfolio */}
            <div class="relative ">
              <button
                type="button"
                class={`relative mt-2 flex items-center rounded-md py-4 pr-[60px] text-left text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6590c209] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                id="options-menu-porfolio"
                aria-haspopup="true"
                style={{
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="ml-5 "
                >
                  <path
                    fill="currentColor"
                    d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2"
                  />
                </svg>

                <span class="ml-3 flex pr-[77px] text-[18px] font-semibold">
                  Portfolio
                </span>
              </button>
            </div>
            {/**button settings */}
            <div class="relative ">
              <button
                type="button"
                class={`relative mt-2 flex items-center rounded-md py-4 pr-[60px] text-left text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6590c209] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                id="options-menu-settings"
                aria-haspopup="true"
                style={{
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="ml-5 mr-3"
                >
                  <path
                    fill="currentColor"
                    d="M12 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-2 12c-.25 0-.46-.18-.5-.42l-.37-2.65c-.63-.25-1.17-.59-1.69-.99l-2.49 1.01c-.22.08-.49 0-.61-.22l-2-3.46a.493.493 0 0 1 .12-.64l2.11-1.66L4.5 12l.07-1l-2.11-1.63a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.39-.31.61-.22l2.49 1c.52-.39 1.06-.73 1.69-.98l.37-2.65c.04-.24.25-.42.5-.42h4c.25 0 .46.18.5.42l.37 2.65c.63.25 1.17.59 1.69.98l2.49-1c.22-.09.49 0 .61.22l2 3.46c.13.22.07.49-.12.64L19.43 11l.07 1l-.07 1l2.11 1.63c.19.15.25.42.12.64l-2 3.46c-.12.22-.39.31-.61.22l-2.49-1c-.52.39-1.06.73-1.69.98l-.37 2.65c-.04.24-.25.42-.5.42zm1.25-18l-.37 2.61c-1.2.25-2.26.89-3.03 1.78L5.44 7.35l-.75 1.3L6.8 10.2a5.55 5.55 0 0 0 0 3.6l-2.12 1.56l.75 1.3l2.43-1.04c.77.88 1.82 1.52 3.01 1.76l.37 2.62h1.52l.37-2.61c1.19-.25 2.24-.89 3.01-1.77l2.43 1.04l.75-1.3l-2.12-1.55c.4-1.17.4-2.44 0-3.61l2.11-1.55l-.75-1.3l-2.41 1.04a5.42 5.42 0 0 0-3.03-1.77L12.75 4z"
                  />
                </svg>
                <span class=" flex pr-[82px] text-[18px] font-semibold">
                  Settings
                </span>
              </button>
            </div>
            {/**API for devs */}
            <div class="relative ">
              <button
                type="button"
                class={`relative mt-2 flex items-center rounded-md py-4 pr-[60px] text-left text-sm font-medium text-white transition-colors duration-300 hover:bg-[#6590c209] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                id="options-menu-devs"
                aria-haspopup="true"
                style={{
                  transition: "background-color 0.3s ease",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class="ml-5 mr-4"
                >
                  <path
                    fill="currentColor"
                    d="M2 7V3h20v4h-2V5H4v2zm6 14v-2H2v-4h2v2h16v-2h2v4h-6v2zM4.8 11l2.6-2.6L6 7l-4 4l4 4l1.4-1.4zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4z"
                  />
                </svg>

                <span class=" flex truncate pr-[45px] text-[18px] font-semibold  ">
                  API For Devs
                </span>
              </button>
            </div>
            {/**button start trial */}
          </div>
          <div class="absolute bottom-10 left-5 flex flex-col items-center justify-center">
            <div class="absolute inset-y-0 left-7 flex flex-col items-center justify-center pl-7">
              <div class="group-hover:text-blue-300">{StartTrialIcon}</div>
            </div>
            <ul class="flex flex-col items-center justify-center">
              <li class="flex cursor-pointer rounded-md border border-[#85b3db79] hover:border-[#6c87d1cc]">
                <button class="truncate px-24 py-3 text-[18px] text-[#85B3DB] hover:text-blue-300">
                  Start Trial
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
