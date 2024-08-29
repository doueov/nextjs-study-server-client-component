import database from "@/lib/database"

export async function GET(req) {
    const users = await database.getUsers()
    return Response.json(users)
}