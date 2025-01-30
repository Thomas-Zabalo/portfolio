import React from 'react'
import Image from 'next/image'

interface NameProps {
    sizeW: number;
    sizeH: number;
    color: string;
}

const Name: React.FC<NameProps> = ({ sizeH, sizeW, color }) => {
    return (
        <>
            <div>
                <Image
                    aria-hidden="true"
                    src="/akitomo.svg"
                    alt="Arrow icon"
                    width={sizeH}
                    height={sizeW}
                    color={color}
                /></div>
        </>
    )
}

export default Name