<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Tabs } from ".";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Tabs",
});
</script>

<Story name="Default">
	<Tabs.Root value="account" class="w-96">
		<Tabs.List>
			<Tabs.Trigger value="account">Account</Tabs.Trigger>
			<Tabs.Trigger value="password">Password</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="account">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Account</h3>
				<p class="text-muted-foreground text-sm">Make changes to your account here.</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="password">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Password</h3>
				<p class="text-muted-foreground text-sm">Change your password here.</p>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</Story>

<Story name="Three Tabs">
	<Tabs.Root value="overview" class="w-96">
		<Tabs.List>
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
			<Tabs.Trigger value="reports">Reports</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="overview">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Overview</h3>
				<p class="text-muted-foreground text-sm">A summary of your project.</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="analytics">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Analytics</h3>
				<p class="text-muted-foreground text-sm">View your analytics data.</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="reports">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Reports</h3>
				<p class="text-muted-foreground text-sm">Generate and view reports.</p>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</Story>

<Story name="Disabled Tab">
	<Tabs.Root value="active" class="w-96">
		<Tabs.List>
			<Tabs.Trigger value="active">Active</Tabs.Trigger>
			<Tabs.Trigger value="disabled" disabled>Disabled</Tabs.Trigger>
			<Tabs.Trigger value="other">Other</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="active">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Active Tab</h3>
				<p class="text-muted-foreground text-sm">This tab is active.</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="other">
			<div class="space-y-2 p-4">
				<h3 class="text-lg font-medium">Other Tab</h3>
				<p class="text-muted-foreground text-sm">This is another tab.</p>
			</div>
		</Tabs.Content>
	</Tabs.Root>
</Story>
