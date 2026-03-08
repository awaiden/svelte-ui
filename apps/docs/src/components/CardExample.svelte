<script lang="ts">
	import { Button, Card } from '@adn-ui/svelte';
</script>

<Card.Root class="w-[350px]">
	<Card.Header>
		<Card.Title>Create Project</Card.Title>
		<Card.Description>Deploy your new project in one-click.</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>This is where the card content goes. You can put anything here.</p>
	</Card.Content>
	<div class="flex justify-end gap-4 p-6 pt-0">
		<Button variant="outline">Cancel</Button>
		<Button>Deploy</Button>
	</div>
</Card.Root>
