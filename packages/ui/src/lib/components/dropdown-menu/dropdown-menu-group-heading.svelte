<script lang="ts" module>
	import type { DropdownMenu } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getDropdownMenuContext } from './dropdown-menu-context';

	export type DropdownMenuGroupHeadingProps = DropdownMenu.GroupHeadingProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: DropdownMenuGroupHeadingProps = $props();

	const { slots } = getDropdownMenuContext();
</script>

<DropdownMenuPrimitive.GroupHeading class={cn(slots.groupHeading(), className)} {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.GroupHeading>
