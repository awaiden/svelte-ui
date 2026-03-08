import { tv, type VariantProps } from 'tailwind-variants';

export const sliderVariants = tv({
	slots: {
		range: 'slider__range',
		root: 'slider',
		thumb: 'slider__thumb',
		thumbLabel: 'slider__thumb-label',
		tick: 'slider__tick',
		tickLabel: 'slider__tick-label'
	}
});

export type SliderVariantType = VariantProps<typeof sliderVariants>;
