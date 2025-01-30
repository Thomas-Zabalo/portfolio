import Items from '@/atoms/Items';
import Title from '@/atoms/Title';
import Paragraphe from '@/atoms/Paragraph';
import React from 'react';

const SubTitle: React.FC = () => {
    return (
        <>
            <Items value="Bonjour" />
            <Paragraphe value="Bonjour" />
            <Title value="Bonjour" />
        </>
    )
};

export default SubTitle;
