<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";
import { LucideUser } from "lucide-svelte";

import { Field } from ".";
import { Input } from "../input";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Field",
});
</script>

<Story name="Default">
	<Field.Root>
		<Field.Label>Label</Field.Label>
		<Input placeholder="Enter text here" />
		<Field.Description>This is a description of the field.</Field.Description>
		<Field.Error>This is an error message.</Field.Error>
	</Field.Root>
</Story>

<Story name="Grouped">
	<Field.Root>
		<Field.Label>Grouped Fields</Field.Label>
		<Field.Group>
			<Field.Prefix>
				<LucideUser />
			</Field.Prefix>
			<Input placeholder="yourdomain.com" />
			<Field.Suffix>
				<span class="text-sm text-gray-500">.com</span>
			</Field.Suffix>
		</Field.Group>
	</Field.Root>
</Story>
