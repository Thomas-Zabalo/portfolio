import React from 'react';
import { PROJECTS } from "@/utils/constants";

function ProjectCard() {
  return (
    <div className="relative bg-bg border border-border aspect-video">
      {PROJECTS.map((project, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-lg">
          <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-xl font-bold mt-2">{project.name}</h3>
          <p className="text-gray-600">{project.description}</p>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            Voir sur GitHub
          </a>
          <p className="text-sm text-gray-500 mt-2">{project.date}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
