'use client'
import React, { ReactNode } from 'react'
import useSWR from 'swr'

type User = {
  name: string
  email: string
}

type UserContextType = {
  user?: User
  logOut?: () => void
  editProfile?: (u: Partial<User>) => void
}

export const UserContext = React.createContext<UserContextType>({})

const ENDPOINT = 'https://jor-test-api.vercel.app/api/get-current-user'

async function fetcher(endpoint: string) {
  const response = await fetch(endpoint)
  const json = await response.json()

  if (!json.ok) {
    throw json
  }

  return json.user
}

function UserProvider({ children }: { children: ReactNode }) {
  const {
    data: user,
    // error: userError, // Not used in this application
    mutate: mutateUser,
  } = useSWR(ENDPOINT, fetcher)

  const logOut = React.useCallback(() => {
    mutateUser({
      user: null,
    })
  }, [mutateUser])

  const editProfile = React.useCallback(
    (newData: Partial<User>) => {
      mutateUser({
        user: {
          ...user,
          ...newData,
        },
      })
    },
    [user, mutateUser]
  )

  return (
    <UserContext.Provider value={{ user, logOut, editProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
