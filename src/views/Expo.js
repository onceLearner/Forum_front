import React, { userState, useEffect } from 'react'
import Header from '../components/user/Header'
import { v4 as uuidv4 } from "uuid"
import { Link } from '@reach/router';
import useSWR from "swr"


import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import ExpoCard from '../components/user/ExpoCard';

const fetcher = url => fetch(url).then(res => res.json());



const Expo = () => {




    // useEffect(() => {

    //     setList(listInitial.filter(job => job.id_job.includes(search)))
    //     return () => {

    //     }
    // }, [search])


    const { data, error } = useSWR('https://webrtc-back1.herokuapp.com/entreprise/entreprises', fetcher, { refreshInterval: 2000 })


    if (!data) return (
        <div className={` grid place-items-center h-screen w-screen `}>
            <TrackChangesIcon style={{ fontSize: "60px" }} className=" text-gray-200  animate-spin" />
        </div>)



    return (
        <div className="flex flex-col gap-10 " style={{ fontFamily: "Montserrat" }}>
            <Header tab="Expo" />
            <div className="p-10 flex   justify-between  ">
                <div className="flex flex-col gap-6" >
                    <p className=" text-4xl text-gray-600" style={{ fontWeight: "600" }}>Expo Forum   <span className="text-red-500 text-4xl"> EMI</span> Entreprise</p>
                    <p className="w-80 text-gray-400 " style={{ fontWeight: "600" }}>Savoir plus sur les Startups, Sociétés Corps invitee au Forum</p>
                </div>


            </div>
            <div className="flex flex-wrap gap-4 p-7">

                {data.map(expo =>
                    <Link to={expo.id_entreprise}>
                        <ExpoCard key={uuidv4()} expo={expo} />
                    </Link>
                )}


            </div>

        </div>
    )
}

export default Expo
