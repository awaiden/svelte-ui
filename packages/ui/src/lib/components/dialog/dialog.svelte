<script lang="ts" module>
import type { Dialog } from "bits-ui";

import { setDialogContext } from "./dialog-context";
import { dialogVariants, type DialogVariantType } from "./dialog.variants";

export type DialogRootProps = Dialog.RootProps & DialogVariantType;
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children, ...rest }: DialogRootProps = $props();

	let slots = $derived(dialogVariants());

	setDialogContext({
		get slots() {
			return slots;
		}
	});
</script>

<DialogPrimitive.Root {...rest}>
	{@render children?.()}
</DialogPrimitive.Root>
