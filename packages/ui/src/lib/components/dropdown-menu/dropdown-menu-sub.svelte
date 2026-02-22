<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

export type DropdownMenuSubProps = DropdownMenu.SubProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: DropdownMenuSubProps = $props();
</script>

<DropdownMenuPrimitive.Sub {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Sub>
