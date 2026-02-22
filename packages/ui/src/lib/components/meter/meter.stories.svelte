<script module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Meter } from ".";
import { Label } from "../label";

const { Story } = defineMeta({
	component: Meter,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Meter",
});
</script>

<Story name="Default">
	<div class="flex w-80 flex-col gap-2">
		<div class="flex items-center justify-between text-sm font-medium">
			<Label>Storage used</Label>
			<span>50%</span>
		</div>
		<Meter value={50} aria-label="Storage used" />
	</div>
</Story>

<Story name="Low">
	<div class="flex w-80 flex-col gap-2">
		<div class="flex items-center justify-between text-sm font-medium">
			<Label>CPU usage</Label>
			<span>15%</span>
		</div>
		<Meter value={15} aria-label="CPU usage" />
	</div>
</Story>

<Story name="High">
	<div class="flex w-80 flex-col gap-2">
		<div class="flex items-center justify-between text-sm font-medium">
			<Label>Memory usage</Label>
			<span>85%</span>
		</div>
		<Meter value={85} aria-label="Memory usage" />
	</div>
</Story>

<Story name="Custom Range">
	<div class="flex w-80 flex-col gap-2">
		<div class="flex items-center justify-between text-sm font-medium">
			<Label>Tokens used</Label>
			<span>2000 / 4000</span>
		</div>
		<Meter
			value={2000}
			min={0}
			max={4000}
			aria-label="Tokens used"
			aria-valuetext="2000 out of 4000"
		/>
	</div>
</Story>
