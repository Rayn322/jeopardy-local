<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="min-h-dvh p-6">
	{@render children()}
</main>
