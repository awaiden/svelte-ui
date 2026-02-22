<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import type { CardVariantType } from "./card.variants";

import { getCardContext } from "./card-context";

export type CardProps = CardVariantType & HTMLAttributes<HTMLParagraphElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	const { slots } = getCardContext();
</script>

<p class={cn(slots.description(), className)} {...rest}>
	{@render children?.()}
</p>
