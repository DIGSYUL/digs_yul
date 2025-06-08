
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <Head>
        <title>Digs YUL</title>
        <meta name="description" content="Rental Real Estate in Montreal" />
      </Head>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Welcome to Digs YUL</h1>
      <p style={{ marginBottom: '1rem' }}>Find your ideal rental stay in Montreal</p>
      <input
        type="text"
        placeholder="Search neighborhoods or listings..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '0.5rem', width: '80%', maxWidth: '400px', fontSize: '1rem' }}
      />
    </div>
  )
}
