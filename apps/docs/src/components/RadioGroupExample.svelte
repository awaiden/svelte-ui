<script lang="ts">
	import { Field, RadioGroup } from '@adn-ui/svelte';

	let value = $state('option-one');
</script>

<RadioGroup.Root bind:value class="grid gap-4">
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="option-one" id="option-one" />
		<Field.Label for="option-one">Option One</Field.Label>
	</div>
	<div class="flex items-center space-x-2">
		<RadioGroup.Item value="option-two" id="option-two" />
		<Field.Label for="option-two">Option Two</Field.Label>
	</div>
</RadioGroup.Root>
