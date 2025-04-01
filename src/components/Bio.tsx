import Image from 'next/image'
import React from 'react'

function Bio() {

    return (
        <section className="mx-auto px-4 max-w-xl py-16 pt-0 sm:pt-8">
            <div className="flex max-sm:flex-col gap-4">
                <Image src="/Moi.jpg" alt="" loading="eager" width="128" height="128" decoding="async" className="h-24 w-24 sm:h-32 sm:w-32 rounded shrink-0" />
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-text">Thomas Zabalo</h1>
                    </div>
                    <div className="mt-2 space-y-3 sm:space-y-2 dark:text-zinc-400 text-gray-700">
                        <p>
                            Je suis un développeur Frontend passionné, avec des connaissances en backend et en UI/UX.
                            J’aime concevoir des interfaces intuitives et soignées, en alliant performance et expérience utilisateur.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-3 sm:space-y-2 dark:text-zinc-400 text-gray-700">
                <p>
                    Actuellement en troisième année en <span className="bg-gray-100  border border-gray-300 px-2 py-1 inline-flex items-center   transition-colors dark:bg-[#27272a]  dark:border-gray-700"
                    >BUT MMI
                    </span> et futur étudiant en <span className="bg-gray-100 border border-gray-300 px-2 py-1 inline-flex items-center   transition-colors dark:bg-[#27272a]  dark:border-gray-700"
                    >MASTER
                    </span> à <span className="bg-gray-100 border border-gray-300 px-2 py-1 inline-flex items-center   transition-colors dark:bg-[#27272a]  dark:border-gray-700"
                    >Ynov Campus
                    </span>
                </p>
            </div>
        </section>
    )

}

export default Bio