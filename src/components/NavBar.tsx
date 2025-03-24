import React from 'react'
import Link from 'next/link';


function NavBar() {
    return (
        <header id="header" className='fixed top-0 w-full z-50 py-8 px-8 bg-[#faf3e9] border-b-2 border-[#e40038]'>
            <div id='akitomo-navbar' className='flex items-center justify-between w-full'>
                {/* Logo à gauche */}
                <div id='BrandName' className='flex justify-start md:w-[10%]'>
                    <h1 className={`text-[#e40038]`}>
                        <Link href="/">AKITOMO</Link>
                    </h1>
                </div>

                {/* Menu au centre */}
                <div className="flex-1 flex justify-center md:w-[80%]">
                    <nav>
                        <ul className='md:flex hidden space-x-4'>
                            <li className={` text-[#e40038]`}>
                                <Link href="/">Projets</Link>
                            </li>
                            <li className={` text-[#e40038]`}>
                                <Link href="/#contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar
