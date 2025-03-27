import React from 'react'
import ParcoursCard from './ParcoursCard'
import Link from 'next/link'


function Parcours() {
    return (
        <section id="parcours" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-text font-semibold text-lg">
                    <Link href="/#parcours" className="group flex items-center space-x-2">
                        <span> Parcours </span>
                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path> </svg>
                        </span>
                    </Link>
                </h2>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
                <ParcoursCard name="Lycée technologique Antoine Bourdelle" description="Le lycée Antoine-Bourdelle est un établissement d’enseignement secondaire et supérieur, situé 3 boulevard Édouard-Herriot à Montauban. C'est le plus grand lycée de l'Académie de Toulouse avec 3 000 élèves" localisation="Montauban" date="2019-07-01 - 2022-07-01" url="https://www.lycee-bourdelle.fr/" image="/Lycee_Antoine_Bourdelle.webp" niveau="Bac"/>
                <ParcoursCard name="IUT Paul Sabatier" description="L'IUT Paul Sabatier - Site de Castres est une antenne de l'Université Toulouse III - Paul Sabatier, située à Castres, dans le Tarn. Il propose des formations professionnalisantes en lien avec les besoins du tissu économique local et national." localisation="Castres" date="2022-09-01 - now" url="https://www.iut-tlse3.fr/" image="/IUT_Paul_Sabatier_Castres.webp"  niveau="Bac+3"/>
                <ParcoursCard name="YNOV Campus" description="Ynov Campus Toulouse est une école privée spécialisée dans les formations aux métiers du numérique et des nouvelles technologies. Située à Toulouse, elle fait partie du réseau Ynov Campus, présent dans plusieurs villes en France." localisation="Toulouse" date="2025-09-01 - 2027-07-01" url="https://www.ynov.com/" image="/Campus_Ynov_Toulouse.webp"  niveau="Formation futur"/>
            </div>
        </section>
    )
}

export default Parcours