'use client';
import { useState } from 'react';

export function GameInput(props: {
    onGuessAttempt: (guess: string) => void;
    inputRef: React.RefObject<HTMLInputElement>;
}) {
    const { onGuessAttempt, inputRef } = props;
    const [guess, setGuess] = useState<string>('');
    return (
        <form
            className="block"
            onSubmit={(e) => {
                e.preventDefault();
                onGuessAttempt(guess);
                setGuess('');
            }}
        >
            <label htmlFor="guess-input" className="text-center block mt-8">
                Enter guess:
            </label>
            {/* minLength can have issues for some reason with uppercase, so using pattern */}
            {/* We can add a `title` attribute to show the user what we are expecting as a pattern */}
            <input
                ref={inputRef}
                type="text"
                minLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                maxLength={5}
                required={true}
                className="px-4 py-2 mx-auto block text-black rounded"
                value={guess}
                onChange={(e) => setGuess(e.target.value.toUpperCase())} />
        </form>
    );
}

