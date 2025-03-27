'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="mt-auto mx-auto px-4 max-w-xl py-4 w-full border-t border-border text-sm">
            <div className="flex max-sm:flex-col items-start sm:items-center justify-between gap-4">
                <span>© {year} - Thomas ZABALO</span>
                <div>Made with ❤️</div>
            </div>
            <div className="flex max-sm:flex-col items-start sm:items-center gap-4">
                <Link href="https://github.com/Thomas-Zabalo/portfolio-2025" className="flex justify-end items-center gap-1 underline">
                    Repository
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4"> <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path> </svg>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;
