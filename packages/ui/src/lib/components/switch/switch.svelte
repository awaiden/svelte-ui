<script lang="ts" module>
import type { SwitchRootProps as SwitchPrimitiveRootProps } from "bits-ui";
import { cn } from "tailwind-variants";

import { setSwitchContext } from "./switch-context";
import { switchVariants, type SwitchVariantType } from "./switch.variants";

export type SwitchRootProps = SwitchPrimitiveRootProps & SwitchVariantType;
</script>

<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';

	let { class: className, ...rest }: SwitchRootProps = $props();

	let slots = $derived(switchVariants());

	setSwitchContext({
		get slots() {
			return slots;
		}
	});
</script>

<SwitchPrimitive.Root class={cn(slots.root(), className)} {...rest} />
