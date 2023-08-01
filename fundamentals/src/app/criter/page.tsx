"use client"
import React, { useState } from "react"

type Message = any

export default function Messages() {
  const message = {
    content: "Just ate at “Les Corbeaux En Colère”. Wonderful little venue!",
    published: "January 21st at 9:45pm",
    author: {
      avatarSrc: "https://sandpack-bundler.vercel.app/img/avatars/009.png",
      avatarDescription: "Cartoon bear",
      name: "Ben Thorn",
      handle: "benjaminthorn",
    },
  }
  return (
    <div className="p-24">
      <Message message={message} />
    </div>
  )
}

// fjkdlf is awesome
function Message(props: { message: Message }) {
  const { message } = props
  const imageAltText = `${message.author.avatarDescription} (user profile photo)`
  return (
    <aside className="bg-white text-black w-72 rounded-md drop-shadow-md">
      <header className="flex items-end mb-4 bg-slate-200 relative">
        <img
          alt={imageAltText}
          src={message.author.avatarSrc}
          className="h-16 rounded-full absolute left-0 -top-8"
        />
        <a href={`/users/${message.author.handle}`} className="my-2 ml-20">
          {message.author.name}
        </a>
      </header>
      <p className="mb-4 pl-4 pr-4">{message.content}</p>
      <footer className="p-4 text-gray-600 text-sm border-t border-gray-300">
        Posted {message.published}
      </footer>
    </aside>
  )
}
