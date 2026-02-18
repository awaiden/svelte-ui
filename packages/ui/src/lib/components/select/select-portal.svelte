<script lang="ts" module>
	import { Select, type SelectPortalProps } from 'bits-ui';

	export type SelectProps = SelectPortalProps;
</script>

<script lang="ts">
	let { children, ...rest }: SelectProps = $props();
</script>

<Select.Portal {...rest}>
	{@render children?.()}
</Select.Portal>
