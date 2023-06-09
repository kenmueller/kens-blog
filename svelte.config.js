import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svx'] })],
	kit: {
		adapter: adapter()
	}
}

export default config
