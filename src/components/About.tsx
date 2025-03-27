import React from 'react';

function About() {
    return (
        <section id="about" className="mx-auto px-4 max-w-xl py-16">
            <h2 className="text-text font-semibold text-lg">
                <a href="/#about" className="group flex items-center space-x-2">
                    <span>A propos</span>
                    <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path>
                        </svg>
                    </span>
                </a>
            </h2>
            <div className="text-text-subtle dark:text-zinc-400 space-y-4 mt-4">
                <p>
                    Mon intérêt pour l'information, et plus particulièrement pour le développement web, a débuté en
                    2021 lorsque j’ai créé mon premier site. C’est à ce moment-là que j’ai commencé à explorer les différentes
                    facettes du développement web, ce qui m’a conduit à intégrer le cursus MMI à Castres.
                </p>
                <p>
                    Au cours de ces trois années, j’ai acquis de nombreuses compétences, aussi bien en développement web
                    (front-end et back-end) qu’en UI/UX, développement mobile, DevOps et gestion de projet.
                </p>
                <p>
                    Bien que le développement web soit destiné à devenir mon métier, j’ai un réel attrait pour la conception
                    et le développement d’interfaces utilisateur, la création de maquettes et l’amélioration de l’expérience utilisateur.
                </p>
            </div>
        </section>
    );
}

export default About;
