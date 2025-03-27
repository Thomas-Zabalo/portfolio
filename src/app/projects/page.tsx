import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content');
  const filenames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug: filename.replace('.mdx', ''),
        title: data.title,
        description: data.description,
        date: data.date,
      };
    })
  );

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts(); // Appel côté serveur

  return (
    <section id="parcours">
      <div className="flex justify-between items-center">
        <h2 className="text-text font-semibold text-lg">
          <Link href="/#parcours" className="group flex items-center space-x-2">
            <span> Projets </span>
            <span className="group-hover:opacity-100 opacity-0 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="none" stroke="currentColor" d="m9 15l6-6m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13m-5 5l-.397.534a5.068 5.068 0 0 1-7.127 0a4.972 4.972 0 0 1 0-7.071L6 11"></path>
              </svg>
            </span>
          </Link>
        </h2>
      </div>

      <p className="mt-4">
        Voici un aperçu des différents projets que j'ai pu réaliser durant ma formation.
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4">
        {posts.map((post) => (
          <ProjectCard
            key={post.slug}
            name={post.title}
            description={post.description}
            date={post.date}
            url={`/blog/${post.slug}`}
            image="/default-blog-image.jpg"
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
