import React, { useState, useContext, useRef, useEffect } from 'react'
import SendSharpIcon from '@material-ui/icons/SendSharp';
import TelegramIcon from '@material-ui/icons/Telegram';
import ChatMessage from './ChatMessage';
import { v4 as uuidv4 } from "uuid"








const Chat = (props) => {

    //  is like useState syntax actually , dispatch is lke the set...


    const [receivedMsgs, setReceivedMsgs] = useState([])

    const sendMessage = (message, username) => {

        props.socket.current.emit("message", {
            username: username,
            message: message
        })
    }
    if (props.socket.current)
        props.socket.current.on("message", data => {
            setReceivedMsgs([...receivedMsgs, data])
        })









    const [message, setMessage] = useState("")
    return (
        <div className="flex flex-col w-5/12  shadow-lg  ">
            <div className=" p-8 border border-gray-100 space-y-7 h-full ">
                {
                    receivedMsgs.map(msg =>
                        <ChatMessage username={msg.username} key={uuidv4()} message={msg.message} />
                    )
                }

            </div>



            <div className="flex items-center justify-between p-2 px-4 border border-gray-300">
                <input className="p-2 focus:outline-none placeholder-gray-300 " placeholder="ecrire ton message... "
                    type="text" onChange={(evt) => setMessage(evt.target.value)} />
                <TelegramIcon onClick={() => sendMessage(message, props.username)} fontSize="large" className="transform text-red-400  hover:text-red-300 cursor-pointer" />

            </div>


        </div>
    )
}

export default Chat
