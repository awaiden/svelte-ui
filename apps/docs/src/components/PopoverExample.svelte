<script lang="ts">
	import { Button, Field, Input, Popover } from '@adn-ui/svelte';
</script>

<Popover.Root>
	<Popover.Trigger>
		<Button variant="outline">Open Popover</Button>
	</Popover.Trigger>
	<Popover.Content class="w-80">
		<div class="grid gap-4">
			<div class="space-y-2">
				<h4 class="leading-none font-medium">Dimensions</h4>
				<p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
			</div>
			<div class="grid gap-2">
				<Field.Root class="grid grid-cols-3 items-center gap-4">
					<Field.Label>Width</Field.Label>
					<Input value="100%" class="col-span-2 h-8" />
				</Field.Root>
				<Field.Root class="grid grid-cols-3 items-center gap-4">
					<Field.Label>Max. width</Field.Label>
					<Input value="300px" class="col-span-2 h-8" />
				</Field.Root>
				<Field.Root class="grid grid-cols-3 items-center gap-4">
					<Field.Label>Height</Field.Label>
					<Input value="25px" class="col-span-2 h-8" />
				</Field.Root>
				<Field.Root class="grid grid-cols-3 items-center gap-4">
					<Field.Label>Max. height</Field.Label>
					<Input value="none" class="col-span-2 h-8" />
				</Field.Root>
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
