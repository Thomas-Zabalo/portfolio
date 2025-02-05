'use client'
import React, { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'

const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section data-header="light">
            <div className="">
                <div className="">
                    <div>
                        <div
                            className="items-center flex h-dvh"
                            style={{
                                transform: `translateY(${Math.min(scrollY * 0.7, 200)}px)`, // Calcul du déplacement
                                transition: 'transform 0.3s ease-out', // Transition fluide pour le mouvement
                            }}
                        >
                            <div className="relative text-center w-full items-center justify-center flex">
                                <div>
                                    <div id='BrandName'>
                                        <h1 className={`${PP.className} text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[146px] text-[#e40038]`}>AKITOMO</h1>
                                    </div>
                                    <div className={`${anton.className} py-10 text-2xl text-[#e40038]`}>Portfolio</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="heading__media" style={{ transform: "translate(-50%, 0%);" }}>
                        <div className="heading__media__offset">
                            <img width="2880" height="3770" alt="Two guys leaning against a vending machine, containing colourful cans." src="/city.webp" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero