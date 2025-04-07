import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import "../../prose.css";
import Link from 'next/link';

interface Frontmatter {
  title: string;
}

export async function generateStaticParams() {
  const posts = await getPosts(); // Appel à ta fonction pour récupérer tous les posts
  return posts.map(post => ({
    slug: [post.slug]  // Comme tu utilises [...slug], il faut un tableau
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;

  if (!resolvedParams?.slug) {
    return <p>Projet introuvable.</p>;
  }

  const filePath = path.join(process.cwd(), 'src/content', `${resolvedParams.slug}.mdx`);

  try {
    const content = await fs.readFile(filePath, 'utf-8');

    const { content: mdxContent } = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true
      },
      components: {
        // Vos composants MDX personnalisés ici
      }
    });

    return (
      <div className='prose'>

        <Link href={`/projects`} className="bg-gray-100 dark:bg-[#27272a] hover:bg-gray-200 dark:hover:bg-[#343435] py-1.5 px-3 border border-gray-300 dark:border-zinc-700">
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
