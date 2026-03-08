<script lang="ts">
	import { Accordion } from '@adn-ui/svelte';

	let {
		items = [
			{
				content: 'Yes. It adheres to the WAI-ARIA design pattern.',
				title: 'Is it accessible?',
				value: 'item-1'
			},
			{
				content: "Yes. It comes with default styles that match the other components' aesthetic.",
				title: 'Is it styled?',
				value: 'item-2'
			},
			{
				content: "Yes. It's animated by default, but you can disable it if you prefer.",
				title: 'Is it animated?',
				value: 'item-3'
			}
		],
		type = 'single'
	} = $props();
</script>

<Accordion.Root type={type as 'multiple' | 'single'} class="w-full">
	{#each items as item, i (i)}
		<Accordion.Item value={item.value}>
			<Accordion.Header>
				<Accordion.Trigger>{item.title}</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content>
				{item.content}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
