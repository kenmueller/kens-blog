<script lang="ts">
	export let title: string
	export let date: string
</script>

<a href="/">Ken's Blog</a>

<h1>{title}</h1>
<p>{date}</p>
<slot />

<style lang="scss">
	a {
		font-weight: 700;
	}
</style>
