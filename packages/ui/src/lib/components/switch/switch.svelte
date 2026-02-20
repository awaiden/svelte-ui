<script lang="ts" module>
import type { Switch } from "bits-ui";
import type { Snippet } from "svelte";

import { cn } from "tailwind-variants";

import { setSwitchContext } from "./switch-context";
import { switchVariants, type SwitchVariantType } from "./switch.variants";

export type SwitchRootProps = SwitchVariantType &
	Omit<Switch.RootProps, "children"> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';

	let { children: userChildren, class: className, ...rest }: SwitchRootProps = $props();

	let slots = $derived(switchVariants());

	setSwitchContext({
		get slots() {
			return slots;
		}
	});
</script>

<SwitchPrimitive.Root class={cn(slots.root(), className)} {...rest}>
	{#snippet children()}
		{@render userChildren?.()}
	{/snippet}
</SwitchPrimitive.Root>
