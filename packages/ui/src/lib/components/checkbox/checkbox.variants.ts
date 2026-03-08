import { tv, type VariantProps } from 'tailwind-variants';

export const checkboxVariants = tv({
	base: 'checkbox',
	defaultVariants: {},
	variants: {}
});

export type CheckboxVariantType = VariantProps<typeof checkboxVariants>;
