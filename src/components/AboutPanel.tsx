import Link from 'next/link';
import React from 'react';
import type { PostMeta } from '@/lib/posts';

type AboutPanelProps = {
  about: string;
  latestPost?: PostMeta;
  featuredProject?: {
    title: string;
    summary: string;
    link: string;
  };
};

export default function AboutPanel({ about, latestPost, featuredProject }: AboutPanelProps) {
  return (
    <div className="split-panel relative grid h-full place-items-center overflow-hidden rounded-xl bg-panel px-10 py-12 shadow-soft">
      <div className="absolute left-[-10%] top-[-20%] h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-20%] bottom-[-30%] h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="relative flex w-full max-w-xl flex-col gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">About</p>
          <h2 className="text-3xl font-bold text-ink">About Me</h2>
          <p className="mt-3 text-lg leading-relaxed text-muted">{about}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/resume" className="btn btn-primary">
            Resume
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            Blog
          </Link>
          <Link href="/projects" className="btn btn-secondary">
            Projects
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {latestPost && (
            <Link
              href={`/blog/${latestPost.slug}`}
              className="group rounded-lg border border-ink/10 bg-white/60 p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">Latest post</p>
              <p className="mt-1 text-base font-semibold text-ink">{latestPost.title}</p>
              <p className="text-xs text-muted">{latestPost.dateReadable}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-[13px] text-accent">
                Read post
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          )}
          {featuredProject && (
            <Link
              href={featuredProject.link}
              className="group rounded-lg border border-ink/10 bg-white/60 p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">Pinned project</p>
              <p className="mt-1 text-base font-semibold text-ink">{featuredProject.title}</p>
              <p className="text-sm text-muted">{featuredProject.summary}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-[13px] text-accent">
                View project
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
