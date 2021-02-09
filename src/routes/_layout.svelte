<script lang="ts">
	import { stores } from '@sapper/app';
	import Nav from '../components/Nav.svelte';
	import LoadingSpinner from '../components/LoadingSpinner.svelte'

	const { preloading } = stores();
</script>

<svelte:head>
  <style src="../scss/global.scss"></style>
</svelte:head>

<Nav />

<main>
	{#if $preloading}
		<LoadingSpinner />
	{/if}
	<slot/>
</main>