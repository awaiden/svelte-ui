import { tv, type VariantProps } from 'tailwind-variants';

export const avatarVariants = tv({
	defaultVariants: {
		size: 'md'
	},
	slots: {
		fallback: 'avatar__fallback',
		image: 'avatar__image',
		root: 'avatar'
	},
	variants: {
		size: {
			lg: { root: 'avatar--lg' },
			md: { root: 'avatar--md' },
			sm: { root: 'avatar--sm' },
			xl: { root: 'avatar--xl' },
			xs: { root: 'avatar--xs' }
		}
	}
});

export type AvatarVariantType = VariantProps<typeof avatarVariants>;
