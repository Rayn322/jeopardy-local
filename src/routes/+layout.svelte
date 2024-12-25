<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="min-h-dvh px-2 py-10 sm:px-6 md:px-10 lg:px-24">
	{@render children()}
</main>
