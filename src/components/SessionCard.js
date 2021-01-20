import React from 'react'
import FilterListIcon from '@material-ui/icons/FilterList';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
const SessionCard = (props) => {
    return (
        <div className="shadow-lg rounded-2xl  flex justify-between p-12" style={{ fontFamily: "Montserrat" }}>
            <div className="space-y-5">
                <div>
                    <p className="text-4xl text-gray-600 " style={{ fontWeight: "600" }}>Banque Populaire</p>
                </div>
                <div className="flex justify-evenly ">
                    <FilterListIcon className="text-red-400" />
                    <p className=" text-gray-400">file d'attente : </p>
                    <p className="text-red-400">5 personnes</p>

                </div>
                <div className="bg-gradient-to-r from-red-50 to-red-100 w-36 flex justify-center">
                    <p className="text-lg text-red-300 ">#SERVICE</p>

                </div>

            </div>
            <div className="flex flex-col gap-5 ">
                <button className="flex justify-evenly bg-gradient-to-r from-red-400 to-red-500 text-gray-50 p-4 text-lg gap-4 rounded-3xl"> <FilterListIcon className="text-white" /> rejoindre file d'attente  </button>
                <button className="flex justify-evenly bg-gradient-to-r from-white-50 to-red-50 text-red-500 border border-red-400 p-4 text-lg gap-4 rounded-3xl" >  <ChatBubbleOutlineIcon />  envoyer un message </button>
            </div>

        </div>
    )
}

export default SessionCard
