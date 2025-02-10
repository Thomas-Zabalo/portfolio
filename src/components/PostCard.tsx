import React from 'react'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import localFont from 'next/font/local';
import { Anton } from 'next/font/google'
const PP = localFont({ src: '../fonts/PPNikkeiMaru-Ultrabold.otf' });
const anton = Anton({ weight: '400', subsets: ['latin'] })

interface PostCardProps {

}

const PostCard: React.FC<PostCardProps> = ({ }) => {
    const postsDirectory = path.join(process.cwd(), 'src/posts');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
            slug: filename.replace('.mdx', ''),
            title: data.title,
            date: data.publishedAt,
        };
    });
    return (
        <>
            <section className='w-full'>
                <ul>
                    {posts.slice(0, 5).map(({ slug, title, date }, index) => (
                        <li key={slug} className={index === posts.length - 1 ? 'no-border' : ''}>
                            <Link href={`/blog/${slug}`}>
                                <div className='flex flex-col'>
                                    <div className='contents'>
                                        <div className={`w-full h-auto relative flex-none bg-transparent hover:bg-[#e40038] text-[#e40038] hover:text-[#faf3e9] transition-all duration-700 ${index === posts.length - 1 ? '' : 'border-b-2 border-[#e40038]'}`}>                                            <div className='p-4 flex flex-col flex-nowrap h-min justify-start'>
                                            <div>
                                                <div>
                                                    <div className={`${PP.className}  md:text-5xl text-3xl`}>
                                                        <h3>
                                                            {title}
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
            </section>
        </>
    )
}

export default PostCard