import React from 'react';
import localFont from 'next/font/local'

const Berthold = localFont({ src: '../../public/fonts/BertholdAkzidenzGroteskBEBoldExtended.ttf' })

interface ParagraphProps {
    value: string;
}

const Paragraphe: React.FC<ParagraphProps> = ({ value }) => {
    return <div className={Berthold.className}><p className=''>{value}</p></div>;
};

export default Paragraphe;
