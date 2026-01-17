import React from 'react';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';

export const metadata = {
  title: 'Blog | Esha Kurana',
  description: 'Writing about mobile game development, prototyping, and production habits.'
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-ink">Blog</h1>
        <p className="max-w-2xl text-lg text-muted">
          Notes on building and shipping mobile games—what works, what fails, and the shortcuts worth keeping.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
