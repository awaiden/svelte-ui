<script lang="ts" module>
	import type { DropdownMenu } from 'bits-ui';

	export type DropdownMenuRadioGroupProps = DropdownMenu.RadioGroupProps;
</script>

<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

	let { children, ...rest }: DropdownMenuRadioGroupProps = $props();
</script>

<DropdownMenuPrimitive.RadioGroup {...rest}>
	{@render children?.()}
</DropdownMenuPrimitive.RadioGroup>
