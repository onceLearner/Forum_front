import React from 'react'

import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import Header from './Header';

const JobDetails = (props) => {

    return (
        <div className=" flex flex-col gap-8 ">
            <Header tab="Jobs" />
            <div className="flex flex-col p-10" style={{ fontFamily: "Montserrat" }} >
                <p className="text-5xl text-gray-600" style={{ fontWeight: "600" }}>Front-end Engineer</p>
                <div className="flex flex-col gap-6 py-5 " style={{ fontWeight: "600" }}>
                    <div className="flex items-center gap-4">
                        <BusinessOutlinedIcon className="text-red-400" />
                        <p className="text-gray-500"> BCP </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <LocationOnIcon className="text-red-400" />
                        <p className="text-gray-500"> Rabat </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <WorkIcon className="text-red-400" />
                        <p className="text-gray-500"> PFE </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 mt-8">
                    <p className="text-2xl text-gray-700" style={{ fontWeight: "600" }}> Description</p>
                    <p className="text-lg text-gray-400 w-2/3" >Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée. – Rédiger des documents de conception technique. – Mettre en place la version en gestion de configuration et respecter les bonnes pratiques de développement. – S’assurer de la qualité des livrables logicielles et documentaires tout en respectant les délais et les charges.</p>
                </div>

                <div className="flex flex-col gap-8 mt-8">
                    <p className="text-2xl text-gray-700" style={{ fontWeight: "600" }}> Profil</p>
                    <p className="text-lg text-gray-400 w-2/3" >Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée.</p>
                </div>
                <div className="flex items-center justify-center mt-10">
                    <button className="bg-gradient-to-br from-red-600 to-red-500 text-gray-50 px-16 text-xl p-4 hover:from-red-400 hover:to-red-500"  >Postuler </button>
                </div>
            </div>

        </div>
    )
}

export default JobDetails
