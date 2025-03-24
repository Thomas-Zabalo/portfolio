import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function About() {

    return (
        <section id="about" className="mx-auto px-4 max-w-xl py-16">
            <h2 className="text-text font-semibold text-lg">
                <a href="/#about" className="group flex items-center space-x-2">
                    <span> About </span>
                    <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                            <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path> </svg>
                    </span>
                </a>
            </h2>
            <div className="text-text-subtle [&amp;_a]:font-medium [&amp;_a]:text-text [&amp;_a]:underline [&amp;_ul]:list-disc [&amp;_ul]:pl-5 [&amp;_ul]:py-2 [&amp;_li]:pl-1 space-y-4 mt-4">
                <p>Younger, I managed a computer fleet before giving game development a try
                    with Unreal Engine 4. In late 2019, my curiosity led me to self-taught
                    exploration in web development. Despite my independent learning, I enrolled
                    early 2023 in a <a href="https://www.lewagon.com/web-development-course" target="_blank" rel="noopener noreferrer"> Le Wagon </a>
                    bootcamp, where I obtained certification as a web designer and developer.</p>
                <p>I learned a lot of things along the way: web development, UI/UX design
                    (mobile apps, design systems), project management, devops and more! I’m
                    curious and eager to learn new things.</p>
                <p>Web development isn’t my sole passion; I also have a deep love for playing
                    music! I’ve been honing my skills with various instruments for over a
                    decade, including drums, percussion, bass guitar, and even a bit of piano.</p>
            </div>
        </section>

    )

}

export default About