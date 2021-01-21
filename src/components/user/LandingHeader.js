import React from 'react'
import logo from './logo-white.png';
import { Link } from '@reach/router'



import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';

const tabs = ['Accueil', "Session", "Expo", "Jobs"]

const LandingHeader = (props) => {
    return (
        <div className=" flex  items-center   justify-between p-1 px-10 text-lg" style={{ background: `transparent linear-gradient(90deg, #100A2A 0%, #411430 100%) 0% 0% no-repeat padding-box`, fontFamily: "Montserrat" }}>
            <div>
                <Link to="/" ><img width="100" height="30" src={logo} alt="logo" /></Link>

            </div>



            <div className="flex justify-evenly gap-16 text-xl text-gray-50"  >
                {tabs.map(tab =>
                    <Link to={`/${tab}`}>
                        <p className={`text-gray-50 hover:opacity-50`}>{tab}</p>
                    </Link>

                )}

            </div>



            <div className="flex items-center gap-7    ">

                <Link to="/login"> <AccountCircleSharpIcon className="text-red-50" style={{ fontSize: "30px" }} />
                </Link>



            </div>




        </div>
    )
}

export default LandingHeader
