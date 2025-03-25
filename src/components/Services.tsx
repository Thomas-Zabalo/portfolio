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
        performance for an exceptional user experience.' category="model" />
            </div>
        </section>
    );
}

export default Services;
