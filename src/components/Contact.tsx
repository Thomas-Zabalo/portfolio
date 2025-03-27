'use client'
import React from 'react';
import Link from 'next/link';

function Contact() {
    return (
        <section id="contact" className="mx-auto px-4 max-w-xl py-16 pb-12">
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
                N'hésitez pas à me contacter si vous cherchez un développeur, si vous avez des questions ou si vous souhaitez simplement échanger.
            </p>
            <Link href="mailto:thomas.zabalo@gmail.com" className="mt-4 block underline transition-colors hover:text-text">thomas.zabalo@gmail.com</Link>
        </section>
    )
}

export default Contact