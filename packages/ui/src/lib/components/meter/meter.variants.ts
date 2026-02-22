import { tv, type VariantProps } from "tailwind-variants";

export const meterVariants = tv({
	base: "meter",
	defaultVariants: {},
	variants: {},
});

export type MeterVariantType = VariantProps<typeof meterVariants>;
