'use client';
import { Banner } from './Banner';
import { RestartButton } from './RestartButton';


export function WonBanner(props: {
    onRestart: () => void;
    numGuesses: number;
}) {
    const { onRestart, numGuesses } = props;
    return (
        <Banner status="success">
            <>
                <span>
                    You won in {numGuesses} guess{numGuesses > 1 ? 'es' : null}! 🥳
                </span>
                <RestartButton onRestart={onRestart} />
            </>
        </Banner>
    );
}

