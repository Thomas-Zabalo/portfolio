import React from 'react'
import localFont from 'next/font/local';

const Neue = localFont({ src: '../../../public/fonts/NHaasGroteskDSPro.otf' });

interface SubNameProps {
    value: String;
}

const SubName: React.FC<SubNameProps> = ({ value }) => {
    return (
        <>
            <div className={`${Neue.className} py-10 text-2xl text-white`}>{value}</div>
        </>
    )
}

export default SubName