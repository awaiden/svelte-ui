<script lang="ts" module>
	import type { Tabs } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getTabsContext } from './tabs-context';

	export type TabsContentProps = Tabs.ContentProps;
</script>

<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: TabsContentProps = $props();

	const { slots } = getTabsContext();
</script>

<TabsPrimitive.Content class={cn(slots.content(), className)} {...rest}>
	{@render children?.()}
</TabsPrimitive.Content>
