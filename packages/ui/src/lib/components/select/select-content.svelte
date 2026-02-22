<script lang="ts" module>
import type { Select } from "bits-ui";

import { cn } from "tailwind-variants";

import { getSelectContext } from "./select-context";

export interface SelectContentProps extends Select.ContentProps {
	sideOffset?: number;
}
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	let { children, class: className, sideOffset = 4, ...rest }: SelectContentProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.Portal>
	<SelectPrimitive.Content class={cn(slots.content(), className)} {sideOffset} {...rest}>
		{@render children?.()}
	</SelectPrimitive.Content>
</SelectPrimitive.Portal>
