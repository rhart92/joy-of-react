export type Result = {
  id: string
}

export function SearchResults(props: { results: Array<Result>, searchTerm: string }) {
  return (
    <div className="text-black">
      <div>Number of search results: {props.results.length}</div>
      <div>Search term was: {props.searchTerm}</div>
    </div>
  )
}
