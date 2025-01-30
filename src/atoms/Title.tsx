import React from 'react';
import localFont from 'next/font/local';

const Druk = localFont({ src: '../../public/fonts/DrukTextWide-Super.otf' });

interface TitleProps {
    value: string;
}

const Title: React.FC<TitleProps> = ({ value }) => {
    return (
        <>
            <div className={Druk.className}>
                <h2 className="text-8xl">{value}
                    <span className="bg-[#D6FA6E]">
                        <span>ZOKU</span>
                    </span>
                </h2>
            </div>
        </>
    )
};

export default Title;
