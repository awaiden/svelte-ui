<script lang="ts" module>
import type { Collapsible } from "bits-ui";

import { cn } from "tailwind-variants";

import { setCollapsibleContext } from "./collapsible-context";
import {
	collapsibleVariants,
	type CollapsibleVariantType,
} from "./collapsible.variants";

export type CollapsibleRootProps = Collapsible.RootProps &
	CollapsibleVariantType;
</script>

<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: CollapsibleRootProps = $props();

	let slots = $derived(collapsibleVariants());

	setCollapsibleContext({
		get slots() {
			return slots;
		}
	});
</script>

<CollapsiblePrimitive.Root class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</CollapsiblePrimitive.Root>
