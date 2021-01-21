import React, { useState } from "react"

import { Link } from '@reach/router'
import axios from "axios"

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const LaodingIcon = <AutorenewIcon className="animate-spin" />

const loginHandle = async (username, password, setLoading, setMessgae) => {
    setLoading(true)
    const remote = "https://webrtc-back1.herokuapp.com/user/one_user"
    let result = false;
    axios.post(remote, {
        username: username,
        password: password,
        role: "normal"
    }).then(res => {
        setLoading(false);
        result = res.data
        setMessgae(result)
        if (result) setTimeout(() => {
            let btn = document.getElementById("a");
            console.log("heree");
            btn.click();
        }, 500)
    })
        .catch(e => console.error(e))


}



const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(null)

    return (
        <div className="  h-screen w-screen p-10 flex flex-col items-center" style={{ fontFamily: "Montserrat" }}>
            <div className="  text-gray-400 p-10 ">
                <p className="text-center font-light  p-4 text-base">
                    Espace authentification
                </p>
                <Link to="/Accueil" ><a id="a"></a></Link>
                <div className=" border-gray-600 opacity-80 px-5 ">
                    {
                        message !== null ?
                            (
                                message ?
                                    <p className="text-green-400 p-3   text-lg"> Welcome ! wait...</p> :
                                    <p className="text-red-400 p-3 text-lg">  Wrong Infos! Try again </p>
                            )
                            :
                            ``
                    }
                </div>
            </div>

            <div className="rounded-xl shadow-2xl     justify-center    flex flex-col  items-center space-y-8 gap-10 p-8 px-20 ">
                <AccountCircleIcon fontSize="large" className="text-red-300" />
                <div className="flex flex-col  gap-10 justify-start items-baseline">
                    <div className="flex items-center justify-between md:w-96  gap-5 ">
                        <p className="text-lg text-gray-500">Email </p>
                        <input type="text" className="focus:outline-none border p-2 rounded-3xl  placeholder-gray-400   " onChange={evt => setUsername(evt.target.value)} placeholder="entrez email..." />

                    </div>

                    <div className="flex  items-center justify-between gap-5  md:w-96 ">
                        <p className="text-lg text-gray-500">Password </p>
                        <input type="password" className="focus:outline-none border p-2 rounded-3xl " onChange={evt => setPassword(evt.target.value)} placeholder="entrez password..." />
                    </div>

                    <div className="flex  items-center justify-between gap-5  md:w-96 ">
                        <p className="text-lg text-gray-500">repetez Password </p>
                        <input type="password" className="focus:outline-none border p-2 rounded-3xl " onChange={evt => setPassword(evt.target.value)} placeholder="entrez password..." />
                    </div>

                </div>
                <div className="flex flex-wrap gap-20 mx-4  ">
                    <p></p>
                    <button onClick={() => loginHandle(username, password, setLoading, setMessage)} className="focus:outline-none border bg-red-400 text-white px-16 py-2 rounded-3xl">

                        {loading ? LaodingIcon : `S'inscrire`}


                    </button>
                    <Link to="/login"> <p className="text-red-400 border-b border-red-400 "> s'authentifier</p>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Signup

