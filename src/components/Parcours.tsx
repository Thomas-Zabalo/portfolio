import React from 'react'
import ParcoursCard from './ParcoursCard'
import Link from 'next/link'


function Parcours() {
    return (
        <section id="parcours" className="mx-auto px-4 max-w-xl py-16">
            <div className="flex justify-between items-center">
                <h2 className="text-text font-semibold text-lg">
                    <Link href="/#parcours" className="group flex items-center space-x-2">
                        <span> Parcours </span>
                        <span className="group-hover:opacity-100 opacity-0 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path> </svg>
                        </span>
                    </Link>
                </h2>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
                <ul className="timeline timeline-vertical">
                    <li>
                        <div className="timeline-start timeline-box">
                            <span className='text-gray-900 dark:text-gray-100 font-semibold'>
                                Lycée Antoine Bourdelle - Montauban
                            </span>
                            <br />
                            <span className='flex justify-end text-gray-700 dark:text-gray-400'>
                                2019-07-01 - 2022-07-01
                            </span>
                        </div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-primary" />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-primary h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end timeline-box">
                            <span className='text-gray-900 dark:text-gray-100 font-semibold'>
                                IUT Paul Sabatier - Castres
                            </span>
                            <br />
                            <span className='flex justify-end text-gray-700 dark:text-gray-400'>
                                2022-09-01 - now
                            </span></div>
                        <hr className="bg-primary" />
                    </li>
                    <li>
                        <hr className="bg-gray-300 dark:bg-zinc-700" />
                        <div className="timeline-start timeline-box">
                            <span className='text-gray-900 dark:text-gray-100 font-semibold'>
                                YNOV Campus - Toulouse
                            </span>
                            <br />
                            <span className='flex justify-end text-gray-700 dark:text-gray-400'>
                                2025-09-01 - 2027-07-01
                            </span></div>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-gray-300 dark:text-zinc-700 h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Parcours