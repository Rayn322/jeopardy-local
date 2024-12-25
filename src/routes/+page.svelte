<script lang="ts">
	import { open } from '@tauri-apps/plugin-dialog';

	let filePath = $state('');
	let fileName = $derived(filePath.split('/').pop());

	async function selectBoardFile() {
		const file = await open({
			multiple: false,
			directory: false,
			filters: [
				{
					name: 'JSON',
					extensions: ['json']
				}
			]
		});

		if (file) {
			filePath = file;
		}
	}

	async function start() {
		// setBoard
	}
</script>

<h1 class="mb-10 text-3xl font-bold">Jeopardy</h1>

<div class="flex flex-col items-start gap-4">
	<div>
		<button class="rounded-lg bg-black px-4 py-2" onclick={selectBoardFile}>Select Board</button>
		{#if fileName}
			<p>Selected: {fileName}</p>
		{:else}
			<p>No board selected!</p>
		{/if}
	</div>

	<button
		class="rounded-lg bg-blue-700 px-4 py-2 disabled:bg-gray-500"
		disabled={!fileName}
		onclick={start}
	>
		Start
	</button>
</div>
