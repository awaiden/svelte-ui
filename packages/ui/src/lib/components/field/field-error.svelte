<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import type { FieldVariantType } from "./field.variants";

import { getFieldContext } from "./field-context";

export type FieldProps = FieldVariantType &
	HTMLAttributes<HTMLParagraphElement>;
</script>

<script lang="ts">
	let { children, class: className, ...rest }: FieldProps = $props();

	const { slots } = getFieldContext();
</script>

<p class={cn(slots.error(), className)} {...rest}>
	{@render children?.()}
</p>
