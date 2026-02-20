<script lang="ts" module>
import { Select, type SelectRootProps } from "bits-ui";

import { setSelectContext } from "./select-context";
import { type SelectVariantType, selectVariants } from "./select.variants";

export type SelectProps = SelectRootProps & SelectVariantType;
</script>

<script lang="ts">
	let { children, value = $bindable(), ...rest }: SelectProps = $props();

	let slots = $derived(selectVariants());

	setSelectContext({
		get slots() {
			return slots;
		}
	});
</script>

<Select.Root bind:value={value as never} {...rest}>
	{@render children?.()}
</Select.Root>
