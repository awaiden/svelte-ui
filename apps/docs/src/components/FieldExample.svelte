<script lang="ts">
	import { Field, Input } from '@adn-ui/svelte';
</script>

<div class="grid w-full max-w-sm gap-6">
	<Field.Root>
		<Field.Label>Email</Field.Label>
		<Input type="email" placeholder="Email" />
		<Field.Description>We'll never share your email with anyone else.</Field.Description>
	</Field.Root>

	<Field.Root>
		<Field.Label>Username</Field.Label>
		<Input type="text" placeholder="Username" />
		<Field.Error>This username is already taken.</Field.Error>
	</Field.Root>
</div>
