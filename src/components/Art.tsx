import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
import Image from 'next/image';
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function Art() {

    return (
        <section className='flex items-center flex-row justify-center' id='art'>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-80 flex" style={{ transform: "rotate(90deg)", opacity: 1 }}>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Art</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>04/05</h6>
                            </div>
                        </div>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Art</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>04/05</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:w-[84%] w-full border-[#e40038] lg:border-l-2 lg:border-r-2 border-t-2'>
                <section className='flex flex-col text-center items-center justify-center gap-10 pt-32 pb-36 px-8'>
                    <div>
                        <h4 className={`${PP.className} md:text-6xl text-3xl leading-[136%] text-[#e40038]`}>AKITOMO</h4>
                    </div>
                    <div className='flex flex-col justify-start flex-shrink-0 max-w-[900px] min-w-[300px] relative w-full text-balance'>
                        <h2 className={`${PP.className} flex justify-center xl:text-[260px] lg:text-[180px] md:text-9xl text-5xl leading-[96%] text-[#e40038]`}>ARTS</h2>
                    </div>
                    <div className='flex flex-col justify-start flex-shrink-0 max-w-[500px] min-w-[300px] relative w-full text-balance'>
                        <p className={`${anton.className} text-lg leading-[136%] text-[#e40038]`}>Quelques créations, photos que j'ai pu réaliser</p>
                    </div>
                </section>

                <section className='w-full px-10 pb-10'>

                    <div className="grid w-full overflow-hidden relative p-0 flex-none justify-center ">
                        <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-2 auto-rows-fr min-w-[50px] gap-2">

                            {/* Élément principal prenant 2 colonnes et 2 lignes */}
                            <div className="col-span-1 row-span-2 bg-[#fffdfb] hover:invert transition duration-300 ease-in-out rounded p-3">
                                <div className='flex justify-between'>
                                    <div>
                                        <p className={`${anton.className}`}>2024/10/18</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <p className={`${anton.className}`}>ID</p>
                                        <p className={`${anton.className}`}>001</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className='p-5'>
                                    <Image
                                        className='rounded-sm'
                                        src="/Johnny.jpg"
                                        alt="Image de Johnny Haliday"
                                        width={300}
                                        height={200}
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 row-span-2 bg-[#fffdfb] hover:invert transition duration-300 ease-in-out rounded p-3">
                                <div className='flex justify-between'>
                                    <div>
                                        <p className={`${anton.className}`}>2025/01/13</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <p className={`${anton.className}`}>ID</p>
                                        <p className={`${anton.className}`}>002</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className='p-5'>
                                    <Image
                                        className='rounded-sm'
                                        src="/Tower.jpg"
                                        alt="Image d' une tour de télécommunication"
                                        width={300}
                                        height={200} style={{ width: "auto", height: "auto" }}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 row-span-2 bg-[#fffdfb] hover:invert transition duration-300 ease-in-out rounded p-3">
                                <div className='flex justify-between'>
                                    <div>
                                        <p className={`${anton.className}`}>2025/01/23</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <p className={`${anton.className}`}>ID</p>
                                        <p className={`${anton.className}`}>003</p>
                                    </div>
                                </div>
                                <div aria-hidden="true" className='p-5'>
                                    <Image
                                        className='rounded-sm'
                                        src="/Red_House.jpg"
                                        alt="Image d'une maison rouge"
                                        width={300}
                                        height={200}
                                        style={{ width: "auto", height: "auto" }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-80 flex" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>04/05</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Art</h6>
                            </div>
                        </div>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>04/05</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Art</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Art