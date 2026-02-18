<script lang="ts" module>
import { defineMeta } from "@storybook/addon-svelte-csf";

import { Select } from ".";

const { Story } = defineMeta({
	title: "Select",
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
});
</script>

<script lang="ts">
	const options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	];

	let value = $state<string>('');
	let valueLabel = $derived(() => {
		const selectedOption = options.find((option) => option.value === value);
		return selectedOption ? selectedOption.label : 'Select an option';
	});
</script>

<Story name="Default">
	<Select.Root type="single" bind:value>
		<Select.Trigger>{valueLabel()}</Select.Trigger>
		<Select.Portal>
			<Select.Content>
				{#each options as option (option)}
					<Select.Item value={option.value}>{option.label}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Portal>
	</Select.Root>
</Story>
