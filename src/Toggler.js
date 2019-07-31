import React from 'react'
import useToggle from './hooks/UseToggle'

export default function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isApple, toggleApple] = useToggle(true);
    return (
        <div>
            <h1 onClick={toggleIsHappy}>
                {isHappy ? '😇' : '😨'}
            </h1>
            <h1 onClick={toggleApple}>
                {isApple ? '🍎' : '🍌'}
            </h1>
        </div>
    )
}

