<script lang="ts" module>
import type { Tabs } from "bits-ui";

import { cn } from "tailwind-variants";

import { setTabsContext } from "./tabs-context";
import { tabsVariants, type TabsVariantType } from "./tabs.variants";

export type TabsRootProps = Tabs.RootProps & TabsVariantType;
</script>

<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	let { children, class: className, value = $bindable(), ...rest }: TabsRootProps = $props();

	let slots = $derived(tabsVariants());

	setTabsContext({
		get slots() {
			return slots;
		}
	});
</script>

<TabsPrimitive.Root bind:value class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</TabsPrimitive.Root>
