import React from 'react'

type User = {
  relativePath: string
  alt: string
}

export default function Page() {
  const baseUrl = 'https://sandpack-bundler.vercel.app'
  const users: Array<User> = [
    {
      relativePath: '/img/avatars/001.png',
      alt: 'person with curly hair and a black T-shirt',
    },
    {
      relativePath: '/img/avatars/002.png',
      alt: 'person wearing a hijab and glasses',
    },
    {
      relativePath: '/img/avatars/003.png',
      alt: 'person with short hair wearing a blue hoodie',
    },
    {
      relativePath: '/img/avatars/004.png',
      alt: 'person with a pink mohawk and a raised eyebrow',
    },
  ]
  return (
    <div className="flex gap-2 bg-amber-300 p-24 flex-wrap">
      {users.map((user) => (
        <Avatar
          key={user.relativePath}
          src={`${baseUrl}${user.relativePath}`}
          alt={user.alt}
        />
      ))}
    </div>
  )
}

function Avatar(props: { src: string; alt: string }) {
  const { src, alt } = props
  return (
    <div className="bg-white border-4 border-black rounded-full w-24 h-24 overflow-clip hover:border-dotted hover:border-pink-500 hover:-rotate-12 transition-transform ease-in-out">
      <img src={src} alt={alt} />
    </div>
  )
}
