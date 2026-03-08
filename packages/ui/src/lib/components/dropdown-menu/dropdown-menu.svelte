<script lang="ts" module>
	import type { DropdownMenu } from 'bits-ui';

	import { setDropdownMenuContext } from './dropdown-menu-context';
	import { dropdownMenuVariants, type DropdownMenuVariantType } from './dropdown-menu.variants';

	export type DropdownMenuRootProps = DropdownMenu.RootProps & DropdownMenuVariantType;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: DropdownMenuRootProps = $props();

	let slots = $derived(dropdownMenuVariants());

	setDropdownMenuContext({
		get slots() {
			return slots;
		}
	});
</script>

<DropdownMenuPrimitive.Root {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Root>
