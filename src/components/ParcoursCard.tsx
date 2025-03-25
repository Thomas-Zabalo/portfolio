import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className="relative bg-white  border border-gray-300 dark:border-zinc-700 aspect-video">
            <Image
                src={image}
                alt={`Image réprésentant ${name}`}
                width="576" height="302" loading="lazy" decoding="async" 
                className="object-cover object-center" 
            />
            <div className="absolute top-0 bg-gray-100 dark:bg-[#27272a] px-2 py-1 text-sm flex items-center justify-between border-r border-b border-gray-300 dark:border-gray-700">
                {date}
            </div>
            <div className="bg-gray-100 dark:bg-[#27272a] p-2 border-t border-gray-300 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                    <div className="text-gray-900 dark:text-gray-100 font-semibold">{name}</div>
                    <div className="flex items-center justify-center space-x-2 text-sm">
                        <Link href={url} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700 dark:hover:dark:text-gray-400 transition-colors">{localisation}</Link>
                    </div>
                </div>
                <div className="mt-3 text-gray-700 dark:text-gray-400">
                    <p>{description}</p>
                </div>
                {niveau && (
                    <div className="flex flex-wrap mt-2">
                        <div className='bg-white dark:bg-[#18181b] border border-gray-300 dark:border-zinc-700 px-1.5 py-0.5 select-none inline-flex items-center'>
                            <span className="leading-5">{niveau}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ParcoursCard;