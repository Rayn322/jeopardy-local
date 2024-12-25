<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import type { Board } from './types';

	let {
		categoryIndex,
		questionIndex,
		board,
		visible = $bindable(false)
	}: { categoryIndex: number; questionIndex: number; board: Board; visible: boolean } = $props();

	let question = $derived(board.categories[categoryIndex].questions[questionIndex]);

	function close() {
		board.name = 'Hello';
		visible = false;
	}
</script>

{#if visible}
	<div in:scale out:fade class="absolute left-0 top-0 h-dvh w-dvw bg-black p-10">
		<h1 class="flex h-full w-full items-center justify-center text-3xl">{question.question}</h1>
		<div class="text-center">
			<button onclick={close}>close</button>
		</div>
	</div>
{/if}
