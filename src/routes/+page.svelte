<script lang="ts">
	import { goto } from '$app/navigation';
	import { board, setBoard } from '$lib/state.svelte';
	import { open } from '@tauri-apps/plugin-dialog';
	import { readTextFile } from '@tauri-apps/plugin-fs';

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
		const board = await readTextFile(filePath);
		const success = setBoard(JSON.parse(board));

		if (success) {
			goto('/board');
		} else {
			alert('JSON is not a valid board!');
		}
	}
</script>

<h1 class="mb-10 text-3xl font-bold">Jeopardy</h1>

<div class="flex flex-col items-start gap-4">
	<div>
		<button class="rounded-lg bg-black px-4 py-2" onclick={selectBoardFile}> Select Board </button>
		{#if fileName}
			<p>Selected: {fileName}</p>
		{:else}
			<p>No board selected!</p>
		{/if}
	</div>

	<button
		class="rounded-lg bg-blue-700 px-4 py-2 disabled:bg-gray-500"
		disabled={!filePath}
		onclick={start}
	>
		Start
	</button>

	{#if $board}
		<a href="/board">Resume Game</a>
	{/if}
</div>
