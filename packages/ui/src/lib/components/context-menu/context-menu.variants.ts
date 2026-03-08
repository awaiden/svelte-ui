import { tv, type VariantProps } from 'tailwind-variants';

export const contextMenuVariants = tv({
	slots: {
		checkboxItem: 'context-menu__checkbox-item',
		content: 'context-menu__content',
		groupHeading: 'context-menu__group-heading',
		item: 'context-menu__item',
		radioItem: 'context-menu__radio-item',
		separator: 'context-menu__separator',
		shortcut: 'context-menu__shortcut',
		subContent: 'context-menu__sub-content',
		subTrigger: 'context-menu__sub-trigger'
	}
});

export type ContextMenuVariantType = VariantProps<typeof contextMenuVariants>;
