<script lang="ts" module>
import type { Tabs } from "bits-ui";

import { cn } from "tailwind-variants";

import { getTabsContext } from "./tabs-context";

export type TabsListProps = Tabs.ListProps;
</script>

<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: TabsListProps = $props();

	const { slots } = getTabsContext();
</script>

<TabsPrimitive.List class={cn(slots.list(), className)} {...rest}>
	{@render children?.()}
</TabsPrimitive.List>
