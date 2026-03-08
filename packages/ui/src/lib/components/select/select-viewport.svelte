<script lang="ts" module>
	import type { Select } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getSelectContext } from './select-context';

	export type SelectViewportProps = Select.ViewportProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: SelectViewportProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.Viewport class={cn(slots.viewport(), className)} {...rest}>
	{@render children?.()}
</SelectPrimitive.Viewport>
