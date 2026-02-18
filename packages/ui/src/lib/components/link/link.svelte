<script lang="ts" module>
import type { HTMLAttributes } from "svelte/elements";

import { cn } from "tailwind-variants";

import { linkVariants, type LinkVariantType } from "./link.variants";

export interface LinkProps
	extends HTMLAttributes<HTMLAnchorElement>,
		LinkVariantType {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: LinkProps = $props();

	let styles = $derived(linkVariants());
</script>

<a class={cn(styles, className)} {...rest}>
	{@render children?.()}
</a>
