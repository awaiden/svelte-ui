<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { cardVariants, type CardVariantType } from "./card.variants";

export interface CardProps
	extends CardVariantType,
		HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	let slots = $derived(cardVariants());
</script>

<div class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</div>
