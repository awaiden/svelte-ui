<script lang="ts">
	import { Button, Collapsible } from '@adn-ui/svelte';
	import { LucideChevronsUpDown } from 'lucide-svelte';

	let { open = $bindable(false) } = $props();
</script>

<Collapsible.Root bind:open class="w-[350px] space-y-2">
	<div class="flex items-center justify-between space-x-4 px-4">
		<h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
		<Collapsible.Trigger asChild>
			{#snippet children({ props })}
				<Button variant="ghost" size="sm" class="w-9 p-0" {...props}>
					<LucideChevronsUpDown class="h-4 w-4" />
					<span class="sr-only">Toggle</span>
				</Button>
			{/snippet}
		</Collapsible.Trigger>
	</div>
	<div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
	<Collapsible.Content class="space-y-2">
		<div class="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
		<div class="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
	</Collapsible.Content>
</Collapsible.Root>
