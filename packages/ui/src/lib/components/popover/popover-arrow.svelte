<script lang="ts" module>
	import type { Popover } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getPopoverContext } from './popover-context';

	export type PopoverArrowProps = Popover.ArrowProps;
</script>

<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	let { class: className, ...rest }: PopoverArrowProps = $props();

	const { slots } = getPopoverContext();
</script>

<PopoverPrimitive.Arrow class={cn(slots.arrow(), className)} {...rest} />
