<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h1>Ken's Blog</h1>

{#each data.posts as post (post.slug)}
	<a class="post" href="/posts/{encodeURIComponent(post.slug)}">
		{post.title} <span class="post-date">{post.date}</span>
	</a>
{/each}

<style lang="scss">
	.post {
		font-weight: 700;
	}

	.post-date {
		opacity: 0.5;
	}
</style>
