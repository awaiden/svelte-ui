<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { Switch } from ".";
import { Label } from "../label";

const { Story } = defineMeta({
	title: "Switch",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<Story name="Default">
	<div class="flex items-center gap-2">
		<Switch.Root id="airplane-mode">
			<Switch.Thumb />
		</Switch.Root>
		<Label for="airplane-mode">Airplane Mode</Label>
	</div>
</Story>

<Story name="Checked">
	<div class="flex items-center gap-2">
		<Switch.Root id="checked" checked>
			<Switch.Thumb />
		</Switch.Root>
		<Label for="checked">Enabled</Label>
	</div>
</Story>

<Story name="Disabled">
	<div class="flex items-center gap-2">
		<Switch.Root id="disabled" disabled>
			<Switch.Thumb />
		</Switch.Root>
		<Label for="disabled">Disabled</Label>
	</div>
</Story>

<Story name="Disabled Checked">
	<div class="flex items-center gap-2">
		<Switch.Root id="disabled-checked" disabled checked>
			<Switch.Thumb />
		</Switch.Root>
		<Label for="disabled-checked">Disabled Checked</Label>
	</div>
</Story>
