<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { ContextMenu } from '.';

	const { Story } = defineMeta({
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		title: 'Context Menu'
	});
</script>

<Story name="Default">
	<ContextMenu.Root>
		<ContextMenu.Trigger>
			<div
				class="border-border text-muted-foreground flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm"
			>
				Right click here
			</div>
		</ContextMenu.Trigger>
		<ContextMenu.Content class="w-56">
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
</Story>
