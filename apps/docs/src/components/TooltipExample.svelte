<script lang="ts">
	import { Button, Tooltip } from '@adn-ui/svelte';
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button variant="outline">Hover Me</Button>
		</Tooltip.Trigger>
		<Tooltip.Content side="top">
			<p>Add to library</p>
			<Tooltip.Arrow />
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
