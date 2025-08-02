import type { CollectionEntry } from 'astro:content'
import { getCollection } from 'astro:content'

/** Note: this function filters out draft posts based on the environment */
export async function getAllExperience() {
	return await getCollection('experience', ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true
	})
}

export function sortExpMDByDate(posts: Array<CollectionEntry<'experience'>>) {
	return posts.sort((a, b) => {
		const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf()
		const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf()
		return bDate - aDate
	})
}