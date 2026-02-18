<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from 'tailwind-variants';

	import { surfaceVariants, type SurfaceVariantType } from './surface.variants';

	export interface SurfaceProps extends HTMLAttributes<HTMLDivElement>, SurfaceVariantType {}
</script>

<script lang="ts">
	let { children, class: className, ...rest }: SurfaceProps = $props();

	let styles = $derived(surfaceVariants());
</script>

<div class={cn(styles, className)} {...rest}>
	{@render children?.()}
</div>
