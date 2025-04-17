import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Bio() {

    return (
        <section className="mx-auto px-4 max-w-xl py-16 pt-0 sm:pt-8">
            <div className="flex max-sm:flex-col gap-4">
                <Image src="/Moi.jpg" alt="Photo de l'auteur du site - Thomas ZABALO" loading="eager" width="128" height="128" decoding="async" className="h-24 w-24 sm:h-32 sm:w-32 rounded shrink-0" />
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-text">Thomas Zabalo - Développeur Web Fullstack</h1>
                    </div>
                    <div className='mt-4'>
                        <div className="flex space-x-2">
                            <Link
                                href="https://github.com/Thomas-Zabalo"
                                className="text-gray-900 dark:text-white bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/thomas-zabalo-62627a256/"
                                className="text-gray-900 dark:text-white bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                <svg className="w-4 h-4"
                                    viewBox="0 0 128 128"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor">
                                    <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.instagram.com/thomas.zab/"
                                className="text-gray-900 dark:text-white bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                                <svg className="w-4 h-4" viewBox="0 0 170 170" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                >
                                    <g>
                                        <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
                          c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
                          c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
                          c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                                        <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
                          C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
                          c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                                        <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
                          c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
                          C135.661,29.421,132.821,28.251,129.921,28.251z" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-3 sm:space-y-2 dark:text-zinc-400 text-gray-700">
                <p>
                    Je suis un développeur Full Stack passionné, capable d’intervenir aussi bien sur la conception d’interfaces soignées et intuitives que sur la logique métier côté serveur. J’aime créer des expériences utilisateur fluides tout en garantissant la performance, la maintenabilité et la robustesse du code.
                </p>
            </div>
        </section >
    )

}

export default Bio
