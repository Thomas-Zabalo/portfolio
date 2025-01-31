'use client'
import BrandName from '@/atoms/Hero/BrandName';
import SubName from '@/atoms/Hero/SubName';
import React, { useState, useEffect } from 'react';

const SubTitle: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div>
                <div
                    className="items-center flex h-dvh"
                    style={{
                        transform: `translateY(${Math.min(scrollY * 0.7, 600)}px)`, // Calcul du déplacement
                        transition: 'transform 0.3s ease-out', // Transition fluide pour le mouvement
                    }}
                >
                    <div className="relative text-center w-full items-center justify-center flex">
                        <div>
                            <BrandName />
                            <SubName value={"Portfolio"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubTitle;
