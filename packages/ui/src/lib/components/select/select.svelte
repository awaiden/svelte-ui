<script lang="ts" module>
	import { Select, type SelectRootProps } from 'bits-ui';

	import { type SelectVariantType } from './select.variants';

	export type SelectProps = SelectRootProps & SelectVariantType;
</script>

<script lang="ts">
	let { children, value = $bindable(), ...rest }: SelectProps = $props();
</script>

<Select.Root bind:value={value as never} {...rest}>
	{@render children?.()}
</Select.Root>
