import React from 'react'
import logo from './logo.png';


import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const tabs = ['Accueil', "Session", "Exp", "Jobs"]

const Header = (props) => {
    return (
        <div className=" flex shadow-md items-center  justify-between p-4 px-10 text-lg" style={{ fontFamily: "Montserrat", fontWeight: "600" }}>
            <div>
                <img width="100" height="30" src={logo} alt="logo" />

            </div>

            <div className="flex  items-center gap-3">

                <span class="relative  inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                <p className="text-base text-gray-500 " style={{ fontWeight: "300" }}>54 online</p>


            </div>

            <div className="flex justify-evenly gap-10 text-xl" >
                {tabs.map(tab =>

                    <p className={(props.tab == tab) && `text-red-400`}>{tab}</p>

                )}

            </div>



            <div className="flex items-center gap-7    ">
                <div className="flex flex-col transform -translate-y-1">
                    <NotificationsNoneOutlinedIcon className="text-red-400 transform translate-y-3" style={{ fontSize: "30px" }} />
                    <span class="relative   inline-flex rounded-full h-4 w-4 bg-green-500 items-center justify-center" > <p className=" text-xs  text-white" style={{ fontSize: "12px" }}>2</p></span>

                </div>
                <AccountCircleSharpIcon className="text-red-400" style={{ fontSize: "30px" }} />



            </div>




        </div>
    )
}

export default Header
