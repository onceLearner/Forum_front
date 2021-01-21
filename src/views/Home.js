import { Link } from '@reach/router'
import Io from "socket.io-client";
import React, { useContext, useRef, useState, useEffect } from 'react'
import Chat from '../components/user/Chat'
import Header from '../components/user/Header'
import HomeMiddle from '../components/user/HomeMiddle'

import { UserContext, UserDispatchContext, UserProvider } from "../context/User"


const url = {
    remote: "https://webrtc-back1.herokuapp.com",
    local: "http://localhost:5000"
}



function Home() {

    const username = useContext(UserContext);
    const setUsername = useContext(UserDispatchContext)

    const [userCount, setuserCount] = useState(1)


    const socket = useRef(null)


    useEffect(() => {
        socket.current = Io(url.local);
        socket.current.on("connect", (data) => {
            console.log("hello world ")
        })
        socket.current.emit("username", username)
        socket.current.on("userCount", data => {
            console.log(data)
            setuserCount(data)
        })


        return () => {
            socket.current.disconnect()
        }
    }, [])




    return (
        <div className=" flex  flex-col h-screen  ">
            <Header tab={'Accueil'} userCount={userCount} />
            <div className="flex justify-between  border   h-full ">
                <HomeMiddle />
                <Chat username={username} socket={socket} />
            </div>



        </div>
    )
}

export default Home
