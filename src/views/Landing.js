import { Link } from "@reach/router"
import React from 'react'
import LandingHeader from '../components/user/LandingHeader'
import LandingSvg from '../components/user/LandingSvg'


const Landing = () => {
    return (
        <div className="flex flex-col  gap-10  md:h-screen" style={{ background: `transparent linear-gradient(90deg, #100A2A 0%, #411430 100%) 0% 0% no-repeat padding-box`, fontFamily: "Montserrat" }}>
            <LandingHeader />
            <div className="flex flex-wrap gap-10 ml-10    ">
                <div className="flex flex-col  mt-20 p-6">
                    <span className="text-3xl text-gray-100 " style={{ fontWeight: "600" }}>FORUM  <span className="text-red-600"> EMI </span> ENTREPRISE  :   <span className="text-gray-200" style={{ fontWeight: "400" }}>Lorem ipsem</span></span>
                    <p className="text-gray-400 text-base mt-3">LREM IPSEM LOREM IPSEM KLEM IPSM LOREM </p>
                    <p className="text-gray-400 text-base">LOREM IPSEM LOREM IPSEM LOREM IPSEN</p>

                </div>
                <div className=" mt-10 md:ml-10">
                    <LandingSvg />

                </div>

            </div>

            <div className="flex flex-wrap gap-8 ml-10 md:ml-20 " >
                <Link to="/login"> <button className="text-xl border border-gray-500 rounded-sm text-gray-200 p-3 px-12  hover:opacity-50" >S'INSCRIRE</button></Link>
                <Link to="/Signup"> <button className="text-xl border border-gray-500 rounded-sm text-gray-200  p-3 px-12 hover:opacity-50"  >S'authentifier</button></Link>
            </div>

        </div>
    )
}

export default Landing
