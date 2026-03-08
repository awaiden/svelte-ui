<script lang="ts" module>
	import type { Select } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getSelectContext } from './select-context';

	export type SelectGroupHeadingProps = Select.GroupHeadingProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: SelectGroupHeadingProps = $props();

	const { slots } = getSelectContext();
</script>

<SelectPrimitive.GroupHeading class={cn(slots.groupHeading(), className)} {...rest}>
	{@render children?.()}
</SelectPrimitive.GroupHeading>
