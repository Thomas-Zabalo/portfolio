// src/app/blog/layout.tsx
import NavBar from '@/components/NavBar';
import React from 'react';


const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            <main className='py-10'>
                <div className='lg:px-32'>
                    {children}
                </div>
            </main>
        </>
    );
};

export default BlogLayout;
