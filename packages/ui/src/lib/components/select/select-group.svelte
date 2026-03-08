<script lang="ts" module>
	import type { Select } from 'bits-ui';

	export type SelectGroupProps = Select.GroupProps;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	let { children, ...rest }: SelectGroupProps = $props();
</script>

<SelectPrimitive.Group {...rest}>
	{@render children?.()}
</SelectPrimitive.Group>
