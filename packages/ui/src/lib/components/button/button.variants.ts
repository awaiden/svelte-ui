import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
	base: 'button',
	defaultVariants: {
		size: 'md',
		variant: 'primary'
	},
	variants: {
		isIconOnly: {
			true: 'button--only-icon'
		},
		size: {
			lg: 'button--lg',
			md: 'button--md',
			sm: 'button--sm'
		},
		variant: {
			ghost: 'button--ghost',
			outline: 'button--outline',
			primary: 'button--primary',
			secondary: 'button--secondary'
		}
	}
});

export type ButtonVariantType = VariantProps<typeof buttonVariants>;
