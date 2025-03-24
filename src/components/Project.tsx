import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
    return (
        <section id="projects" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-text font-semibold text-lg">
                    <a href="/#services" className="group flex items-center space-x-2">
                        <span> Projets </span>
                    </a>
                </h2>
            </div>

            <p className="mt-4">
                I'm a frontend specialist with good knowledge in backend, UI/UX, and DevOps.
                I'm dedicated to crafting seamless, efficient, and user-friendly solutions.
            </p>
            
            <div className="grid grid-cols-1 mt-4 gap-10">
                <ProjectCard />
            </div>
        </section>
    )
}

export default Project