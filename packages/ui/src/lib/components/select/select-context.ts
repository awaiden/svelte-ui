import { createContext } from "svelte";
import type { selectVariants } from "./select.variants";

interface SelectContext {
	slots: ReturnType<typeof selectVariants>;
}

export const [getSelectContext, setSelectContext] =
	createContext<SelectContext>();
