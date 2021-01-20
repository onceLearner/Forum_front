import React from 'react'
import SessionCard from '../components/SessionCard'
import Header from '../components/user/Header'

const Session = () => {
    return (
        <div>
            <Header tab={`Session`} />
            <div className="p-12 flex flex-col " style={{ fontFamily: "Montserrat" }}>
                <div className="text-2xl text-gray-500 " style={{ fontWeight: "600" }}>
                    <p>Rejoindre une session en <span className="text-red-500">visioConference </span></p>
                    <p>avec un <span className="text-red-500" >recruteur</span> de votre choix!</p>
                </div>
                <div className="mt-12">
                    <SessionCard />
                </div>

            </div>

        </div>
    )
}

export default Session
