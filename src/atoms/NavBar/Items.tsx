'use client'
import React, { useEffect, useState } from 'react'
import localFont from 'next/font/local'

const Neue = localFont({ src: '../../../public/fonts/NHaasGroteskDSPro.otf' })

interface ItemsProps {
    value: string;
}

const Items: React.FC<ItemsProps> = ({ value }) => {

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

    return <div className={`${Neue.className} transition-colors duration-800 ease-in-out ${theme === "dark" ? "text-black" : "text-white"} pr-4`}>{value}</div>;
};

export default Items;
