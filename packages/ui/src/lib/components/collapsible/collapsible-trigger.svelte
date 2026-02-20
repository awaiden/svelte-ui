<script lang="ts" module>
import type { Collapsible } from "bits-ui";

import { cn } from "tailwind-variants";

import { getCollapsibleContext } from "./collapsible-context";

export interface CollapsibleTriggerProps extends Collapsible.TriggerProps {}
</script>

<script lang="ts">
	import { Collapsible as CollapsiblePrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: CollapsibleTriggerProps = $props();

	const { slots } = getCollapsibleContext();
</script>

<CollapsiblePrimitive.Trigger class={cn(slots.trigger(), className)} {...rest}>
	{@render children?.()}
</CollapsiblePrimitive.Trigger>
