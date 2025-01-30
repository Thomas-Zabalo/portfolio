import React from 'react';
import localFont from 'next/font/local';

const Druk = localFont({ src: '../../public/fonts/DrukTextWide-Super.otf' });

interface TitleProps {
    value: string;
    subvalue: string;
    highlight: string;
}

const Title: React.FC<TitleProps> = ({ value, subvalue, highlight }) => {
    return (
        <>
            <div className={`${Druk.className} text-center`}>
                <h2 className="text-8xl">{value}
                    {subvalue && (
                        <>
                            <br />
                            {subvalue}
                        </>
                    )}
                    <span className="inline-flex ml-3 relative -rotate-6 highlight">
                        <span className='relative'>{highlight}</span>
                    </span>
                </h2>
            </div>
        </>
    )
};

export default Title;
