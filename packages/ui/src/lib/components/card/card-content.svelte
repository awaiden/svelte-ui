<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import type { CardVariantType } from './card.variants';

	import { getCardContext } from './card-context';

	export type CardProps = CardVariantType & HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	const { slots } = getCardContext();
</script>

<div class={cn(slots.content(), className)} {...rest}>
	{@render children?.()}
</div>
