<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<a href="/">Ken's Blog</a>

<h1>{data.title}</h1>
<p>{data.date}</p>

<svelte:component this={data.content} />

<style lang="scss">
	a {
		font-weight: 700;
	}
</style>
