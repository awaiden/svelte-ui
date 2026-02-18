import { tv, type VariantProps } from "tailwind-variants";

export const inputVariants = tv({
	base: "input",
});

export type InputVariantType = VariantProps<typeof inputVariants>;
