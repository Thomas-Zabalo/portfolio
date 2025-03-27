import React from 'react';
import ServicesCard from './ServicesCard';
import Link from 'next/link';

function Services() {
    return (
        <section id="services" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-gray-900 font-semibold text-lg dark:text-white">
                    <Link href="/#services" className="group flex items-center space-x-2">
                        <span> Services </span>
                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path>
                            </svg>
                        </span>
                    </Link>
                </h2>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-400">
                Au fil des projets réalisés durant ma formation et de mes expériences professionnelles, j’ai eu l’opportunité de travailler avec de nombreuses technologies :
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4">
                <ServicesCard
                    title='Frontend'
                    paragraphe='Je me passionne pour la création d’interfaces utilisateur attrayantes, en concevant des designs responsives et pixel-perfect, tout en portant une attention particulière à l’accessibilité et à l’optimisation des performances pour offrir une expérience utilisateur exceptionnelle.'
                    category="frontend" />

                <ServicesCard
                    title='Backend & CMS'
                    paragraphe='Je me concentre sur la conception de solutions backend robustes et évolutives, en assurant une intégration fluide avec les systèmes existants, tout en garantissant des performances optimales et une gestion efficace des données.'
                    category="backendcms" />

                <ServicesCard
                    title='Mobile'
                    paragraphe='Je m’efforce de créer des expériences mobiles fluides et engageantes, en développant des interfaces utilisateur intuitives et en optimisant les performances pour des appareils mobiles afin de garantir une expérience optimale sur toutes les plateformes.'
                    category="mobile" />

                <ServicesCard
                    title='UI/UX'
                    paragraphe='Je m’engage à créer des interfaces utilisateur élégantes et fonctionnelles, en mettant l’accent sur l’ergonomie, l’accessibilité et la fluidité de l’expérience utilisateur pour répondre aux besoins des utilisateurs tout en offrant une expérience agréable.'
                    category="uiux" />

                <ServicesCard
                    title='DevOps'
                    paragraphe='Je mets en place des solutions DevOps pour automatiser les processus de développement et de déploiement, améliorer l’efficacité de l’équipe, et garantir une intégration continue et une gestion efficace des infrastructures.'
                    category="devops" />

                <ServicesCard
                    title='3D & Game Dev'
                    paragraphe='Je crée des environnements 3D immersifs et des expériences de jeu captivantes, en travaillant sur des modèles 3D et des mécaniques de gameplay pour offrir une expérience interactive riche et divertissante.'
                    category="model" />

            </div>
        </section>
    );
}

export default Services;
