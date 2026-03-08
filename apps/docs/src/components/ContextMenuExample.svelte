<script lang="ts">
	import { ContextMenu } from '@adn-ui/svelte';
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<div
			class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
		>
			Right click here
		</div>
	</ContextMenu.Trigger>
	<ContextMenu.Content class="w-64">
		<ContextMenu.Item>
			Back
			<ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Item disabled>
			Forward
			<ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Item>
			Reload
			<ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
		</ContextMenu.Item>
		<ContextMenu.Separator />
		<ContextMenu.Sub>
			<ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
			<ContextMenu.SubContent>
				<ContextMenu.Item>Save Page As...</ContextMenu.Item>
				<ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
				<ContextMenu.Item>Name Window...</ContextMenu.Item>
				<ContextMenu.Separator />
				<ContextMenu.Item>Developer Tools</ContextMenu.Item>
			</ContextMenu.SubContent>
		</ContextMenu.Sub>
		<ContextMenu.Separator />
		<ContextMenu.CheckboxItem checked>
			Show Bookmarks Bar
			<ContextMenu.Shortcut>⌘⇧B</ContextMenu.Shortcut>
		</ContextMenu.CheckboxItem>
		<ContextMenu.CheckboxItem>Show Full URLs</ContextMenu.CheckboxItem>
		<ContextMenu.Separator />
		<ContextMenu.RadioGroup value="michael">
			<ContextMenu.GroupHeading>People</ContextMenu.GroupHeading>
			<ContextMenu.RadioItem value="michael">Michael Scott</ContextMenu.RadioItem>
			<ContextMenu.RadioItem value="dwight">Dwight Schrute</ContextMenu.RadioItem>
		</ContextMenu.RadioGroup>
	</ContextMenu.Content>
</ContextMenu.Root>
