'use client';
import _ from 'lodash';
import { Banner } from "./Banner";
import { RestartButton } from "./RestartButton";


export function LostBanner(props: { onRestart: () => void; answer: string; }) {
    const { onRestart, answer } = props;
    return (
        <Banner status="failure">
            <>
                <span>You lost 😢 The answer was {_.capitalize(answer)}</span>
                <RestartButton onRestart={onRestart} />
            </>
        </Banner>
    );
}

