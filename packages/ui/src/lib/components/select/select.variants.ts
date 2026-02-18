import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
	slots: {
		arrow: "select__arrow",
		content: "select__content",
		group: "select__group",
		groupHeading: "select__group-heading",
		icon: "select__icon",
		item: "select__item",
		portal: "select__portal",
		root: "select",
		trigger: "select__trigger",
		viewport: "select__viewport",
	},
});

export type SelectVariantType = VariantProps<typeof selectVariants>;
