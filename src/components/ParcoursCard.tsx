import React from 'react';
import Image from 'next/image'

interface ParcoursCard {
    name: string;
    description: string;
    localisation: string;
    url: string;
    date: string;
    image: string;
    niveau: string;
}

const ParcoursCard: React.FC<ParcoursCard> = ({ name, description, localisation, url, date, image, niveau }) => {

    return (
        <div className="relative bg-bg border border-border aspect-video">
            <Image
                src={image}
                alt={`Image réprésentant ${name}`}
                width="576" height="302" loading="lazy" decoding="async" className="object-cover object-center" />
            <div className="absolute top-0 bg-bg-subtle px-2 py-1 text-sm flex items-center justify-between border-r border-b border-border bg-white">
                {date}
            </div>
            <div className="bg-bg-subtle p-2 border-t border-border">
                <div className="flex items-center justify-between">
                    <div className="text-text font-semibold">{name}</div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                        <a href={url} target="_blank" className="underline hover:text-text transition-colors"> {localisation} </a>
                    </div>
                </div>
                <div className="mt-3">
                    <p>{description}</p>
                </div>
                {niveau && (
                    <div className="flex flex-wrap mt-2">
                        <div className='bg-bg border align-middle border-border px-1.5 py-0.5 select-none inline-flex items-center tech-pill hover:text-text transition-colors underline-offset-2'>
                            <span className="leading-5">{niveau}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ParcoursCard;
