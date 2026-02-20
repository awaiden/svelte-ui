<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getFieldContext } from "./field-context";
import type { FieldVariantType } from "./field.variants";

export interface FieldProps
	extends FieldVariantType,
		HTMLAttributes<HTMLParagraphElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	const { slots } = getFieldContext();
</script>

<p class={cn(slots.description(), className)} {...rest}>
	{@render children?.()}
</p>
