import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const slugs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data.slug;
  }).filter(slug => slug); // Filter out undefined slugs

  return slugs.map((slug) => ({
    slug: slug.split('/'),
  }));
}

const BlogPost = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const fullPath = path.join(postsDirectory, `${params.slug.join('/')}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export default BlogPost;