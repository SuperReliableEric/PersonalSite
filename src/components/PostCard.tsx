import Link from 'next/link';
import React from 'react';
import type { PostMeta } from '@/lib/posts';

type PostCardProps = {
  post: PostMeta;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-ink/10 bg-white/70 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.06em] text-muted">
        <span>{post.dateReadable}</span>
        <span aria-hidden="true">•</span>
        <span>{post.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold text-ink group-hover:text-accent">{post.title}</h3>
      <p className="text-sm text-muted">{post.description}</p>
      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent">
        Read
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
