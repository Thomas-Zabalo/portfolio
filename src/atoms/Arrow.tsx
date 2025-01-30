import Image from 'next/image';
import React from 'react';

interface ArrowProps {
}

const Arrow: React.FC<ArrowProps> = () => {
    return (
        <>
            <div>
                <Image
                    aria-hidden="true"
                    src="/arrow.svg"
                    alt="Arrow icon"
                    width={16}
                    height={16}
                />
            </div>
        </>
    );
};

export default Arrow;
