<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { {{camelName}}Variants, type {{PascalName}}VariantType } from "./{{name}}.variants";

export interface {{PascalName}}Props extends {{PascalName}}VariantType, HTMLAttributes<HTMLDivElement> {}
</script>

<script lang="ts">
	let { children, class: className, variant, ...rest }: {{PascalName}}Props = $props();

	let styles = $derived({{camelName}}Variants({ variant }));
</script>

<div class={cn(styles, className)} {...rest}>
	{@render children?.()}
</div>
