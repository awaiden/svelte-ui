import { createContext } from "svelte";

import type { radioGroupVariants } from "./radio-group.variants";

interface RadioGroupContext {
	slots: ReturnType<typeof radioGroupVariants>;
}

export const [getRadioGroupContext, setRadioGroupContext] =
	createContext<RadioGroupContext>();
