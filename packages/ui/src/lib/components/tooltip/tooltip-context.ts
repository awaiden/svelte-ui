import { createContext } from 'svelte';

import type { tooltipVariants } from './tooltip.variants';

interface TooltipContext {
	slots: ReturnType<typeof tooltipVariants>;
}

export const [getTooltipContext, setTooltipContext] = createContext<TooltipContext>();
