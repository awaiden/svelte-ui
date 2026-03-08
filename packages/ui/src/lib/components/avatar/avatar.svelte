<script lang="ts" module>
	import type { Avatar } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { setAvatarContext } from './avatar-context';
	import { avatarVariants, type AvatarVariantType } from './avatar.variants';

	export type AvatarRootProps = Avatar.RootProps & AvatarVariantType;
</script>

<script lang="ts">
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	let { children, class: className, size, ...rest }: AvatarRootProps = $props();

	let slots = $derived(avatarVariants({ size }));

	setAvatarContext({
		get slots() {
			return slots;
		}
	});
</script>

<AvatarPrimitive.Root class={cn(slots.root(), className)} {...rest}>
	{@render children?.()}
</AvatarPrimitive.Root>
