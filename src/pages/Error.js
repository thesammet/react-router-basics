import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
            <p>Go to the <Link to='/' >Home</Link></p>
        </div>
    )
}
