<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { getFieldContext } from "./field-context";
import type { FieldVariantType } from "./field.variants";

export interface FieldProps
	extends FieldVariantType,
		HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	const { slots } = getFieldContext();
</script>

<div class={cn(slots.prefix(), className)} {...rest}>
	{@render children?.()}
</div>
