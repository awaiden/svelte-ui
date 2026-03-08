<script lang="ts" module>
	import type { DropdownMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getDropdownMenuContext } from './dropdown-menu-context';

	export type DropdownMenuItemProps = DropdownMenu.ItemProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: DropdownMenuItemProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.Item class={cn(slots.item(), className)} {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Item>
