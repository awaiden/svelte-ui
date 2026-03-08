<script lang="ts">
	import { Avatar } from '@adn-ui/svelte';
</script>

<div class="flex items-center gap-4">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>

	<Avatar.Root size="lg">
		<Avatar.Fallback>AD</Avatar.Fallback>
	</Avatar.Root>

	<Avatar.Root size="sm">
		<Avatar.Image src="https://github.com/sveltejs.png" alt="Svelte" />
		<Avatar.Fallback>SV</Avatar.Fallback>
	</Avatar.Root>
</div>
