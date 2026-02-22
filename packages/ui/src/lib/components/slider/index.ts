import Range from "./slider-range.svelte";
import ThumbLabel from "./slider-thumb-label.svelte";
import Thumb from "./slider-thumb.svelte";
import TickLabel from "./slider-tick-label.svelte";
import Tick from "./slider-tick.svelte";
import Root from "./slider.svelte";

export { sliderVariants, type SliderVariantType } from "./slider.variants";

export const Slider = {
	Range,
	Root,
	Thumb,
	ThumbLabel,
	Tick,
	TickLabel,
};
