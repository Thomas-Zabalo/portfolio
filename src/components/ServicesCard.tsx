import React from "react";
import { TECH_CATEGORIES } from "@/utils/constants";
import Link from "next/link";

interface ServicesCardProps {
    title: string;
    paragraphe: string;
    category: keyof typeof TECH_CATEGORIES;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ title, paragraphe, category }) => {
    const techLinks = TECH_CATEGORIES[category];

    return (
        <div className="bg-gray-100 border border-gray-300 py-2 px-3 dark:bg-[#27272a] dark:border-zinc-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
            <p className="mt-1 mb-4 text-gray-700 dark:text-gray-400">{paragraphe}</p>

            <div className="flex flex-wrap mt-2">
                {techLinks.map((tech) => (
                    <Link
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        className="bg-white border border-gray-300 px-2 py-1 inline-flex items-center hover:underline hover:text-gray-900 transition-colors dark:bg-[#18181b] dark:hover:text-white dark:border-gray-700"
                    >
                        <img src={tech.svg} alt={tech.name} className="mr-1 h-4 w-4" />
                        <span className="leading-5">{tech.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesCard;
