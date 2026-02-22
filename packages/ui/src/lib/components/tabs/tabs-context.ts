import { createContext } from "svelte";

import type { tabsVariants } from "./tabs.variants";

interface TabsContext {
	slots: ReturnType<typeof tabsVariants>;
}

export const [getTabsContext, setTabsContext] = createContext<TabsContext>();
