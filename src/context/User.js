import React, { createContext, useState } from "react"


// context : like username 
// contextDispatch : like the setUsername


const UserContext = createContext("test")
const UserDispatchContext = createContext(undefined)

const UserProvider = (props) => {

    const [username, setUsername] = useState("hamid")


    return (
        <UserContext.Provider value={username}>

            <UserDispatchContext.Provider value={setUsername} >

                {props.children}

            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )

}


export { UserProvider, UserContext, UserDispatchContext }