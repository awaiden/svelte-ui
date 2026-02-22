<script lang="ts" module>
import type { RadioGroup } from "bits-ui";

import { cn } from "tailwind-variants";

import { setRadioGroupContext } from "./radio-group-context";
import {
	radioGroupVariants,
	type RadioGroupVariantType,
} from "./radio-group.variants";

export type RadioGroupRootProps = RadioGroup.RootProps & RadioGroupVariantType;
</script>

<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: RadioGroupRootProps = $props();

	let slots = $derived(radioGroupVariants());

	setRadioGroupContext({
		get slots() {
			return slots;
		}
	});
</script>

<RadioGroupPrimitive.Root class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</RadioGroupPrimitive.Root>
