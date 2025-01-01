import type { LayoutServerLoad } from "./$types"
import { turso } from "$lib/turso.server"

export const load: LayoutServerLoad = async () => {
	// try {
	//   const transaction = await client.transaction("write");

	//   await transaction.execute({
	//     sql: "UPDATE users SET age = age + 1 WHERE id = ?",
	//     args: [userId],
	//   });

	//   await transaction.commit();
	// } catch (e) {
	//   console.error(e);
	//   await transaction.rollback();
	// }
	const { rows } = await turso.execute("update view set count = count + 1 returning count")

	console.log(rows[0].count)
}
