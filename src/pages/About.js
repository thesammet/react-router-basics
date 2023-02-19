import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About() {
    const [user, setUser] = useState('Samed')

    if (!user) {
        return (
            <Navigate to="/" replace={true} />
        )
    }
    return (
        <div className='about'>
            <h3>About</h3>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <button onClick={() => { setUser(null) }}>Logout</button>
        </div>
    )
}
