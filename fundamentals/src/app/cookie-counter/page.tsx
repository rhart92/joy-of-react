'use client'
import style from './style.module.css'
import { Dispatch, SetStateAction, useState } from 'react'

export default function CookieCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center">
      <main className="my-4">
        <Cookie setCount={setCount} />
      </main>
      <footer>
        Your coin balance is: <strong>{count}</strong>
      </footer>
    </div>
  )
}

function Cookie(props: { setCount: Dispatch<SetStateAction<number>> }) {
  return (
    <div>
      <button
        onClick={() => props.setCount((count) => count + 2)}
        className={`${style.coin} max-w-[200px]`}
      >
        <img
          src="https://sandpack-bundler.vercel.app/img/toonie.png"
          alt="Large cookie"
        />
      </button>
    </div>
  )
}
