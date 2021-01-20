import React from 'react'
import Avatar from '@material-ui/core/Avatar';


const ChatMessage = (props) => {
    return (
        <div className="flex  gap-2 ">
            <Avatar className=" transform -translate-y-3" >{props.username.slice(0, 1)}</Avatar>
            <div className="p-4 bg-gray-100  rounded-xl">
                <p >{props.message}</p>
            </div>


        </div>
    )
}

export default ChatMessage
