import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';
import "../../prose.css";

interface Frontmatter {
  title: string;
}

// La fonction generateStaticParams permet de générer les chemins à pré-générer
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content');
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: [filename.replace('.mdx', '')], // Génère un tableau pour chaque slug
    }));

  return posts;
}

export default async function ProjectPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/'); // Combine les segments du slug

  const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);

  try {
    const content = await fs.readFile(filePath, 'utf-8');

    const { content: mdxContent } = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
      components: {},
    });

    return (
      <div className='prose'>
        <Link href="/projects" className="bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] py-1.5 px-3 border border-gray-300 dark:border-zinc-700">
          Retour
        </Link>
        <div className='mt-6'>
          {mdxContent}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Erreur lors du chargement du fichier MDX :", error);
    return <p>Erreur : Impossible de charger ce projet.</p>;
  }
}
