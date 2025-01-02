<script lang="ts">
	import { board, closeQuestion, sharedState } from '$lib/state.svelte';

	let categoryIndex = $derived($sharedState.question.categoryIndex);
	let questionIndex = $derived($sharedState.question.questionIndex);
	let question = $derived($board?.categories[categoryIndex].questions[questionIndex]);
</script>

{#if $sharedState.question.open}
	<p>Question: {question?.question}</p>
	<p>Answer: {question?.answer}</p>
	<p>available: {question?.available}</p>
	<button onclick={() => alert('i do nothing')}>Show Answer</button>
	<br />
	<button onclick={closeQuestion}>close</button>
{/if}
