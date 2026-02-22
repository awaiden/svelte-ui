import { createContext } from "svelte";

import type { accordionVariants } from "./accordion.variants";

interface AccordionContext {
	slots: ReturnType<typeof accordionVariants>;
}

export const [getAccordionContext, setAccordionContext] =
	createContext<AccordionContext>();
