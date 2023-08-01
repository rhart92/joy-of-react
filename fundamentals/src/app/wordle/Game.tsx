'use client'
import _ from 'lodash'
import { GuessRow } from './guess'
import type { Guess } from './page'
import { MAX_GUESSES } from './utils'

export function Game(props: { guesses: Guess[] }) {
  const { guesses } = props
  return (
    <div className="grid gap-4 grid-cols-5 max-w-sm mx-auto">
      {_.range(MAX_GUESSES).map((guessIndex) => {
        // TODO: Show modal with sharable stats for this round.
        // TODO: Figure out animations? In WORDLE, the boxes flip over to
        // reveal your guess.
        // If the application *did* allow you to re-order guesses, we
        // couldn't use the index. In this case, we'd have to track a
        // unique identifier with each guess to use a key.
        const guess: Guess | undefined = guesses[guessIndex]
        return <GuessRow key={guessIndex} guess={guess} />
      })}
    </div>
  )
}
