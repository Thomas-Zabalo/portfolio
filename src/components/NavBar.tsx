import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <header className="px-4 mx-auto max-w-xl flex items-center justify-between w-full py-2">
            <Link href="/" className="text-text hover:text-text-subtle transition-colors">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 339.14 342.6"
                    className="w-6 h-6 fill-black dark:fill-white"
                    aria-label="Home"
                >
                    <path d="m110.18,140.04L5.91,35.13C-6.74,22.41,2.25.74,20.19.7L316.5,0c19.93-.45,30.21,23.64,16.11,37.72L74.44,295.53c-5.17,5.3-1.43,14.21,5.97,14.23l171.6.47c9.83.03,14.58-12.04,7.37-18.72l-38.27-35.44c-14.54-13.46-14.97-36.31-.97-50.32h0s104.23,105.28,104.23,105.28c11.59,11.7,3.3,31.57-13.17,31.57H26.57c-15.44,0-23.36-18.49-12.71-29.67L275.12,48.94c4.94-4.99,1.43-13.47-5.6-13.51l-191.37-.99c-11.18.02-16.45,13.83-8.12,21.29l38.38,34.38c13.95,12.5,15.43,33.91,3.18,48.08-.89,1.03-1.41,1.7-1.41,1.85Z" />
                </svg>
                <span className="sr-only">Acceuil</span>
            </Link>
            <div className="flex space-x-2">
                <Link href="/projects" className="bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] py-1.5 px-3 border border-gray-300 dark:border-zinc-700">
                    Projets
                </Link>
                <Link href="/#contact" className="bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] py-1.5 px-3 border border-gray-300 dark:border-zinc-700">
                    Contact
                </Link>
            </div>
        </header>
    );
}

export default NavBar;
