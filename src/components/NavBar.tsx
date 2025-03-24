import React from 'react'
import Link from 'next/link';


function NavBar() {
    return (
        <header class="px-4 mx-auto max-w-xl flex items-center justify-between w-full py-2">
            <a href="/" class="text-text hover:text-text-subtle transition-colors">

                <span class="sr-only">Home</span>
            </a>
            <div class="items-center flex space-x-2">
                <a href="/blog" class="bg-bg-subtle py-1.5 px-3 inline-flex items-center hover:bg-border transition-colors border border-border select-none">
                    Projets
                </a>
                <a href="/#contact" class="bg-bg-subtle py-1.5 px-3 inline-flex items-center hover:bg-border transition-colors border border-border select-none">
                    <span>Contact</span>
                </a>
            </div>
        </header>
    )
}

export default NavBar
