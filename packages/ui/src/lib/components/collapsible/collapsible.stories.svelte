<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Collapsible } from ".";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Collapsible",
});
</script>

<Story name="Default">
	<Collapsible.Root class="w-80 space-y-2">
		<Collapsible.Trigger class="text-sm font-semibold">Toggle content</Collapsible.Trigger>
		<Collapsible.Content>
			<div class="rounded-md border px-4 py-3 text-sm">
				This is the collapsible content. It can contain any elements.
			</div>
		</Collapsible.Content>
	</Collapsible.Root>
</Story>

<Story name="Multiple Items">
	<Collapsible.Root class="w-80 space-y-2">
		<Collapsible.Trigger class="text-sm font-semibold">
			@huntabyte starred 3 repositories
		</Collapsible.Trigger>
		<div class="rounded-md border px-4 py-3 font-mono text-sm">@huntabyte/bits-ui</div>
		<Collapsible.Content class="space-y-2">
			<div class="rounded-md border px-4 py-3 font-mono text-sm">@huntabyte/shadcn-svelte</div>
			<div class="rounded-md border px-4 py-3 font-mono text-sm">@svecosystem/runed</div>
		</Collapsible.Content>
	</Collapsible.Root>
</Story>
