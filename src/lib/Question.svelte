<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { board, closeQuestion, sharedState } from './state.svelte';

	let { visible = $bindable(false) }: { visible: boolean } = $props();

	let categoryIndex = $derived($sharedState.question.categoryIndex);
	let questionIndex = $derived($sharedState.question.questionIndex);
	let question = $derived($board?.categories[categoryIndex].questions[questionIndex]);
</script>

{#if visible}
	<div in:scale out:fade class="absolute left-0 top-0 h-dvh w-dvw bg-black p-10">
		<h1 class="flex h-full w-full items-center justify-center text-3xl">
			{#if question}
				{#if $sharedState.question.showAnswer}
					{question.answer}
				{:else}
					{question.question}
				{/if}
			{:else}
				No question given
			{/if}
		</h1>
		<div class="text-center">
			<button onclick={closeQuestion}>close</button>
		</div>
	</div>
{/if}
