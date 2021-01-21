import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from "axios"
import useSWR from "swr"
import TrackChangesIcon from '@material-ui/icons/TrackChanges';




const fetcher = url => fetch(url).then(res => res.json());

const ExpoDetails = (props) => {

    const [ent, setEnt] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://webrtc-back1.herokuapp.com/entreprise/${props.expoId}`).then(
    //         res => {
    //             setEnt(res.data[0])


    //         }
    //     ).catch(e => console.error(e))
    //     return () => {

    //     }
    // }, [])



    const { data, error } = useSWR(`https://webrtc-back1.herokuapp.com/entreprise/${props.expoId}`, fetcher, { refreshInterval: 2000 })


    if (!data) return (
        <div className={` grid place-items-center h-screen w-screen `}>
            <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
        </div>)



    return (
        <div className="flex  flex-col" style={{ fontFamily: "Montserrat" }}>
            <Header tab="Expo" />
            <div className="flex flex-col gap-12 p-12 ml-7">

                <div className="flex items-center  ">
                    <img width="300" src={`http://localhost:5000/entreprise/img/${props.expoId}`} />
                    <p className="text-6xl text-gray-600 " style={{ fontWeight: "600" }}>{data[0].title_entreprise}</p>
                </div>

                <iframe width="600" height="400" src="https://www.youtube.com/embed/MjeVI6feKn0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                <div className="p-1 bg-red-50 text-red-400 w-32">
                    #{data[0].interests}
                </div>
                <p className="text-gray-400 w-2/3 text-lg" style={{ fontWeight: "400" }}>{data[0].description} </p>
                <div className="flex  gap-5  ">
                    <button className="flex justify-evenly  bg-gradient-to-r from-red-400 to-red-500 text-gray-50 p-4 text-lg gap-4 rounded-3xl hover:from-red-50 hover:to-red-50 px-10 hover:text-red-500 transition duration-500"> en savoir Plus  </button>
                    <button className="flex justify-evenly  bg-gradient-to-r from-white-50 to-red-50 text-red-500 border border-red-400  hover:border-pink-900 p-4 px-10 text-lg gap-4 rounded-3xl" >  Deposer CV  </button>
                </div>
            </div>

        </div>
    )
}

export default ExpoDetails
