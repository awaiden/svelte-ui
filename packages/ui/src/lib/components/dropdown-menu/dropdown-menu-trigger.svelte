<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

export interface DropdownMenuTriggerProps extends DropdownMenu.TriggerProps {}
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: DropdownMenuTriggerProps = $props();
</script>

<DropdownMenuPrimitive.Trigger {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.Trigger>
