'use client'
import _ from 'lodash'
import { useState } from 'react'
import { SearchForm } from './SearchForm'
import { Result, SearchResults } from './SearchResults'

export default function App() {
  // All of the state is required to be "lifted" to the App component so that it
  // can be used / modified but multiple child components. This is also known as
  // "uni-directional" dataflow which in the case of React means that parents
  // can pass data to children but not the other way around.
  const [results, setResults] = useState<Result[]>([])
  // Whenever `SearchForm` updates the `searchTerm` state, it's THIS component
  // that re-renders since it's THIS component that owns the state. This means
  // that you don't want to lift your state as high as it goes, just high enough
  // so the components that need the state have access to avoid re-rendering
  // your whole application + it's hard to manage that many state hooks in a
  // single component.
  const [searchTerm, setSearchTerm] = useState('')

  function onSearch(term: string) {
    const resultCount = _.random(20, false)
    const fakeResults = _.range(resultCount).map((i) => ({
      id: crypto.randomUUID(),
    }))
    setResults(fakeResults)
  }

  return (
    <div className="p-8 bg-amber-300">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
      <SearchResults searchTerm={searchTerm} results={results} />
    </div>
  )
}
