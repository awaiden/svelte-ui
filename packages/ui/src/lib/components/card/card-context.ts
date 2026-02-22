import { createContext } from "svelte";

import type { cardVariants } from "./card.variants";

interface CardContext {
	slots: ReturnType<typeof cardVariants>;
}

export const [getCardContext, setCardContext] = createContext<CardContext>();
