import { delayMs, normalize } from '@/utils/utils'
import { NextRequest, NextResponse } from 'next/server'
import { BookList, Doc } from './book'

export async function GET(req: NextRequest) {
  const params = new URL(req.url).searchParams

  const ms = normalize({
    value: Math.random(),
    currentMin: 0,
    currentMax: 1,
    newMin: 1000,
    newMax: 3000,
  })

  // TODO: Could move to middleware to test across all endpoints
  await delayMs(ms)

  const maybeError = Boolean(params.get('simulatedError'))
  if (maybeError) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Simulated error.',
      },
      {
        status: 500,
      }
    )
  }

  const term = params.get('searchTerm')

  if (!term) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Please provide a `searchTerm` as query parameter.',
      },
      {
        status: 400,
      }
    )
  }

  // Do the book API stuff
  const data = await searchBooks(term)

  return NextResponse.json(data)
}

async function searchBooks(
  term: string
): Promise<
  { ok: true; results: Array<BookResult> } | { ok: false; message: string }
> {
  const endpoint = 'https://openlibrary.org/search.json'
  const url = new URL(endpoint)
  url.searchParams.set('q', term)
  const response = await fetch(url)
  const data = await response.json()
  if (!data.docs) {
    return { ok: false, message: 'Failed to fetch books.' }
  }

  // Only grab the first 10 for this application
  const results = await Promise.all(
    data.docs
      .map((doc: Doc) => {
        return formatSearchBooksResults(doc)
      })
      .filter((book: BookResult | undefined) => book?.coverSrc)
      .slice(0, 10)
  )

  return { ok: true, results: results }
}

export type BookResult = {
  name: string
  isbn?: string
  author?: string
  coverSrc?: string
  abstract?: string
}

function formatSearchBooksResults(data: Doc): BookResult | undefined {
  const isbn = data.isbn?.[0]
  const olcl = data.oclc?.[0]

  if (!isbn || !olcl) {
    return
  }

  const name = data.title
  const author = data.author_name?.[0]
  const coverId = data.cover_i

  // const coverSrc = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
  // const coverSrc = `https://covers.openlibrary.org/b/oclc/${olcl}-L.jpg?default=false`
  const coverSrc = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg?default=false`
    : undefined

  return {
    isbn: isbn,
    name: name,
    author: author,
    coverSrc: coverSrc,
  }
}
