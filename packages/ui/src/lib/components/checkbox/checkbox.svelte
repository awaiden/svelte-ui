<script lang="ts" module>
import type { Checkbox } from "bits-ui";

import { cn } from "tailwind-variants";

import {
	checkboxVariants,
	type CheckboxVariantType,
} from "./checkbox.variants";

export type CheckboxProps = Checkbox.RootProps & CheckboxVariantType;
</script>

<script lang="ts">
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { LucideCheck, LucideMinus } from 'lucide-svelte';

	let { class: className, ...rest }: CheckboxProps = $props();
</script>

<CheckboxPrimitive.Root class={cn(checkboxVariants(), className)} {...rest}>
	{#snippet children({ checked, indeterminate })}
		<div class="checkbox__indicator">
			{#if indeterminate}
				<LucideMinus class="size-3.5" />
			{:else if checked}
				<LucideCheck class="size-3.5" />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
