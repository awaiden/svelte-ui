<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Separator } from "../separator";
import { Select } from "./index";

const { Story } = defineMeta({
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	title: "Select",
});

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grapes", value: "grapes" },
	{ label: "Pineapple", value: "pineapple" },
];

const vegetables = [
	{ label: "Aubergine", value: "aubergine" },
	{ label: "Broccoli", value: "broccoli" },
	{ disabled: true, label: "Carrot", value: "carrot" },
	{ label: "Courgette", value: "courgette" },
	{ label: "Leek", value: "leek" },
];

const items = [...fruits, ...vegetables];

let value = $state<string>("");
const selectedLabel = $derived(
	value ? items.find((item) => item.value === value)?.label : "Select an item",
);
</script>

<Story name="Default">
	<Select.Root type="single" {items} bind:value>
		<Select.Trigger>{selectedLabel}</Select.Trigger>
		<Select.Content>
			<Select.ScrollUpButton />
			<Select.Viewport>
				{#each fruits as item (item.value)}
					<Select.Item value={item.value} label={item.label}>
						{item.label}
					</Select.Item>
				{/each}
			</Select.Viewport>
			<Select.ScrollDownButton />
		</Select.Content>
	</Select.Root>
</Story>

<Story name="With Groups">
	<Select.Root type="single" {items} bind:value>
		<Select.Trigger>{selectedLabel}</Select.Trigger>
		<Select.Content>
			<Select.ScrollUpButton />
			<Select.Viewport>
				<Select.Group>
					<Select.GroupHeading>Fruits</Select.GroupHeading>
					{#each fruits as item (item.value)}
						<Select.Item value={item.value} label={item.label}>
							{item.label}
						</Select.Item>
					{/each}
				</Select.Group>
				<Separator class="-mx-1 my-1" />
				<Select.Group>
					<Select.GroupHeading>Vegetables</Select.GroupHeading>
					{#each vegetables as item (item.value)}
						<Select.Item value={item.value} label={item.label} disabled={item.disabled}>
							{item.label}
						</Select.Item>
					{/each}
				</Select.Group>
			</Select.Viewport>
			<Select.ScrollDownButton />
		</Select.Content>
	</Select.Root>
</Story>
