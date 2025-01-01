<script lang="ts">
	import type { PageData } from "./$types"
	import tmc from "$lib/images/tmc.jpeg"

	let { data }: { data: PageData } = $props()

	const links = data.links

	async function trypost(id: number) {
		const response = await fetch("/api/inc-view-count", {
			method: "POST",
			body: JSON.stringify({
				id
			})
		})
	}
</script>

<svelte:head>
	<title>Troy Ciesco's Links</title>
	<meta name="description" content="The various profiles of Troy Ciesco" />
</svelte:head>

<section>
	<div class="card">
		<img
			src={tmc}
			width="240"
			height="240"
			alt="Troy Ciesco smiling at the camera"
			class="avatar"
		/>
		<div class="text-content">
			<h1 class="name">Troy Ciesco</h1>
			<p class="location">Boston, MA</p>
			<p class="position">Software engineer</p>
		</div>
		<ul class="links">
			{#each links as link}
				<li class="link"><a href={link.href} onclick={() => trypost(link.id)}>{link.name}</a></li>
			{/each}
		</ul>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 56px);
		padding: 0 1rem;
	}

	.card {
		padding: 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #1f1f1f;
		color: white;
		text-align: center;
		border-radius: 0.75rem;
	}

	.avatar {
		border-radius: 100%;
		margin-bottom: 1rem;
	}

	.text-content {
		margin-bottom: 2rem;
		padding: 0 2rem;
	}

	.name {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.location {
		color: #c3f82a;
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	.links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
	}

	.link {
		margin: 0;

		& a {
			color: #ffffff;
			text-decoration: none;
			padding: 0.75rem;
			background-color: #333333;
			display: block;
			border-radius: 0.5rem;
			font-weight: 700;
		}
	}
</style>
