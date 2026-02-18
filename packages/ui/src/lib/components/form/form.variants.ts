import { tv, type VariantProps } from "tailwind-variants";

export const formVariants = tv({
	base: "form",
});

export type FormVariantType = VariantProps<typeof formVariants>;
