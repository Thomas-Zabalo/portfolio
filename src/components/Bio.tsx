import React from 'react'
import localFont from 'next/font/local';
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });

function Bio() {

    return (
        <section className='hidden md:flex items-center flex-row justify-center w-full flex-none h-min overflow-hidden' id='propos'>

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

            <div className='flex flex-col  justify-between items-center text-center gap-10 pt-32 pb-36 px-8 lg:w-[84%] w-full border-[#e40038] lg:border-l-2 lg:border-r-2 border-t-2'>
                <div className="flex justify-around w-full items-center">
                    <div className={`${PP.className} text-[#e40038] flex flex-col gap-10`}  >
                        <div className="" >
                            <div className="" >
                                <h6 className="text-xl" >Nom</h6>
                            </div>
                            <div className="text-3xl">
                                <h5 className="">ZABALO</h5>
                            </div>
                        </div>
                        <div className="">
                            <div className="text-xl">
                                <h6 className="">Age</h6>
                            </div>
                            <div className="">
                                <div className="" >
                                    <h5 className="text-3xl" >20 ans</h5>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h6 className="text-xl">Lieux</h6>
                            </div>
                            <div className="" >
                                <h5 className="text-3xl">France</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`${PP.className} text-[#e40038] flex flex-col gap-10`}  >
                        <div className="" >
                            <div className="" >
                                <h6 className="text-xl">Prenom</h6>
                            </div>
                            <div className="" >
                                <h5 className="text-3xl">Thomas</h5>
                            </div>
                        </div>
                        <div className="" >
                            <div className="">
                                <h6 className="text-xl">Spécialité</h6>
                            </div>
                            <div className="">
                                <h5 className="text-3xl">Développement Front-end</h5>
                            </div>
                        </div>
                        <div className="">
                            <div className="" >
                                <h6 className="text-xl" >Style</h6>
                            </div>
                            <div className="">
                                <h5 className="text-3xl" >Minimaliste & Moderne</h5>
                            </div>
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