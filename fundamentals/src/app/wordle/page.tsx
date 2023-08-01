'use client'
import _ from 'lodash'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Game } from './Game'
import { GameInput } from './GameInput'
import { Header } from './header'
import { LostBanner } from './LostBanner'
import { GameStatus, MAX_GUESSES } from './utils'
import { WonBanner } from './WonBanner'
import { words } from './words'

export type Guess = {
  id: string
  text: string
  letters: Array<{
    letter: string
    status: 'correct' | 'incorrect' | 'misplaced'
  }>
}

function chooseRandomWord() {
  /* const chosenWord = words[_.random(0, words.length - 1)] */
  // TIL: Lodash ships with `sample` which picks a random entry in a list
  const chosenWord = _.sample(words)
  if (!chosenWord) {
    throw new Error('Expected to be able to fetch a word.')
  }
  return chosenWord
}

function getNextWord() {
  const word = chooseRandomWord()
  // Log the word for debugging purposes
  console.log({ word })
  return word
}

export default function WordleGame() {
  const [guesses, setGuesses] = useState<Array<Guess>>([])
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing')
  const [correctWord, setCorrectWord] = useState(() => {
    return getNextWord()
  })

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const answerLetterMap = useMemo(
    () =>
      correctWord.split('').reduce<Record<string, number>>((acc, letter) => {
        if (acc[letter]) {
          return {
            ...acc,
            [letter]: (acc[letter] ?? 0) + 1,
          }
        }
        return acc
      }, {}),
    [correctWord]
  )

  function handleGuessAttempt(guess: string) {
    const uppercaseGuess = guess.toUpperCase()
    const newGuesses: Guess[] = [
      ...guesses,
      {
        id: crypto.randomUUID(),
        text: uppercaseGuess,
        letters: uppercaseGuess.split('').map((letter, i) => {
          if (letter === correctWord[i]) {
            // Correct letter and correct position?
            return { letter, status: 'correct' as const }
          } else if (letter in answerLetterMap) {
            // Correct letter but wrong position?
            return { letter, status: 'misplaced' as const }
          } else {
            // Failed
            return { letter, status: 'incorrect' as const }
          }
        }),
      },
    ]
    setGuesses(newGuesses)
    if (guess === correctWord) {
      setGameStatus('won')
      return
    }
    if (newGuesses.length === MAX_GUESSES) {
      setGameStatus('lost')
    }
  }

  function handleRestart() {
    setGuesses([])
    setCorrectWord(getNextWord())
    setGameStatus('playing')
    // TODO: Not working.
    inputRef.current?.focus()
  }

  return (
    <div>
      <Header />
      <main className="">
        <Game guesses={guesses} />
        <div style={{ display: gameStatus === 'playing' ? 'block' : 'none' }}>
          <GameInput onGuessAttempt={handleGuessAttempt} inputRef={inputRef} />
        </div>
        {gameStatus === 'playing' ? null : gameStatus === 'won' ? (
          <WonBanner onRestart={handleRestart} numGuesses={guesses.length} />
        ) : (
          <LostBanner onRestart={handleRestart} answer={correctWord} />
        )}
      </main>
    </div>
  )
}
