<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

export type DropdownMenuGroupProps = DropdownMenu.GroupProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: DropdownMenuGroupProps = $props();
</script>

<DropdownMenuPrimitive.Group {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Group>
