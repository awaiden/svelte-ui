import { tv, type VariantProps } from "tailwind-variants";

export const linkVariants = tv({
  base: "link",
});

export type LinkVariantType = VariantProps<typeof linkVariants>;
