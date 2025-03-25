'use client'
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
        </footer>
    );
}

export default Footer;
