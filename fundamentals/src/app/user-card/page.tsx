'use client'
import { Spinner } from '@/components/spinner'
import React from 'react'
import useSWR from 'swr'

const shouldError = false

async function fetchUserInfo() {
  let url = '/api/user-info'
  if (shouldError) {
    url = `${url}?simulatedError=true`
  }
  const response = await fetch(url)
  const data = await response.json()
  // TIL: Remember, SWR expects user to throw to indicate an error and you can throw
  // non-error objects apparently 🤔 But this makes it nice since `error` in our
  // app isn't wrapped in a JS error class. It's just an object.
  if (!response.ok) {
    throw data
  }
  return data.user
}

type User = {
  name: string
  email: string
}

export default function App() {
  const { data, error, isLoading } = useSWR('/api/user-info', fetchUserInfo)
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-800 text-white items-center justify-center flex">
      {data && <UserCard user={data} />}
      {isLoading && <Spinner />}
      {error && <p>Something went wrong.</p>}
    </div>
  )
}

function UserCard(props: { user: User }) {
  const { user } = props
  return (
    <div className="border-2 rounded-xl p-4 border-dashed border-purple-500 shadow-[0px_0px_0px_2px_white] bg-white text-black flex flex-col items-center">
      <p className='text-xl font-semibold'>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}
