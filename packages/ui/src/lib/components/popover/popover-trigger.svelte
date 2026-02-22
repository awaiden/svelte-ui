<script lang="ts" module>
import type { Popover } from "bits-ui";

export type PopoverTriggerProps = Popover.TriggerProps;
</script>

<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	let { children, ...rest }: PopoverTriggerProps = $props();
</script>

<PopoverPrimitive.Trigger {...rest}>
	{@render children?.()}
</PopoverPrimitive.Trigger>
