import { tv, type VariantProps } from "tailwind-variants";

export const {{camelName}}Variants = tv({
	base: "{{name}}",
	defaultVariants: {
		variant: "default",
	},
	variants: {
		variant: {
			default: "{{name}}--default",
		},
	},
});

export type {{PascalName}}VariantType = VariantProps<typeof {{camelName}}Variants>;
