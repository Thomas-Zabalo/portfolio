'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface IconProps {
    href: string;
    src: string;
    alt: string;
}

const Icon: React.FC<IconProps> = ({ href, src, alt }) => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector("[data-header = dark]");
            if (section) {
                const rect = section.getBoundingClientRect();
                const newTheme = rect.top <= 0 && rect.bottom >= 0 ? section.getAttribute("data-header") || "dark" : "light";
                setTheme(newTheme);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Vérifier à l'initialisation

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <div>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className={`transition-colors duration-800 ease-in-out ${theme === "dark" ? "invert" : "invert-[0]"}`}
                        aria-hidden
                        src={src}
                        alt={alt}
                        width={16}
                        height={16}
                    />
                </a>
            </div>
        </>
    )
}

export default Icon