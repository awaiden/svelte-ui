<script lang="ts">
	import { Select } from '@adn-ui/svelte';
</script>

<Select.Root type="single" name="favorite-fruit">
	<Select.Trigger class="w-[180px]">Select a fruit</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.GroupHeading>Fruits</Select.GroupHeading>
			<Select.Item value="apple" label="Apple">Apple</Select.Item>
			<Select.Item value="banana" label="Banana">Banana</Select.Item>
			<Select.Item value="blueberry" label="Blueberry">Blueberry</Select.Item>
			<Select.Item value="grapes" label="Grapes">Grapes</Select.Item>
			<Select.Item value="pineapple" label="Pineapple">Pineapple</Select.Item>
		</Select.Group>
	</Select.Content>
</Select.Root>
