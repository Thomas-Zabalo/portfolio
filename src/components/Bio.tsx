import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function Bio() {

    return (
        <section className='flex items-center flex-row justify-center w-full flex-none h-min overflow-hidden'>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(90deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Bio</h6>
                        </div>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>01/05</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center text-center gap-10 pt-32 pb-36 px-8 lg:w-[84%] w-full border-[#e40038] lg:border-l-2 lg:border-r-2 border-t-2'>
                <div className='flex justify-between w-[80%]'>
                    <div>
                        <div>
                            <h3 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Nom</h3>
                        </div>
                        <div>
                            <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}> ZABALO</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Prenom</h3>
                        </div>
                        <div>
                            <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>THOMAS</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Age</h3>
                        </div>
                        <div>
                            <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>20</h2>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between w-[80%]'>
                    <div>
                        <div>
                            <h3 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Nom</h3>
                        </div>
                        <div>
                            <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>THOMAS ZABALO</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Nom</h3>
                        </div>
                        <div>
                            <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>THOMAS ZABALO</h2>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Nom</h3>
                        </div>
                        <div>
                            <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>THOMAS ZABALO</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>01/05</h6>
                        </div>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Bio</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Bio