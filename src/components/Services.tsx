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
            </div>

            <p className="mt-4">
                I'm a frontend specialist with good knowledge in backend, UI/UX, and DevOps.
                I'm dedicated to crafting seamless, efficient, and user-friendly solutions.
            </p>

            <div className="mt-4 grid grid-cols-1 gap-4">
                <ServicesCard title='Frontend' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.' category="frontend" />
                <ServicesCard title='Backend' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.' category="backendcms" />
                <ServicesCard title='Mobile' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.' category="mobile" />
                <ServicesCard title='UI/UX' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.' category="uiux" />
                <ServicesCard title='DevOps' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.' category="devops" />
                <ServicesCard title='3D & Game Dev' paragraphe='I care about creating delightful interfaces, crafting pixel-perfect,
        responsive designs, paying attention to accessibility, and optimizing
        performance for an exceptional user experience.' category="3d" />
            </div>

        </section>
    )
}

export default Services