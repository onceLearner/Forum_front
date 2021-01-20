import React from 'react'
import ReactPlayer from 'react-player'
const HomeMiddle = () => {
    return (
        <div className=" flex flex-col  space-y-9 p-8 bg-gray-100 w-full" style={{ fontFamily: "Montserrat" }}>
            {/* <iframe width="90%" height="50%" title="hamid" src="https://www.youtube.com/embed/3CxtK7-XtE0" frameborder="0" allow="" allowfullscreen ></iframe> */}

            <p className="text-2xl text-gray-400">Live </p>
            <div className="h-full w-full flex flex-col justify-start items-center">
                <ReactPlayer
                    playing="false"
                    width="90%"
                    height="90%"


                    url='https://www.youtube.com/watch?v=daxoSTro9ac' />
                <span className=" text-xl text-gray-600 mt-6 " style={{ fontWeight: "600" }} >
                    <span className="text-lg font-gray-400 px-4" style={{ fontWeight: "400" }}> description: </span > discussion sur les enjeux strategique de l'economie marocaine
                 </span>
            </div>
        </div>
    )
}

export default HomeMiddle
