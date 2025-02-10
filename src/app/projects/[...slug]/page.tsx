import { compileMDX } from 'next-mdx-remote/rsc';
import { promises as fs } from 'fs';
import path from 'path';
import "../../prose.css";
import Link from 'next/link';

interface Frontmatter {
  title: string;
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
      <div className='pt-20 prose md:px-40 px-5'>
        <Link href={`/projects`} className='transition-all duration-700'>
          <button className="text-[#e40038] rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Retour
          </button>
        </Link>
        {mdxContent}
      </div>
    );
  } catch (error) {
    console.error("Erreur lors du chargement du fichier MDX :", error);
    return <p>Erreur : Impossible de charger ce projet.</p>;
  }
}
