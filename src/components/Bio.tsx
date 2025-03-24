import React from 'react'
import localFont from 'next/font/local';
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });

function Bio() {

    return (
        <section className="mx-auto px-4 max-w-xl py-16 pt-0 sm:pt-8">
            <div className="flex max-sm:flex-col gap-4">
                <img src="/" alt="" loading="eager" width="128" height="128" decoding="async" className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-bg-subtle border border-border shrink-0" />
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-text">Thomas Zabalo</h1>
                        <a href="/#services" className="bg-bg-subtle py-1.5 px-3 inline-flex items-center hover:bg-border transition-colors border border-border select-none">
                            <span className="relative flex h-3 w-3 mr-2">
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500">

                                </span>
                            </span>
                            <span>Full</span>
                        </a>
                    </div>
                    <div className="mt-2 space-y-3 sm:space-y-2">
                        <p>Développeur Full-Stack.</p>
                        <p>
                            Autre description
                        </p>
                    </div>
                    <div className="mt-4">
                        <div className="flex space-x-2">
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            </div>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            </div>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            </div>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Bio