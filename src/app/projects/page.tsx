import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
const PP = localFont({ src: '../../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'src/content');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      date: data.date,
    };
  });

  return (
    <div>
      <div className='flex flex-col items-center text-center pt-32 pb-36 px-8 w-full border-[#e40038]'>
        <h1 className={`${PP.className} md:text-6xl text-3xl text-[#e40038]`}>Projets</h1>
      </div>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/projects/${slug}`}>
              <div className='flex flex-col'>
                <div className='contents'>
                  <div className='w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 border-b-2 border-[#e40038]'>
                    <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                      <div>
                        <div>
                          <div className={`${PP.className}  md:text-5xl text-3xl`}>
                            <h3>
                              {title.length > 45 ? `${title.slice(0, 45)}...` : title}
                            </h3>
                          </div>
                          <div className={`${anton.className}text-xl`}>
                            <p>
                              {date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
