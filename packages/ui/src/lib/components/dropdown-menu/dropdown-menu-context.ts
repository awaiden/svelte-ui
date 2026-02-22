import { createContext } from "svelte";

import type { dropdownMenuVariants } from "./dropdown-menu.variants";

interface DropdownMenuContext {
	slots: ReturnType<typeof dropdownMenuVariants>;
}

export const [getDropdownMenuContext, setDropdownMenuContext] =
	createContext<DropdownMenuContext>();
