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
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>biodata</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center text-center gap-10 pt-32 pb-36 px-8 lg:w-[84%] w-full border-[#e40038] lg:border-l-2 lg:border-r-2 border-t-2'>
                <div>
                    <h2 className={`${PP.className} text-4xl leading-[136%] text-[#e40038]`}>THOMAS ZABALO</h2>
                </div>
                <div className='flex flex-col justify-start flex-shrink-0 max-w-[500px] min-w-[300px] relative w-full text-balance'>
                    <p className={`${anton.className} text-lg leading-[136%] text-[#e40038]`}>He is said to be a tall, thin, and scantily bearded man. He is highly ambitious which made him ruthless but he is also said to be a realistic leader, admired for his ability to make difficult decisions.</p>
                </div>
            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>biodata</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default Bio