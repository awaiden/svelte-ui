import { createContext } from "svelte";

import type { popoverVariants } from "./popover.variants";

interface PopoverContext {
	slots: ReturnType<typeof popoverVariants>;
}

export const [getPopoverContext, setPopoverContext] =
	createContext<PopoverContext>();
