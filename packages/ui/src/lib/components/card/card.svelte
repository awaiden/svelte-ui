<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { setCardContext } from "./card-context";
import { cardVariants, type CardVariantType } from "./card.variants";

export type CardProps = CardVariantType & HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: CardProps = $props();

	let slots = $derived(cardVariants());

	setCardContext({
		get slots() {
			return slots;
		}
	});
</script>

<div class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</div>
