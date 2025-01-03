<script lang="ts">
	import { board, closeQuestion, sharedState, showAnswer } from '$lib/state.svelte';

	let categoryIndex = $derived($sharedState.question.categoryIndex);
	let questionIndex = $derived($sharedState.question.questionIndex);
	let question = $derived($board?.categories[categoryIndex].questions[questionIndex]);
</script>

{#if $sharedState.question.isOpen}
	<p>Question: {question?.question}</p>
	<p>Answer: {question?.answer}</p>
	<p>available: {question?.available}</p>

	{#if $sharedState.question.isShowingAnswer}
		<button onclick={closeQuestion}>Close</button>
	{:else}
		<button onclick={showAnswer}>Show Answer</button>
	{/if}
{/if}
