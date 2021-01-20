import Io from "socket.io-client";
import { useState, useEffect, useRef } from "react";

/**
 * 
 * @param {*} url url to the server
 * @returns socket to be used  
 */
const useSocket = (url) => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socketIo = Io(url)

        setSocket(socketIo)

        function cleanup() {
            socketIo.disconnect()
        }
        return cleanup

        // should only run once and not on every re-render,
        // so pass an empty array
    }, [])

    return socket
}

export default useSocket;