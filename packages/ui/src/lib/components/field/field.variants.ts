import { tv, type VariantProps } from 'tailwind-variants';

export const fieldVariants = tv({
	slots: {
		description: 'field__description',
		error: 'field__error',
		group: 'field__group',
		label: 'field__label',
		prefix: 'field__prefix',
		root: 'field',
		suffix: 'field__suffix'
	}
});

export type FieldVariantType = VariantProps<typeof fieldVariants>;
