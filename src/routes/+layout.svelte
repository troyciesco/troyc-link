<script lang="ts">
	import "../app.css"

	let { children } = $props()
</script>

<div class="container">
	<main>
		{@render children()}
	</main>
	<footer>
		<p>Built with 🍕 in Boston</p>
	</footer>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #141414;
	}

	main {
		flex-grow: 1;
	}

	footer {
		color: #ffffff;
		padding: 1rem;
	}
</style>
