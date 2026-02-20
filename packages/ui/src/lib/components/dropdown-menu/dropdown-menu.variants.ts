import { tv, type VariantProps } from "tailwind-variants";

export const dropdownMenuVariants = tv({
	slots: {
		checkboxItem: "dropdown-menu__checkbox-item",
		content: "dropdown-menu__content",
		groupHeading: "dropdown-menu__group-heading",
		item: "dropdown-menu__item",
		radioItem: "dropdown-menu__radio-item",
		separator: "dropdown-menu__separator",
		shortcut: "dropdown-menu__shortcut",
		subContent: "dropdown-menu__sub-content",
		subTrigger: "dropdown-menu__sub-trigger",
	},
});

export type DropdownMenuVariantType = VariantProps<typeof dropdownMenuVariants>;
