import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

export default function Careers() {
    const careers = useLoaderData()
    return (
        <div className='careers'>
            {careers.map(career => (
                <Link to='/' key={career.id} >
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    )
}

//act like a service but in local using json-server
export const dataLoader = async () => {
    const res = await fetch('http://localhost:4000/careers')
    return res.json()
}