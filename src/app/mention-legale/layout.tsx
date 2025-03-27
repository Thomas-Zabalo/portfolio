// src/app/blog/layout.tsx
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer'
import React from 'react';


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            <main className='mx-auto px-4 max-w-xl py-16 '>
                <div>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default BlogLayout;
