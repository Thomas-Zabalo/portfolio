'use client'
import BrandTitle from "@/molecules/Hero/BrandTitle"
import React, { useState, useEffect } from 'react';

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
            <div className="bg-[#5c97ce]">
                <div className="heading__content" style={{ backgroundImage: "url('/background.jpg')" }}            >
                    <BrandTitle />
                    <div className="heading__media" style={{ transform: "translate(-50%, 0%);" }}>
                        <div className="heading__media__offset">
                            <img width="2880" height="3770" alt="Two guys leaning against a vending machine, containing colourful cans." src="/city.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero