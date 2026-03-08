<script lang="ts" module>
	import type { Popover } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getPopoverContext } from './popover-context';

	export interface PopoverContentProps extends Popover.ContentProps {
		sideOffset?: number;
	}
</script>

<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	let { children, class: className, sideOffset = 4, ...rest }: PopoverContentProps = $props();

	const { slots } = getPopoverContext();
</script>

<PopoverPrimitive.Portal>
	<PopoverPrimitive.Content class={cn(slots.content(), className)} {sideOffset} {...rest}>
		{@render children?.()}
	</PopoverPrimitive.Content>
</PopoverPrimitive.Portal>
