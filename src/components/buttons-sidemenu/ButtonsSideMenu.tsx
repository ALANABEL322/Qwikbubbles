import { component$, $, useSignal } from "@builder.io/qwik";
import styles from "./index.module.css";
interface Subcategory {
  label: string;
  onClick: () => void;
}

export const ButtonsSideMenu = component$(() => {
  const isOpen = useSignal(false);

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
    <div>
      <div class="">
        <div class={[styles.containerButton, ""]}>
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
                width="32"
                height="32"
                viewBox="0 0 24 24"
                class="left-0 mr-5 flex justify-start"
              >
                <path
                  fill="currentColor"
                  d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5q0 .625.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
                />
              </svg>
              <span class="mr-10  text-[18px] font-semibold"> Research</span>

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
  );
});
{/* <button
                type="button"
                onClick$={toggleDropdownNew}
                class="relative flex items-center rounded-md bg-[#0D2035]  px-6 py-4 text-left  text-sm font-medium text-white hover:bg-[#0d20359a] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mt-2" // Agregamos mt-2 para separar los botones
                id="options-menu-new" // ID distinto para el nuevo botón
                aria-haspopup="true"
                aria-expanded={isOpenNew.value ? "true" : "false"}
              >
                <span class="mr-10 text-[18px] font-semibold">
                  Nuevo Botón
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
                  {isOpenNew.value ? (
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
              </button> */}