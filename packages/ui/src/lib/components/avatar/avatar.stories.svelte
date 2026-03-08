<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import { Avatar } from '.';

	const { Story } = defineMeta({
		parameters: {
			layout: 'centered'
		},
		tags: ['autodocs'],
		title: 'Avatar'
	});
</script>

<Story name="Default">
	<Avatar.Root>
		<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
		<Avatar.Fallback>HB</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Fallback">
	<Avatar.Root>
		<Avatar.Image src="https://broken-link.example" alt="broken" />
		<Avatar.Fallback>JD</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Extra Small">
	<Avatar.Root size="xs">
		<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
		<Avatar.Fallback>HB</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Small">
	<Avatar.Root size="sm">
		<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
		<Avatar.Fallback>HB</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Large">
	<Avatar.Root size="lg">
		<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
		<Avatar.Fallback>HB</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="Extra Large">
	<Avatar.Root size="xl">
		<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
		<Avatar.Fallback>HB</Avatar.Fallback>
	</Avatar.Root>
</Story>

<Story name="All Sizes">
	<div class="flex items-end gap-4">
		<Avatar.Root size="xs">
			<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
			<Avatar.Fallback>HB</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root size="sm">
			<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
			<Avatar.Fallback>HB</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root size="md">
			<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
			<Avatar.Fallback>HB</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root size="lg">
			<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
			<Avatar.Fallback>HB</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root size="xl">
			<Avatar.Image src="https://github.com/huntabyte.png" alt="@huntabyte" />
			<Avatar.Fallback>HB</Avatar.Fallback>
		</Avatar.Root>
	</div>
</Story>
