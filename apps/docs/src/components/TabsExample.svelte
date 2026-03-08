<script lang="ts">
	import { Surface, Tabs } from '@adn-ui/svelte';
</script>

<Tabs.Root value="account" class="w-100">
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="account">Account</Tabs.Trigger>
		<Tabs.Trigger value="password">Password</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="account">
		<Surface class="rounded-b-lg border border-t-0 p-4">
			<p class="text-sm text-muted-foreground">
				Make changes to your account here. Click save when you're done.
			</p>
		</Surface>
	</Tabs.Content>
	<Tabs.Content value="password">
		<Surface class="rounded-b-lg border border-t-0 p-4">
			<p class="text-sm text-muted-foreground">
				Change your password here. After saving, you'll be logged out.
			</p>
		</Surface>
	</Tabs.Content>
</Tabs.Root>
