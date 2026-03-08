import { tv, type VariantProps } from 'tailwind-variants';

export const tooltipVariants = tv({
	slots: {
		arrow: 'tooltip__arrow',
		content: 'tooltip__content'
	}
});

export type TooltipVariantType = VariantProps<typeof tooltipVariants>;
