import React from 'react'
import ServicesCard from './ServicesCard'

function Services() {
    return (
        <section id="services" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-text font-semibold text-lg">
                    <a href="/#services" className="group flex items-center space-x-2">
                        <span> Services </span>
                    </a>
                </h2>
                <p className="text-text font-semibold text-lg"> €100/hour                </p>
            </div>

            <p className="mt-4">
                I'm a frontend specialist with good knowledge in backend, UI/UX, and DevOps.
                I'm dedicated to crafting seamless, efficient, and user-friendly solutions.
            </p>


            <ServicesCard title='Frontend' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.'/>


        </section>
    )
}

export default Services