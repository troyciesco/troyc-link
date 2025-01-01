import type { RequestHandler } from "./$types"
import { turso } from "$lib/turso.server"

export const POST: RequestHandler = async ({ request }) => {
	const { id } = await request.json()
	// @TODO: handle errors
	const res = await turso.execute(`update link set view_count = view_count + 1 where id = ${id}`)
	console.log(res)
	return new Response("success")
}
