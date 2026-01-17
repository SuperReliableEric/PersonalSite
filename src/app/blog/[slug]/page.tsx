import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import Prose from '@/components/Prose';
import { getAllPostSlugs, getPostBySlug, getPostModule } from '@/lib/posts';

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  try {
    const { meta } = await getPostBySlug(slug);
    return {
      title: `${meta.title} | Esha Kurana`,
      description: meta.description
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;

  let meta;
  let MDXContent;

  try {
    const post = await getPostBySlug(slug);
    meta = post.meta;
    MDXContent = (await getPostModule(slug)).default;
  } catch (error) {
    console.error(error);
    return notFound();
  }

  if (!meta || !MDXContent) {
    return notFound();
  }

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.08em] text-muted">
          {meta.dateReadable} • {meta.readingTime}
        </p>
        <h1 className="text-3xl font-bold text-ink">{meta.title}</h1>
        <p className="max-w-2xl text-muted">{meta.description}</p>
        <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
          ← Back to blog
        </Link>
      </div>
      <Prose>
        <MDXContent />
      </Prose>
    </section>
  );
}
