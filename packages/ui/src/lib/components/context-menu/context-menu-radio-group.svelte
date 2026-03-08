<script lang="ts" module>
	import type { ContextMenu } from 'bits-ui';

	export type ContextMenuRadioGroupProps = ContextMenu.RadioGroupProps;
</script>

<script lang="ts">
	import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: ContextMenuRadioGroupProps = $props();
</script>

<ContextMenuPrimitive.RadioGroup {...rest}>
	{@render children?.()}
</ContextMenuPrimitive.RadioGroup>
