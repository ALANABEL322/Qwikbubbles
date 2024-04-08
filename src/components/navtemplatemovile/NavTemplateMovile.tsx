import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class="block lg:hidden">
      <div class={[styles.containerTemplate]}>
        <div class={[styles.NavMovile]}>
          <div class={[styles.menuIcons]}>
            <div class={[styles.svg]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffff"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
                />
                <circle cx="7" cy="12" r="1.5" fill="#ffff" />
                <circle cx="12" cy="12" r="1.5" fill="#ffff" />
                <circle cx="17" cy="12" r="1.5" fill="#ffff" />
              </svg>
              <span class="text-[13px] ">Extra</span>
            </div>
            <div class={[styles.svg]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
              >
                <path
                  fill="#ffff"
                  d="M13 3v24h-2V7H5v20H3v2h26v-2h-2V14h-6v13h-2V3zm2 2h2v22h-2z"
                />
              </svg>
              <span class="text-[13px] ">Market</span>
            </div>
            <div class={[styles.svg]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffff"
                  d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H20v15q-.625 0-1.062.438T18.5 18.5t.438 1.063T20 20v2zm.5-7h2V4H8zm-.5 5h9.255q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"
                />
              </svg>
              <span class="text-[13px] ">Research</span>
            </div>
            <div class="mx-1 rounded-full border border-sky-500 bg-[#1970D4] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffff"
                  d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
                />
              </svg>
            </div>
            <div class={[styles.svg]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                class="rounded-full"
              >
                <path
                  fill="#ffff"
                  d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
                />
              </svg>
              <span class="text-[13px] ">Saved</span>
            </div>
            <div class={[styles.svg]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffff"
                  d="m8 20l-1.4-1.425L9.175 16H2v-2h7.175L6.6 11.425L8 10l5 5zm8-6l-5-5l5-5l1.4 1.425L14.825 8H22v2h-7.175l2.575 2.575z"
                />
              </svg>
              <span class="text-[13px] ">Trade</span>
            </div>
            <div class="cursor-pointer rounded-full border border-sky-500 bg-[#002E41] hover:border-blue-300 hover:bg-[#4d699c52] ">
              <button class="p-[7px] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  class=""
                >
                  <path
                    fill="#54A7DD"
                    d="m10 19l-2.5-5.5L2 11l5.5-2.5L10 3l2.5 5.5L18 11l-5.5 2.5L10 19Zm8 2l-1.25-2.75L14 17l2.75-1.25L18 13l1.25 2.75L22 17l-2.75 1.25L18 21Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
//
