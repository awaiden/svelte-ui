<script lang="ts" module>
	import type { Select } from 'bits-ui';

	import { setSelectContext } from './select-context';
	import { selectVariants, type SelectVariantType } from './select.variants';

	export type SelectRootProps = Select.RootProps & SelectVariantType;
</script>

<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';

	let { children, value = $bindable(), ...rest }: SelectRootProps = $props();

	let slots = $derived(selectVariants());

	setSelectContext({
		get slots() {
			return slots;
		}
	});
</script>

<SelectPrimitive.Root {...rest}>
	{@render children?.()}
</SelectPrimitive.Root>
