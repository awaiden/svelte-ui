import { tv, type VariantProps } from 'tailwind-variants';

export const selectVariants = tv({
	slots: {
		content: 'select__content',
		groupHeading: 'select__group-heading',
		item: 'select__item',
		scrollButton: 'select__scroll-button',
		trigger: 'select__trigger',
		viewport: 'select__viewport'
	}
});

export type SelectVariantType = VariantProps<typeof selectVariants>;
