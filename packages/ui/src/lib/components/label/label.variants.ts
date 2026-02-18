import { tv, type VariantProps } from "tailwind-variants";

export const labelVariants = tv({
	base: "label",
});

export type LabelVariantType = VariantProps<typeof labelVariants>;
