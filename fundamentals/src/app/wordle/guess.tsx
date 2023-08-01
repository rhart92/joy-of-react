import _ from 'lodash'
import { Guess } from './page'

const letterStatusToClassName = {
  correct: 'bg-green-500',
  incorrect: 'bg-gray-500',
  misplaced: 'bg-red-500',
}

// TODO: Guess shouldn't need the `correctWord`, this functionality should be
// housed in a higher component.
export function GuessRow(props: { guess: Guess | undefined }) {
  const { guess } = props
  return (
    <>
      {_.range(5).map((i) => {
        const maybeLetter = guess?.letters[i]
        return <GuessCell maybeLetter={maybeLetter} key={i} />
      })}
    </>
  )
  /* Original solution */
  /* return ( */
  /*   <> */
  /*     {_.range(LETTERS_IN_WORD).map((_, letterIndex) => { */
  /*       // Review `checkGuess` method in sample project. Probably a bit */
  /*       // more performant and good to look at. */
  /*       const colorClass = !guess?.[letterIndex] */
  /*         ? '' */
  /*         : guess?.[letterIndex] === correctWord[letterIndex] */
  /*         ? 'bg-green-500' */
  /*         : correctWord.includes(guess?.[letterIndex]) */
  /*         ? 'bg-amber-500' */
  /*         : 'bg-gray-500' */
  /*       const baseKey = `${guessIndex}-${letterIndex}` */
  /*       const key = guess?.[letterIndex] */
  /*         ? `${baseKey}-${guess[letterIndex]}` */
  /*         : baseKey */
  /*       return ( */
  /*         <div */
  /*           key={key} */
  /*           className={`aspect-square border border-gray-500 flex flex-col items-center min-h-full ${colorClass}`} */
  /*         > */
  /*           <div className="flex flex-1 items-center text-2xl"> */
  /*             {guess?.[letterIndex]?.toUpperCase()} */
  /*           </div> */
  /*         </div> */
  /*       ) */
  /*     })} */
  /*   </> */
  /* ) */
}

function GuessCell(props: {
  maybeLetter:
    | { letter: string; status: 'correct' | 'incorrect' | 'misplaced' }
    | undefined
}) {
  const { maybeLetter } = props
  const colorClass = maybeLetter?.status
    ? letterStatusToClassName[maybeLetter.status]
    : // Empty guess background color
      `bg-black-200`

  return (
    <div
      className={`aspect-square border border-gray-500 flex flex-col items-center min-h-full ${colorClass}`}
    >
      <div className="flex flex-1 items-center text-2xl">
        {maybeLetter?.letter}
      </div>
    </div>
  )
}
