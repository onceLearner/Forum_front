import { Link } from '@reach/router'
import React from 'react'

function Home() {
    return (
        <div>
            <h1 className="text-5xl text-center">
                Welcome
            </h1>
            <div className="flex justify-center items-center gap-10 space p-16  ">
                <Link to="/peerjs" className="text-2xl ext-gray-700 hover:text-yellow-600" > <span className="font-bold text-yellow-500"> PeerJs </span>  implementation</Link>
                <Link to="/simple" className="text-2xl text-gray-700 hover:text-green-600"  >  <span className="font-bold text-green-500">Simple PeerJs</span> impelment</Link>


            </div>
        </div>
    )
}

export default Home
