<script lang="ts" module>
	import type { Avatar } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getAvatarContext } from './avatar-context';

	export type AvatarFallbackProps = Avatar.FallbackProps;
</script>

<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	let { children, class: className, ...rest }: AvatarFallbackProps = $props();

	const { slots } = getAvatarContext();
</script>

<AvatarPrimitive.Fallback class={cn(slots.fallback(), className)} {...rest}>
	{@render children?.()}
</AvatarPrimitive.Fallback>
