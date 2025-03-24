import React from 'react'

function Bio() {

    return (
        <section className="mx-auto px-4 max-w-xl py-16 pt-0 sm:pt-8">
            <div className="flex max-sm:flex-col gap-4">
                <img src="./Moi.webp" alt="" loading="eager" width="128" height="128" decoding="async" className="h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-bg-subtle border border-border shrink-0" />
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-text">Thomas Zabalo</h1>
                    </div>
                    <div className="mt-2 space-y-3 sm:space-y-2">
                        <p>Développeur Full-Stack.</p>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Bio