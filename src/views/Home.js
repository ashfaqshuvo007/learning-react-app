import React from 'react'
import HelloWorld from '../components/HelloWorld'

function Home() {
    return (
        <div>
            <h1 className="font-bold text-2xl">This is homepage</h1>

            <HelloWorld name="Ashfaq" />
        </div>
    )
}
export default Home