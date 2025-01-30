import React from 'react';
import localFont from 'next/font/local'

const Neue = localFont({ src: '../../public/fonts/NHaasGroteskDSPro.otf' })

interface ItemsProps {
    value: string;
}

const Items: React.FC<ItemsProps> = ({ value }) => {
    return <div className={Neue.className}>{value}</div>;
};

export default Items;
