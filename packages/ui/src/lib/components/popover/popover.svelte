<script lang="ts" module>
import type { Popover } from "bits-ui";

import { setPopoverContext } from "./popover-context";
import { popoverVariants, type PopoverVariantType } from "./popover.variants";

export type PopoverRootProps = Popover.RootProps & PopoverVariantType;
</script>

<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';

	let { children, ...rest }: PopoverRootProps = $props();

	let slots = $derived(popoverVariants());

	setPopoverContext({
		get slots() {
			return slots;
		}
	});
</script>

<PopoverPrimitive.Root {...rest}>
	{@render children?.()}
</PopoverPrimitive.Root>
