<script lang="ts" module>
import type { SeparatorRootProps } from "bits-ui";

import { cn } from "tailwind-variants";

import {
	separatorVariants,
	type SeparatorVariantType,
} from "./separator.variants";

export type SeparatorProps = SeparatorRootProps & SeparatorVariantType;
</script>

<script lang="ts">
	import { Separator } from 'bits-ui';

	let { children, class: className, ...rest }: SeparatorProps = $props();

	let styles = $derived(separatorVariants());
</script>

<Separator.Root class={cn(styles, className)} {...rest}>
	{@render children?.()}
</Separator.Root>
