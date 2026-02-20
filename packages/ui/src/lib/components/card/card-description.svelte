<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getCardContext } from "./card-context";
import type { CardVariantType } from "./card.variants";

export interface CardProps
	extends CardVariantType,
		HTMLAttributes<HTMLParagraphElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	const { slots } = getCardContext();
</script>

<p class={cn(slots.description(), className)} {...rest}>
	{@render children?.()}
</p>
