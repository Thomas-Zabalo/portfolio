import React from 'react'
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon, FlagIcon } from '@heroicons/react/16/solid'

const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

function NavBar() {
    return (
        <header id="header" className='fixed top-0 w-full z-50 py-8 px-8 bg-[#faf3e9] border-b-2 border-[#e40038]'>
            <div id='akitomo-navbar' className='flex items-center justify-between w-full'>
                {/* Logo à gauche */}
                <div id='BrandName' className='flex justify-start md:w-[10%]'>
                    <h1 className={`${PP.className} text-[#e40038]`}>
                        <Link href="/">AKITOMO</Link>
                    </h1>
                </div>

                {/* Menu au centre */}
                <div className="flex-1 flex justify-center md:w-[80%]">
                    <nav>
                        <ul className='md:flex hidden space-x-4'>
                            <li className={`${anton.className} text-[#e40038]`}>
                                <Link href="/">ACCUEIL</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038]`}>
                                <Link href="/#propos">A PROPOS</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038]`}>
                                <Link href="/#projets">PROJETS</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038]`}>
                                <Link href="/#art">ART</Link>
                            </li>
                            <li className={`${anton.className} text-[#e40038]`}>
                                <Link href="/#contact">CONTACT</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Icônes à droite */}
                <div className='flex items-center space-x-6 md:w-[10%]'>
                    <ul className='flex'>
                        <li className='pr-1'>
                            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://discordapp.com/users/rubinoki" target="_blank" rel="noopener noreferrer">
                                <Image aria-hidden src="/discord.svg" alt="" width={16} height={16} />
                            </a>
                        </li>
                        <li className='pr-1'>
                            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.instagram.com/thomas.zab/" target="_blank" rel="noopener noreferrer">
                                <Image aria-hidden src="/instagram.svg" alt="" width={16} height={16} />
                            </a>
                        </li>
                        <li className='pr-1'>
                            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.linkedin.com/in/thomas-zabalo-62627a256/" target="_blank" rel="noopener noreferrer">
                                <Image aria-hidden src="/linkedin.svg" alt="" width={16} height={16} />
                            </a>
                        </li>
                        <li className='pr-1'>
                            <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/Thomas-Zabalo" target="_blank" rel="noopener noreferrer">
                                <Image aria-hidden src="/github.svg" alt="" width={16} height={16} />
                            </a>
                        </li>
                    </ul>
                    <div className="top-24">
                        <Menu>
                            <MenuButton className={`${anton.className} inline-flex items-center gap-2 rounded-md bg-[#e40038] py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-[#e40039cf] data-[open]:bg-[#e40039cf] data-[focus]:outline-1 data-[focus]:outline-white`}>
                                FR
                                <ChevronDownIcon className="size-4 fill-white/60" />
                            </MenuButton>

                            <MenuItems transition anchor="bottom end" className="z-[52] w-52 origin-top-right rounded-xl border border-[#e40038]/5 bg-[#e40038] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                <MenuItem>
                                    <button className={`${anton.className} group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10`}>
                                        <FlagIcon className="size-4 fill-white/50" />
                                        EN
                                    </button>
                                </MenuItem>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
