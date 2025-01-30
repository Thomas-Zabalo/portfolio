import Image from 'next/image';
import React from 'react';

const SubTitle: React.FC = () => {
    return (
        <>
            <div>
                <div className="items-center flex h-dvh" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div className="relative text-center w-full items-center justify-center flex">
                        <div>
                            <Image
                                alt='Akitomo logo'
                                src={'/AKITOMO.png'}
                                width={2880}
                                height={1080}
                                className='block h-auto w-full max-w-dvw'
                            />
                            <h1 className="absolute bottom-10 text-white left-0 right-0 text-center uppercase font-bold text-[0.75rem] leading-[0.875rem] tracking-[-0.02em]">
                                Lorem Ipsum
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SubTitle;
