'use client'
import React from 'react'

function Contact() {
    return (
        <section id="contact" className="mx-auto px-4 max-w-xl py-16 pb-0">
            <div className="flex items-center justify-between">
                <h2 className="text-text font-semibold text-lg">
                    <a href="/#contact" className="group flex items-center space-x-2">
                        <span> Contact </span>
                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path> </svg>
                        </span>
                    </a>
                </h2>
            </div>
            <p className="mt-4">
                Feel free to reach out if you're looking for a developer, have a question or
                just want to connect. I may be able to take new missions depending on my
                availability (top-right indicator).
            </p>
            <a href="mailto:" className="mt-4 block underline transition-colors hover:text-text">thomas.zabalo@gmail.com</a>
        </section>
    )
}

export default Contact