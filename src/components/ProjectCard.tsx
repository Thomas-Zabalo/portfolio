import React from 'react';
import Image from 'next/image'
import { PROJECTS } from '../utils/constants';

interface ProjectCard {
  name: string;
  description: string;
  url: string;
  date: string;
  image: string;
  category: keyof typeof PROJECTS;
}

const ProjectCard: React.FC<ProjectCard> = ({ name, description, url, date, image, category }) => {
  const techLinks = PROJECTS[category];
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
            <a href={url} target="_blank" className="underline hover:text-text transition-colors"> GITHUB </a>
          </div>
        </div>
        <div className="mt-3">
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap mt-2">
          {techLinks.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              className="bg-bg border align-middle border-border px-1.5 py-0.5 select-none inline-flex items-center tech-pill hover:underline hover:text-text transition-colors underline-offset-2"
            >
              <span className="mr-1 h-4 w-4"><img src={tech.svg} /></span>
              <span className="leading-5">{tech.name}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
