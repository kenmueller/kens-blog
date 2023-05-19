import type { SvelteComponentTyped } from 'svelte'

export default interface PostImport {
	metadata: {
		title: string
		date: string
	}
	default: {
		new (...args: unknown[]): SvelteComponentTyped
	}
}
