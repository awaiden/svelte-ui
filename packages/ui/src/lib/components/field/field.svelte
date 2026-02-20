<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { setFieldContext } from "./field-context";
import { type FieldVariantType, fieldVariants } from "./field.variants";

export interface FieldProps
	extends FieldVariantType,
		HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	let slots = $derived(fieldVariants());

	setFieldContext({
		get slots() {
			return slots;
		}
	});
</script>

<div class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</div>
