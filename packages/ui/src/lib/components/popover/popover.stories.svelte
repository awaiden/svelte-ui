<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { Button } from '../button';
	import { Input } from '../input';
	import { Label } from '../label';
	import { Popover } from './index';

	const { Story } = defineMeta({
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		title: 'Popover'
	});
</script>

<Story name="Default">
	<Popover.Root>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button variant="outline" {...props}>Open popover</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content>
			<div class="grid gap-4">
				<div class="space-y-2">
					<h4 class="leading-none font-medium">Dimensions</h4>
					<p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
				</div>
				<div class="grid gap-2">
					<div class="grid grid-cols-3 items-center gap-4">
						<Label>Width</Label>
						<Input value="100%" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label>Max. width</Label>
						<Input value="300px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label>Height</Label>
						<Input value="25px" class="col-span-2 h-8" />
					</div>
					<div class="grid grid-cols-3 items-center gap-4">
						<Label>Max. height</Label>
						<Input value="none" class="col-span-2 h-8" />
					</div>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="With Close Button">
	<Popover.Root>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button variant="outline" {...props}>Open popover</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content class="relative">
			<Popover.Close />
			<div class="grid gap-4 pr-6">
				<div class="space-y-2">
					<h4 class="leading-none font-medium">Settings</h4>
					<p class="text-muted-foreground text-sm">Manage your preferences.</p>
				</div>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>

<Story name="With Arrow">
	<Popover.Root>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button variant="outline" {...props}>With arrow</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Content>
			<Popover.Arrow />
			<div class="space-y-2">
				<h4 class="leading-none font-medium">Popover with Arrow</h4>
				<p class="text-muted-foreground text-sm">
					This popover has an arrow pointing to the trigger.
				</p>
			</div>
		</Popover.Content>
	</Popover.Root>
</Story>
