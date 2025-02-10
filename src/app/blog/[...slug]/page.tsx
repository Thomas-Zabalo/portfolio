import { MDXRemote } from 'next-mdx-remote/rsc'
import { promises as fs } from 'fs';
import path from 'path';

export default async function ProjectPage({ params }: { params: { slug: string }}) {
  const content = await fs.readFile(path.join(process.cwd(), 'src/content', `${params.slug}.mdx`), 'utf-8');
  return (
    <div className='pt-20'>  
      <MDXRemote source={content} />
    </div>
  )
}