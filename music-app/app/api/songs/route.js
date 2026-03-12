import { connectDB } from "@/lib/mongodb"
import Song from "@/models/Song"

export async function GET() {
  await connectDB()
  const songs = await Song.find()
  return Response.json(songs)
}

export async function POST(request) {
  const body = await request.json()

  await connectDB()
  const song = await Song.create(body)

  return Response.json(song)
}