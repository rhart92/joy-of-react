'use client';
import { RefreshCcw } from 'react-feather';


export function RestartButton(props: { onRestart: () => void; }) {
    return (
        <button
            className="px-4 py-2 border border-white rounded flex justify-center items-center gap-2 transition-colors transition-transform ease-in-out hover:-translate-y-1"
            onClick={props.onRestart}
        >
            <RefreshCcw size="18" />
            <span>Play Again?</span>
        </button>
    );
}

