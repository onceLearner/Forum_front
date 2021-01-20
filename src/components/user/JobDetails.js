import React from 'react'

import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import Header from './Header';

const JobDetails = (props) => {

    return (
        <div className=" flex flex-col ">
            <Header tab="Jobs" />
            <p className="text-3xl text-gray-700">Front-end Engineer</p>
            <div className="flex flex-col gap-8 ">
                <div className="flex items-center gap-4">
                    <BusinessOutlinedIcon className="text-red-400" />
                    <p className="text-gray-500"> BCP </p>
                </div>

                <div className="flex items-center gap-4">
                    <LocationOnOutlinedIcon className="text-red-400" />
                    <p className="text-gray-500"> Rabat </p>
                </div>

                <div className="flex items-center gap-4">
                    <WorkOutlineOutlinedIcon className="text-red-400" />
                    <p className="text-gray-500"> PFE </p>
                </div>
            </div>

            <div className="flex flex-cl gap-8">
                <p className="text-2xl text-gray-700"> Description</p>
                <p className="text-2xl text-gray-400 w-2/3" >Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée. – Rédiger des documents de conception technique. – Mettre en place la version en gestion de configuration et respecter les bonnes pratiques de développement. – S’assurer de la qualité des livrables logicielles et documentaires tout en respectant les délais et les charges.</p>
            </div>

            <div className="flex flex-cl gap-8">
                <p className="text-2xl text-gray-700"> Profil</p>
                <p className="text-2xl text-gray-400 w-2/3" >Pour le compte de notre client, multinationale spécialisée dans l’infogérance et l’intégration informatique, nous recrutons un Développeur J2EE confirmé en CDI sur Rabat Vous aurez pour principales missions et responsabilités: – Proposer une solution logicielle adaptée.</p>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-gradient-to-r from-red-400 to-red-500 text-gray-50  text-lg p-3" >Postuler </button>
            </div>

        </div>
    )
}

export default JobDetails
