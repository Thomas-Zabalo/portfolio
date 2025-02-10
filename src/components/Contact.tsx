'use client'
import React from 'react'
import localFont from 'next/font/local';
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });

function Contact() {
    return (
        <section className='flex items-center flex-row justify-center' id='contact'>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(90deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Contact</h6>
                        </div>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>05/05</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center text-start gap-10 pt-32 pb-36 px-8 lg:w-[84%] w-full border-[#e40038] lg:border-l-2 lg:border-r-2 border-t-2'>
                <div className="lg:w-1/2 w-full ">
                    <div className="mx-auto max-w-2xl text-center">
                        <div>
                            <h4 className={`${PP.className} md:text-6xl text-3xl leading-[136%] text-[#e40038]`}>CONTACT</h4>
                        </div>
                    </div>
                    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20 text-[#e40038]">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="first-name" className="block text-sm/6 font-semibold ">
                                    Nom
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#e40038]"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm/6 font-semibold ">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#e40038]"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm/6 font-semibold ">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#e40038]"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-[#e40038] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#e40039e0] focus-visible:outline-2"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>05/05</h6>
                        </div>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Contact</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact