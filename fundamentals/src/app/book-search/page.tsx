/* ================================================================================

  Book Search.

  Allow user to search Open Library for book results.

================================================================================ */

'use client'
import React, { useState } from 'react'
import { BookResult } from '../api/book-search/route'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function BookSearch() {
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState<Array<BookResult>>([])
  const [status, setStatus] = useState<Status>('idle')

  async function handleSearch() {
    setStatus('loading')
    setSearchResults([])
    const response = await fetch(
      `/api/book-search?searchTerm=${encodeURIComponent(search)}`
    )
    const data = await response.json()
    if (!response.ok) {
      setStatus('error')
    }
    setSearchResults(data.results)
    setStatus('success')
  }

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-white">
      <div className="bg-white text-black">
        <Header search={search} setSearch={setSearch} onSearch={handleSearch} />
        {status === 'success' && <SearchResultsList results={searchResults} />}
        {status === 'idle' && (
          <p className="text-center mt-2">Welcome to Book Search.</p>
        )}
        {status === 'loading' && (
          <p className="text-center mt-2">Searching...</p>
        )}
        {status === 'error' && (
          <p className="text-center mt-2 text-red-800 font-semibold">
            Something went wrong 😢 Try again later.
          </p>
        )}
      </div>
    </div>
  )
}

function SearchResultsList(props: { results: Array<BookResult> }) {
  const { results } = props
  // TIL: Rather than having complex ternaries in the parent, we can push the
  // logic for handling empty state to this component which can have a nice easy
  // to read early return.
  if (results.length === 0) {
    return <p className="text-center mt-2">No results found.</p>
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-2xl my-12">Search Results:</h2>
        {results.map((result) => {
          return <SearchResult key={result.isbn} book={result} />
        })}
      </div>
    </div>
  )
}

function SearchResult(props: { book: BookResult }) {
  const {
    book: { name, author, coverSrc },
  } = props
  return (
    <div className="border-2 border-gray-800 border-dashed flex mb-12 rounded-xl">
      <img
        src={coverSrc}
        alt="Book cover image"
        className="max-w-[200px] p-8 transform -translate-x-[25px] -translate-y-[25px] -rotate-[18deg] object-contain"
      />
      <div className="p-2 max-w-[280px] mt-2">
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-gray-600 mb-8">
          By <span className="italic font-semibold">{author}</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam
          sem, aliquet vel tempor a, commodo sed tellus. Quisque iaculis urna
          nisl, ut pellentesque mi sagittis in.{' '}
        </p>
      </div>
    </div>
  )
}

function Header(props: {
  search: string
  setSearch: (term: string) => void
  onSearch: () => void
}) {
  // TODO: Think more about what to pass as props. Who should own the state?
  const { search, setSearch, onSearch } = props

  return (
    <header className="flex bg-red-200 p-4 justify-end text-black border-b-2 border-black">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          onSearch()
        }}
      >
        <label htmlFor="search" className="mr-2">
          Search
        </label>
        <input
          type="text"
          placeholder="Search for a book"
          className="px-4 py-2 rounded-l-md border-r-0 border border-gray-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required={true}
        />
        <button className="px-4 py-2 bg-gray-200 rounded-r-md border-l-0 border border-gray-600">
          Go!
        </button>
      </form>
    </header>
  )
}
