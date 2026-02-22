<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { RadioGroup } from ".";
import { Label } from "../label";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "RadioGroup",
});
</script>

<Story name="Default">
	<RadioGroup.Root value="comfortable">
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="default" id="r1" />
			<Label for="r1">Default</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="comfortable" id="r2" />
			<Label for="r2">Comfortable</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="compact" id="r3" />
			<Label for="r3">Compact</Label>
		</div>
	</RadioGroup.Root>
</Story>

<Story name="Horizontal">
	<RadioGroup.Root value="banana" orientation="horizontal" class="flex flex-row gap-4">
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="apple" id="h1" />
			<Label for="h1">Apple</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="banana" id="h2" />
			<Label for="h2">Banana</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="cherry" id="h3" />
			<Label for="h3">Cherry</Label>
		</div>
	</RadioGroup.Root>
</Story>

<Story name="Disabled">
	<RadioGroup.Root value="comfortable" disabled>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="default" id="d1" />
			<Label for="d1">Default</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="comfortable" id="d2" />
			<Label for="d2">Comfortable</Label>
		</div>
		<div class="flex items-center gap-2">
			<RadioGroup.Item value="compact" id="d3" />
			<Label for="d3">Compact</Label>
		</div>
	</RadioGroup.Root>
</Story>
