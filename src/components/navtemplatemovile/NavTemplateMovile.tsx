import { component$ } from "@builder.io/qwik";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <div class="block lg:hidden">
      <div class={[styles.containerTemplate]}>
        <div class={[styles.NavMovile]}>
          <div class={[styles.menuIcons]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
              />
              <circle cx="7" cy="12" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              <circle cx="17" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});
//