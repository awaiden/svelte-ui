<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getContextMenuContext } from './context-menu-context';

	export type ContextMenuCheckboxItemProps = ContextMenu.CheckboxItemProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
	import LucideCheck from 'lucide-svelte/icons/check';

	let { checked, children, class: className, ...rest }: ContextMenuCheckboxItemProps = $props();

	const { slots } = getContextMenuContext();
</script>

<ContextMenuPrimitive.CheckboxItem class={cn(slots.checkboxItem(), className)} {checked} {...rest}>
	<span class="absolute left-2 flex size-3.5 items-center justify-center">
		{#if checked}
			<LucideCheck class="size-4" />
		{/if}
	</span>
	{@render children?.({ checked: checked ?? false, indeterminate: false })}
</ContextMenuPrimitive.CheckboxItem>
