<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '@sapper/app';

	onMount(() => goto('issues'));
</script>
