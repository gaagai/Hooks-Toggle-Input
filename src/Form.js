import React, { useState } from 'react'

export default function Form() {
    const [email, setEmail] = useState('');
    const handelChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div>
            <h1>The value is....{email}</h1>
            <input
                type='text'
                value={email}
                onChange={handelChange}
            />
            <button onClick={() => setEmail("")} >Submit</button>
        </div>
    )
}
