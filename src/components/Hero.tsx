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
        <section>
            <div className="">
                <div className="overflow-hidden">
                    {/* <div className="overflow-hidden absolute bottom-0 left-0 z-0" style={{
                        transform: `rotate(${Math.min(scrollY * -0.1, 200)}deg)`,
                        transition: 'transform 0.3s ease-out',
                        }}>
                        <div className="overflow-hidden">
                        <img width="" height="" alt="" src="/eventail.png" style={{transform: "scaleX(-1)"}} />
                        </div>
                        </div>
                        
                        <div className="overflow-hidden absolute bottom-0 right-0 z-0" style={{
                            transform: `rotate(${Math.min(scrollY * 0.1, 200)}deg)`,
                            transition: 'transform 0.3s ease-out',
                            }}>
                            <div className="">
                            <img width="" height="" alt="" src="/eventail.png" />
                            </div>
                            </div> */}

                    <div className='z-10'>
                        <div
                            className="items-center flex h-dvh"
                            style={{
                                transform: `translateY(${Math.min(scrollY * 0.7, 200)}px)`,
                                transition: 'transform 0.3s ease-out',
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


                </div>
            </div>
        </section>
    )
}

export default Hero