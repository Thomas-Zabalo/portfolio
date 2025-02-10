// src/app/blog/layout.tsx
import NavBar from '@/components/NavBar';
import React from 'react';
import localFont from 'next/font/local';
const PP = localFont({ src: '../../fonts/PPNikkeiMaru-Ultrabold.otf' });


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
                <NavBar />
                <main className='py-10'>
                    <div className='flex flex-col items-center text-center pt-32 pb-36 px-8 w-full border-[#e40038]'>
                        <h1 className={`${PP.className} md:text-6xl text-3xl text-[#e40038]`}>Projets</h1>
                    </div>

                    <div className='px-32'>
                        {children}
                    </div>
                </main>
        </>
    );
};

export default BlogLayout;
