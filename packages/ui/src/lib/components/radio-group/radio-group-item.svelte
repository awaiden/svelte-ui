<script lang="ts" module>
import type { RadioGroup } from "bits-ui";

import { cn } from "tailwind-variants";

import { getRadioGroupContext } from "./radio-group-context";

export type RadioGroupItemProps = RadioGroup.ItemProps;
</script>

<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
	import { LucideCircle } from 'lucide-svelte';

	let { class: className, children, ...rest }: RadioGroupItemProps = $props();

	const { slots } = getRadioGroupContext();
</script>

<RadioGroupPrimitive.Item class={cn(slots.item(), className)} {...rest}>
	{#snippet children({ checked })}
		<span class={slots.indicator()}>
			{#if checked}
				<LucideCircle class="radio-group__indicator-icon" />
			{/if}
		</span>
	{/snippet}
</RadioGroupPrimitive.Item>
