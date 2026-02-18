import { tv, type VariantProps } from 'tailwind-variants';

export const separatorVariants = tv({
	base: 'separator'
});

export type SeparatorVariantType = VariantProps<typeof separatorVariants>;
