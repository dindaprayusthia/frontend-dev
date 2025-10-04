/// <reference types="svelte" />
import type { ComponentType, SvelteComponent } from "svelte";

declare module "*.svelte" {
  const component: ComponentType<SvelteComponent>;
  export default component;
}

declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    [key: string]: any;
  }
}