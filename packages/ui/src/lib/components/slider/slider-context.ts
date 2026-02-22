import { createContext } from "svelte";

import type { sliderVariants } from "./slider.variants";

interface SliderContext {
	slots: ReturnType<typeof sliderVariants>;
}

export const [getSliderContext, setSliderContext] =
	createContext<SliderContext>();
