<script>
	import { pokemon } from '../stores/pokestore';
	console.log($pokemon);
</script>

<svelte:head>
	<title>Svelte Kit Pokdex</title>
</svelte:head>

<h1 class="tex-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

{#each $pokemon as pokeman}
	<p>{pokeman.name}</p>
{/each}
