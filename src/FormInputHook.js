import React from 'react';
import UseInputState from './hooks/UseInputState';

export default function FormInputHook() {
    const [email, updateEmail, resetEmail] = UseInputState('');
    return (
        <div>
            <h1>The value is from upper hook....{email}</h1>
            <input
                type='text'
                value={email}
                onChange={updateEmail}
            />
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}
