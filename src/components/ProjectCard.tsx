import React from 'react';
import Image from 'next/image';
import { PROJECTS } from '@/utils/constants';
import Link from 'next/link';

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  date: string;
  image: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, url, date, image, slug }) => {

  return (
    <Link href={`/projects/${slug}`}>
      <div className="relative bg-white border border-gray-300 dark:border-zinc-700 aspect-video">
        <Image
          src={image}
          alt={`Image représentant ${name}`}
          width={576}
          height={302}
          loading="lazy"
          decoding="async"
          className="object-cover object-center"
        />
        <div className="absolute top-0 bg-gray-100 dark:bg-[#27272a] px-2 py-1 text-sm border-r border-b border-gray-300 dark:border-gray-700">
          {date}
        </div>
        <div className="bg-gray-100 dark:bg-[#27272a] p-2 border-t border-gray-300 dark:border-zinc-700">
          <div className="flex items-center justify-between">
            <div className="text-gray-900 dark:text-gray-100 font-semibold">{name}</div>
          </div>
          <div className="mt-3 text-gray-700 dark:text-gray-400">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
