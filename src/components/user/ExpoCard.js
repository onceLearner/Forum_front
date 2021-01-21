import React from 'react'


const ExpoCard = (props) => {


    return (
        <div className="border border-red-100 rounded-xl justify-between p-6 flex flex-col gap-4 cursor-pointer transform hover:border-red-50 shadow-sm hover:shadow-xl hover:scale-105 duration-150 " style={{ fontFamily: "Montserrat" }}>


            <img width="200" src={`http://localhost:5000/entreprise/img/${props.expo.id_entreprise}`} />



            <p className="text-xl text-gray-800" style={{ fontWeight: "600" }}>{props.expo.title_entreprise}</p>

            <p className="text-gray-400">{props.expo.description.slice(0, 50)}</p>

        </div>
    )
}

export default ExpoCard
