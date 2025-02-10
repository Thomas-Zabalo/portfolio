import React from 'react'
import localFont from 'next/font/local';
import PostCard from './PostCard';
import Link from 'next/link';
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });

function Project() {
    return (
        <section className='flex items-center flex-row justify-center' id='projets'>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="flex gap-40" style={{ transform: "rotate(90deg)", opacity: 1 }}>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Projets</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>03/05</h6>
                            </div>
                        </div>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Projets</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>03/05</h6>
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
                        <h2 className={`${PP.className} flex justify-center xl:text-[260px] lg:text-[180px] md:text-9xl text-5xl leading-[96%] text-[#e40038]`}>PROJETS</h2>
                    </div>
                    <div className='flex flex-col justify-start flex-shrink-0 max-w-[500px] min-w-[300px] relative w-full text-balance'>
                        <Link href={`/projects`} className='transition-all duration-700'>
                            <button className="px-6 py-2 bg-[#e40038] text-[#faf3e9]  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                Voir tous les projets
                            </button>

                        </Link>
                    </div>
                </section>

                <PostCard />

            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative">
                    <div className="gap-40 flex" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>03/05</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Projets</h6>
                            </div>
                        </div>
                        <div className='gap-40 flex'>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>03/05</h6>
                            </div>
                            <div className="">
                                <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Projets</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project