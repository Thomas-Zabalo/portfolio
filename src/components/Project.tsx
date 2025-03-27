import Link from 'next/link';
import React from 'react';

function Project() {
    return (
        <section id="projects" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                    <Link href="/#projects" className="group flex items-center space-x-2">
                        <span> Projets </span>
                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path>
                            </svg>
                        </span>
                    </Link>
                </h2>
            </div>

            <p className="my-4 dark:text-zinc-400 text-gray-700">
                Durant mes trois années de formation, j’ai eu l’opportunité de réaliser divers projets sur des thématiques variées,
                me permettant d’explorer différentes approches et technologies.
            </p>
            <div>
                <Link href="/projects" className="bg-gray-100 dark:bg-[#27272a] py-1.5 px-3 inline-flex items-center hover:bg-gray-200 dark:hover:bg-[#343435] transition-colors border border-gray-300 dark:border-zinc-700 select-none">
                    Voir mes projets
                </Link>
            </div>

        </section>
    );
}

export default Project;
