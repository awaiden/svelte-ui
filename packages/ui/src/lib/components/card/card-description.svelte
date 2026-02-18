<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { cardVariants, type CardVariantType } from "./card.variants";

export interface CardProps
	extends CardVariantType,
		HTMLAttributes<HTMLParagraphElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	let slots = $derived(cardVariants());
</script>

<p class={cn(slots.description(), className)} {...rest}>
	{@render children?.()}
</p>
