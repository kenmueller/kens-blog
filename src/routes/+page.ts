import type PostImport from '$lib/post/import'
import type { PageLoad } from './$types'

export const load: PageLoad = async () => {
	const postPaths = import.meta.glob('../posts/*.svx')

	const posts = await Promise.all(
		Object.entries(postPaths).map(async ([path, getPost]) => {
			const pathParts = path.split('/')
			const filename = pathParts[pathParts.length - 1]
			const slug = filename?.match(/(.*)\.svx/)?.[1]

			if (!slug) throw new Error('Invalid post filename')

			const { metadata } = (await getPost()) as PostImport

			return { slug, ...metadata }
		})
	)

	return { posts }
}
