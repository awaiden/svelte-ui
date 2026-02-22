<script lang="ts" module>
import type { DropdownMenu } from "bits-ui";

export type DropdownMenuTriggerProps = DropdownMenu.TriggerProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { child, children, ...rest }: DropdownMenuTriggerProps = $props();
</script>

{#if child}
	<DropdownMenuPrimitive.Trigger {child} {...rest} />
{:else}
	<DropdownMenuPrimitive.Trigger {...rest}>
		{@render children?.()}
	</DropdownMenuPrimitive.Trigger>
{/if}
