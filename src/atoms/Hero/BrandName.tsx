import React from 'react'
import localFont from 'next/font/local';

const Druk = localFont({ src: '../../../public/fonts/DrukTextWide-Super.otf' });


interface NameProps {

}

const BrandName: React.FC<NameProps> = () => {
    return (
        <>
            <div id='BrandName'>
                <h1 className={`${Druk.className} text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[146px] text-white`}>AKITOMO</h1>
            </div>
        </>
    )
}

export default BrandName