"use client"

import { useState, useEffect } from "react"

export default function Home() {

  const [songs, setSongs] = useState([])
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")

  async function loadSongs() {
    const res = await fetch("/api/songs")
    const data = await res.json()
    setSongs(data)
  }

  async function addSong(e) {
    e.preventDefault()

    await fetch("/api/songs", {
      method: "POST",
      body: JSON.stringify({ title, artist })
    })

    setTitle("")
    setArtist("")
    loadSongs()
  }

  useEffect(() => {

  async function loadSongs() {
    const res = await fetch("/api/songs")
    const data = await res.json()
    setSongs(data)
  }

  loadSongs()

}, [])

  return (
    <main style={{padding:40}}>
      <h1>Song List</h1>

      <form onSubmit={addSong}>
        <input
          placeholder="Song"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Artist"
          value={artist}
          onChange={(e)=>setArtist(e.target.value)}
        />

        <button>Add</button>
      </form>

      <ul>
        {songs.map(song => (
          <li key={song._id}>
            {song.title} - {song.artist}
          </li>
        ))}
      </ul>

    </main>
  )
}
