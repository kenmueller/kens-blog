import type PostImport from '$lib/post/import'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params: { slug } }) => {
	const { metadata, default: content } = (await import(`../../../posts/${slug}.svx`)) as PostImport
	return { slug, ...metadata, content }
}
