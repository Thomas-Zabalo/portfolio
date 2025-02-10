import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function About() {

    return (
        <section className='flex items-center flex-row justify-center w-full flex-none h-min overflow-hidden'>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(90deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Informations</h6>
                        </div>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>02/05</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center text-center gap-10 pt-32 pb-36 px-8 lg:w-[84%] w-full border-[#e40038] lg:border-l-2 lg:border-r-2 border-t-2'>
                <div className='flex flex-col justify-start flex-shrink-0 max-w-[900px] min-w-[300px] relative w-full text-balance'>
                    <h4 className={`${PP.className} md:text-5xl text-3xl leading-[96%] text-[#e40038]`}>Créer des expériences web captivantes, alliant technologie et design.</h4>
                </div>
                <div className='flex flex-col justify-start flex-shrink-0 max-w-[500px] min-w-[300px] relative w-full text-balance'>
                    <p className={`${anton.className} text-lg leading-[136%] text-[#e40038]`}>Je suis Thomas, développeur front-end et étudiant passionné par la conception d’interfaces modernes et interactives. Toujours en quête d’innovation, j’explore les technologies web pour proposer des expériences immersives et performantes.</p>
                </div>
            </div>

            <div className="self-stretch flex-none h-auto relative w-[8%] lg:block hidden lg:border-b-2 lg:border-[#e40038]" style={{ transform: "rotate(180deg)" }}>
                <div className="h-full w-full opacity-100 items-center flex  flex-col flex-nowrap gap-10 justify-center overflow-hidden p-0 relative" data-framer-name="Variant 1">
                    <div className="gap-40 flex" style={{ transform: "rotate(270deg)", opacity: 1 }}>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>02/05</h6>
                        </div>
                        <div className="">
                            <h6 className={`${PP.className} text-2xl leading-[136%] text-[#e40038]`}>Informations</h6>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default About