import useSWR from 'swr'

const ENDPOINT = '/api/user-info'

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()

  if (!response.ok) {
    throw json
  }

  return json
}

export function useUser() {
  const { data, error } = useSWR(ENDPOINT, fetcher)

  return data?.user
}
