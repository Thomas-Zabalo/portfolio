import type { Metadata } from "next";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer'
import React from 'react';

export const metadata: Metadata = {
    title: "Projet | Thomas Zabalo",
    description: "Découvrez mes projets en développement web.",
    keywords: ["Développement Web", "Next.js", "React", "Portfolio", "Thomas Zabalo"],
    openGraph: {
        title: "Projet | Thomas Zabalo",
        description: "Découvrez mes projets en développement web.",
        url: "https://thomas-zabalo.vercel.app/",
        siteName: "Thomas Zabalo",
        images: [
            {
                url: "/preview.jpeg",
                width: 1200,
                height: 630,
                alt: "Aperçu de mon portfolio",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico", 
        apple: "/apple-touch-icon.png", 
    },
};


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
