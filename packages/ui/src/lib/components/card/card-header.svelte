<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getCardContext } from "./card-context";
import type { CardVariantType } from "./card.variants";

export interface CardProps
	extends CardVariantType,
		HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	const { slots } = getCardContext();
</script>

<div class={cn(slots.header(), className)} {...rest}>
	{@render children?.()}
</div>
