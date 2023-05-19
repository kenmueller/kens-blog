import type { PageServerLoad } from './$types'

interface PostImport {
	metadata: { layout: 'post'; title: string; date: string }
}

export const load: PageServerLoad = async () => {
	const postPaths = import.meta.glob('./posts/*/+page.svx')

	const posts = await Promise.all(
		Object.entries(postPaths).map(async ([path, getPost]) => {
			const slugParts = path.split('/')
			const slug = slugParts[slugParts.length - 2]

			const { metadata } = (await getPost()) as PostImport
			const { title, date } = metadata

			return { slug, title, date }
		})
	)

	return { posts }
}
