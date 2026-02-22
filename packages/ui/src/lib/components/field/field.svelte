<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { useId } from "bits-ui";
import { cn } from "tailwind-variants";

import { setFieldContext } from "./field-context";
import { fieldVariants, type FieldVariantType } from "./field.variants";

export type FieldProps = FieldVariantType & HTMLAttributes<HTMLDivElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	let slots = $derived(fieldVariants());

	setFieldContext({
		get id() {
			return rest.id ?? useId();
		},
		get slots() {
			return slots;
		}
	});
</script>

<div class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</div>
