import { tv, type VariantProps } from "tailwind-variants";

export const collapsibleVariants = tv({
	slots: {
		content: "collapsible__content",
		root: "collapsible",
		trigger: "collapsible__trigger",
	},
});

export type CollapsibleVariantType = VariantProps<typeof collapsibleVariants>;
