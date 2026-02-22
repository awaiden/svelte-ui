<script lang="ts" module>
import type { Collapsible } from "bits-ui";

import { cn } from "tailwind-variants";

import { getCollapsibleContext } from "./collapsible-context";

export type CollapsibleContentProps = Collapsible.ContentProps;
</script>

<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: CollapsibleContentProps = $props();

	const { slots } = getCollapsibleContext();
</script>

<CollapsiblePrimitive.Content class={cn(slots.content(), className)} {...rest}>
	{@render children?.()}
</CollapsiblePrimitive.Content>
