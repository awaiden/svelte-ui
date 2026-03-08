<script lang="ts" module>
	import type { Switch } from 'bits-ui';

	import { cn } from 'tailwind-variants';

	import { getSwitchContext } from './switch-context';

	export type SwitchThumbProps = Switch.ThumbProps;
</script>

<script lang="ts">
	import { Switch as SwitchPrimitive } from 'bits-ui';

	let { class: className, ...rest }: SwitchThumbProps = $props();

	const { slots } = getSwitchContext();
</script>

<SwitchPrimitive.Thumb class={cn(slots.thumb(), className)} {...rest} />
