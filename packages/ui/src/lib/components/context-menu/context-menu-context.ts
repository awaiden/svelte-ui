import { createContext } from 'svelte';

import type { contextMenuVariants } from './context-menu.variants';

interface ContextMenuContext {
	slots: ReturnType<typeof contextMenuVariants>;
}

export const [getContextMenuContext, setContextMenuContext] = createContext<ContextMenuContext>();
