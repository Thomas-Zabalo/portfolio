'use client'
import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';

const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function NavBar() {

    return (
        <header id="header" className='fixed top-0 w-full z-50 py-8 px-8 bg-[#faf3e9] border-b-2 border-[#e40038]'>
            <div id='akitomo-navbar' className='flex items-center justify-between'>
                <div>
                    <div id='BrandName'>
                        <h1 className={`${PP.className}  text-[#e40038] `}> <Link href="/">AKITOMO</Link></h1>
                    </div>
                </div>
                <div className='flex'>
                    <nav>
                        <ul className='md:flex hidden'>
                            <li className={`${anton.className} text-[#e40038] pr-4`}>
                                <Link href="/">ACCUEIL</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038] pr-4`}>
                                <Link href="/#propos">A PROPOS</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038] pr-4`}>
                                <Link href="/#projets">PROJETS</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038] pr-4`}>
                                <Link href="/#art">ART</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038] pr-4`}>
                                <Link href="/#contact">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul className='flex'>
                        <li className='pr-1'>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image
                                    aria-hidden
                                    src="/discord.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </a>
                        </li>
                        <li className='pr-1'>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image

                                    aria-hidden
                                    src="/instagram.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </a>
                        </li>
                        <li className='pr-1'>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image

                                    aria-hidden
                                    src="/linkedin.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </a>
                        </li>
                        <li className='pr-1'>
                            <a
                                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                                href=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Image

                                    aria-hidden
                                    src="/github.svg"
                                    alt=""
                                    width={16}
                                    height={16}
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default NavBar