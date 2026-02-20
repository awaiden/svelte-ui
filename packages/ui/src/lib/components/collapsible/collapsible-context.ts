import { createContext } from "svelte";
import type { collapsibleVariants } from "./collapsible.variants";

interface CollapsibleContext {
	slots: ReturnType<typeof collapsibleVariants>;
}

export const [getCollapsibleContext, setCollapsibleContext] =
	createContext<CollapsibleContext>();
