import { useState } from 'react';

function useToggle(initialVal = false) {
    const [currentState, toggleState] = useState(initialVal);
    const toggle = () => {
        toggleState(!currentState);
    };
    return [currentState, toggle];
}

export default useToggle;