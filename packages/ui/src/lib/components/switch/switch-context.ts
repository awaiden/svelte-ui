import { createContext } from "svelte";

import type { switchVariants } from "./switch.variants";

interface SwitchContext {
	slots: ReturnType<typeof switchVariants>;
}

export const [getSwitchContext, setSwitchContext] =
	createContext<SwitchContext>();
