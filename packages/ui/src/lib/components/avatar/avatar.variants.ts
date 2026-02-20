import { tv, type VariantProps } from "tailwind-variants";

export const avatarVariants = tv({
	slots: {
		fallback: "avatar__fallback",
		image: "avatar__image",
		root: "avatar",
	},
	defaultVariants: {
		size: "md",
	},
	variants: {
		size: {
			xs: { root: "avatar--xs" },
			sm: { root: "avatar--sm" },
			md: { root: "avatar--md" },
			lg: { root: "avatar--lg" },
			xl: { root: "avatar--xl" },
		},
	},
});

export type AvatarVariantType = VariantProps<typeof avatarVariants>;
