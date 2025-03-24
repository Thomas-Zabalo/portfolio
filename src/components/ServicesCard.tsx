import React from "react";
import { TECH_CATEGORIES } from "@/utils/constants";

interface ServicesCardProps {
    title: string;
    paragraphe: string;
    category: keyof typeof TECH_CATEGORIES;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, paragraphe, category }) => {
    const techLinks = TECH_CATEGORIES[category];

    return (
        <div className="bg-bg-subtle border border-border py-2 px-3">
            <h3 className="text-lg font-semibold text-text">{title}</h3>
            <p className="mt-1 mb-4">{paragraphe}</p>

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
    );
};

export default ServicesCard;
