import { useState } from 'react'

export function SearchForm(props: {
  searchTerm: string
  setSearchTerm: (search: string) => void
  onSearch: (term: string) => void
}) {
  return (
    <div className="text-black">
      {/* Since all the state now lives in parent, we could avoid passing `term` if we */}
      {/* wanted to. */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.onSearch(props.searchTerm)
        }}
      >
        <label htmlFor="search-input">Search: </label>
        <input
          id="search-input"
          className="px-4 py-2 rounded"
          type="text"
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  )
}
