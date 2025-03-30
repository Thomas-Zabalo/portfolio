import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Experience() {
    const cdg = [
        {
            name: 'TYPO3',
            url: 'https://typo3.org/',
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-original.svg",
        },
        {
            name: 'PHP',
            url: 'https://www.php.net/',
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
            name: 'Docker',
            url: 'https://developer.mozilla.org/fr/docs/Web/HTML',
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
    ]
    const laborie = [
        {
            name: "Next.js",
            url: "https://nextjs.org",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Node.js",
            url: "https://nodejs.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "GitHub",
            url: "https://github.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
            name: "Figma",
            url: "https://www.figma.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
    ]

    return (
        <section id="experience" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                    <Link href="/#experience" className="group flex items-center space-x-2">
                        <span> Experience </span>
                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path>
                            </svg>
                        </span>
                    </Link>
                </h2>
            </div>

            <p className="my-4 dark:text-zinc-400 text-gray-700">
                Au cours de mes études, j'ai eu l'opportunité d'effectuer plusieurs stages et projets qui m'ont permis de mettre en pratique mes compétences
                techniques et de travailler en équipe. Voici quelques-unes de mes expériences les plus significatives :
            </p>
            <ul className='list-disc pl-12'>
                <li className='mb-4'>
                    <div>
                        <span className='text-gray-900 dark:text-gray-100 font-semibold'>
                            Stage de développement web - CDG82
                        </span>
                        <br />
                        <span className='dark:text-zinc-400 text-gray-700'>
                            CDG82 est un établissement qui s'occupe des différentes collectivités et
                            particuliers dans tous le département du Tarn-et-Garonne.
                            <br />
                            <br />
                            Conception et déploiement de nouveaux modules et extensions pour leurs sites sous TYPO3.
                        </span>
                        <br />
                        <div className="flex flex-wrap mt-2">
                            {cdg.map((tech) => (
                                <Link
                                    key={tech.name}
                                    href={tech.url}
                                    target="_blank"
                                    className="bg-white border border-gray-300 px-2 py-1 inline-flex items-center hover:underline hover:text-gray-900 transition-colors dark:bg-[#18181b] dark:hover:text-white dark:border-gray-700"
                                >
                                    <Image src={tech.svg} alt={`Logo de la technologie: ${tech.name}`} width="16" height="16" className="mr-1 h-4 w-4" />
                                    <span className="leading-5">{tech.name}</span>
                                </Link>
                            ))}
                        </div>
                        <br />
                        <span className='flex justify-end text-gray-700 dark:text-gray-400'>
                            2025-02-17 - 2025-06-06
                        </span>
                    </div>
                </li>
                <li>
                    <div>
                        <span className='text-gray-900 dark:text-gray-100 font-semibold'>
                            Apprentissage développement web - Corentin Laborie
                        </span>
                        <br />
                        <span className='dark:text-zinc-400 text-gray-700'>
                            Apprentissage chez un freelance qui développe des sites web et applications pour ses clients.
                            <br />
                            <br />
                            DDéveloppement avec Next.js, approfondissement des connaissances sur GitHub, création
                            d'API avec Node.js, application des bonnes pratiques de développement et gestion de projet.
                        </span>
                        <br />
                        <div className="flex flex-wrap mt-2">
                            {laborie.map((tech) => (
                                <Link
                                    key={tech.name}
                                    href={tech.url}
                                    target="_blank"
                                    className="bg-white border border-gray-300 px-2 py-1 inline-flex items-center hover:underline hover:text-gray-900 transition-colors dark:bg-[#18181b] dark:hover:text-white dark:border-gray-700"
                                >
                                    <Image src={tech.svg} alt={`Logo de la technologie: ${tech.name}`} width="16" height="16" className="mr-1 h-4 w-4" />
                                    <span className="leading-5">{tech.name}</span>
                                </Link>
                            ))}
                        </div>
                        <br />
                        <span className='flex justify-end text-gray-700 dark:text-gray-400'>
                            2024-04-14 - 2024-06-24
                        </span>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Experience;
