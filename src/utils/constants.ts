import { url } from "inspector";

export const TECH_CATEGORIES = {
    frontend: [
        {
            name: "Astro",
            url: "https://astro.build",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
        },
        {
            name: "React",
            url: "https://react.dev",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Vue",
            url: "https://vuejs.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
            name: "Next.js",
            url: "https://nextjs.org",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Nuxt",
            url: "https://nuxt.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
        },
        {
            name: "TypeScript",
            url: "https://www.typescriptlang.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "MDX",
            url: "https://mdxjs.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
        }
    ],
    backendcms: [
        {
            name: "Node.js",
            url: "https://nodejs.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "PHP",
            url: "https://www.php.net/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
            name: "WordPress",
            url: "https://wordpress.com/fr/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        },
        {
            name: "TYPO3",
            url: "https://typo3.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typo3/typo3-original.svg",
        },
    ],
    mobile: [
        {
            name: "React Native",
            url: "https://reactnative.dev/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Kotlin",
            url: "https://kotlinlang.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
        }
    ],
    uiux: [
        {
            name: "Figma",
            url: "https://www.figma.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
            name: "Tailwind",
            url: "https://tailwindcss.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Bootstrap",
            url: "https://getbootstrap.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
    ],
    devops: [
        {
            name: "Docker",
            url: "https://www.docker.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
            name: "GitHub",
            url: "https://github.com/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
    ],
    model: [
        {
            name: "Blender",
            url: "https://www.blender.org/",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
        },
        {
            name: "Unity",
            url: "https://unity.com/fr",
            svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
        }
    ]
};

export const PROJECTS = [
    {
        name: "Escape Lab",
        description: "Un jeu d'évasion en 1ère personne dans un laboratoire secret.",
        github: "https://github.com/user/escape-lab",
        date: "2025-03-24",
        image: "/images/escape-lab.png",
    },
    {
        name: "Akitomo",
        description: "Portfolio inspiré du Japon traditionnel et des CRT.",
        github: "https://github.com/user/akitomo",
        date: "2025-02-10",
        image: "/images/akitomo.png",
    },
];

export const PARCOURS = [
    {
        name: "Lycée technologique Antoine Bourdelle",
        localisation: "Montauban",
        date: "2019-07-01 - 2022-07-01",
        url: "https://www.lycee-bourdelle.fr/",
        image: "https://lh3.googleusercontent.com/p/AF1QipNAC9p1m_XBwkZ7WI2y8tX1esbl63G1MWS0vXd5=s680-w680-h510",
    },
    {
        name: "IUT PAUL SABATIER",
        localisation: "Castres",
        date: "2022-09-01 - now",
        url: "https://www.iut-tlse3.fr/",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ladepeche.fr%2F2020%2F12%2F01%2Fliut-de-castres-projette-ses-travaux-et-espere-ouvrir-un-nouveau-departement-9231791.php&psig=AOvVaw3WkluJ1Swt84TR4x-UMcex&ust=1742923270303000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCJ86Odo4wDFQAAAAAdAAAAABAI",
    },
    {
        name: "YNOV Campus",
        localisation: "Toulouse",
        date: "2025-09-01",
        url: "https://www.ynov.com/",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jobirl.com%2Fecoles%2Ftoulouse-ynov-campus-8507&psig=AOvVaw0UcW5xpdK90wz8CUFClzKS&ust=1742923288598000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIiup62do4wDFQAAAAAdAAAAABAE",
    }
];

