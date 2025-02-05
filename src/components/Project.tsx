import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function Project() {
    return (
        <section data-header='dark' className='flex items-center flex-row justify-center'>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-8" style={{ transform: "rotate(90deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>biodata</h6>
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
                        <p className={`${anton.className} text-lg leading-[136%] text-[#e40038]`}>He is said to be a tall, thin, and scantily bearded man. He is highly ambitious which made him ruthless but he is also said to be a realistic leader, admired for his ability to make difficult decisions.</p>
                    </div>
                </section>

                <section className='w-full'>
                    <div className='flex flex-col'>
                        {/* Projet 1 */}
                        <div className='contents'>
                            <div className='w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 border-b-2 border-[#e40038]'>
                                <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                                    <div>
                                        <div>
                                            <div className={`${PP.className}  md:text-5xl text-3xl`}>
                                                1500
                                            </div>
                                            <div className={`${anton.className} md:text-2xl text-xl`}>
                                                FJRFRJFRKF
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='contents'>
                            <div className='w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 border-b-2 border-[#e40038]'>
                                <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                                    <div>
                                        <div>
                                            <div className={`${PP.className}  md:text-5xl text-3xl`}>
                                                1500
                                            </div>
                                            <div className={`${anton.className} md:text-2xl text-xl`}>
                                                FJRFRJFRKF
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contents'>
                            <div className='w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 border-b-2 border-[#e40038]'>
                                <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                                    <div>
                                        <div>
                                            <div className={`${PP.className}  md:text-5xl text-3xl`}>
                                                1500
                                            </div>
                                            <div className={`${anton.className} md:text-2xl text-xl`}>
                                                FJRFRJFRKF
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contents'>
                            <div className='w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 border-b-2 border-[#e40038]'>
                                <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                                    <div>
                                        <div>
                                            <div className={`${PP.className}  md:text-5xl text-3xl`}>
                                                1500
                                            </div>
                                            <div className={`${anton.className} md:text-2xl text-xl`}>
                                                FJRFRJFRKF
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='contents'>
                            <div className='w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 border-b-2 border-[#e40038]'>
                                <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                                    <div>
                                        <div>
                                            <div className={`${PP.className}  md:text-5xl text-3xl`}>
                                                1500
                                            </div>
                                            <div className={`${anton.className} md:text-2xl text-xl`}>
                                                FJRFRJFRKF
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-8" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>biodata</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Project