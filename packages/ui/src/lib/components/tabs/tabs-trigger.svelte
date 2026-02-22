<script lang="ts" module>
import type { Tabs } from "bits-ui";

import { cn } from "tailwind-variants";

import { getTabsContext } from "./tabs-context";

export type TabsTriggerProps = Tabs.TriggerProps;
</script>

<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: TabsTriggerProps = $props();

	const { slots } = getTabsContext();
</script>

<TabsPrimitive.Trigger class={cn(slots.trigger(), className)} {...rest}>
	{@render children?.()}
</TabsPrimitive.Trigger>
