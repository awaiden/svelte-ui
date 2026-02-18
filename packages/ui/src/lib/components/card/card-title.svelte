<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import { cardVariants, type CardVariantType } from './card.variants';

	export interface CardProps extends CardVariantType, HTMLAttributes<HTMLHeadingElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	let slots = $derived(cardVariants());
</script>

<h2 class={cn(slots.title(), className)} {...rest}>
	{@render children?.()}
</h2>
