import type { LayoutServerLoad } from "./$types"
import { turso } from "$lib/turso.server"

type Link = {
	id: number
	name: string
	href: string
	view_count: number
}

export const load: LayoutServerLoad = async () => {
	const { rows } = await turso.execute("select * from link")
	return { links: rows as unknown as Link[] }
}
