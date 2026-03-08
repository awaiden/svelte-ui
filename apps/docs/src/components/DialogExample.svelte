<script lang="ts">
	import { Button, Dialog } from '@adn-ui/svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger>
		<Button variant="outline">Open Dialog</Button>
	</Dialog.Trigger>
	<Dialog.Overlay />
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Edit profile</Dialog.Title>
			<Dialog.Description>
				Make changes to your profile here. Click save when you're done.
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<div class="grid grid-cols-4 items-center gap-4">
				<label for="name" class="text-right text-sm font-medium">Name</label>
				<input
					id="name"
					value="Pedro Duarte"
					class="col-span-3 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				/>
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<label for="username" class="text-right text-sm font-medium">Username</label>
				<input
					id="username"
					value="@peduarte"
					class="col-span-3 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				/>
			</div>
		</div>
		<Dialog.Footer>
			<Dialog.Close>
				<Button type="submit">Save changes</Button>
			</Dialog.Close>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
