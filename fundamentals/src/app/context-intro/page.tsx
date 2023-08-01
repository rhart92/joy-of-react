'use client'
import React from 'react'
import { useUser } from './use-user.hook'

type User = {
  name: string
  email: string
}

// TIL: Using context, we can provide the value to the whole component tree and then
// consume it at any point we need.
// VERY important that the context is NOT created inside the component. We only
// want to create the context once.
const UserContext = React.createContext<User | null>(null)

export default function App() {
  const user = useUser()

  console.log(UserContext)

  return (
    <UserContext.Provider value={user}>
      <CourseIndexLayout />
    </UserContext.Provider>
  )
}

function CourseIndexLayout() {
  return <CoursePage />
}

function CoursePage() {
  return <SubRouteWrapper />
}

function SubRouteWrapper() {
  return <CourseModuleBlock />
}

function CourseModuleBlock() {
  const user = React.useContext(UserContext)

  return <span>User email: {user?.email ?? 'Not provided'}</span>
}
