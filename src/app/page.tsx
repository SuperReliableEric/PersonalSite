import React from 'react';
import AboutPanel from '@/components/AboutPanel';
import ProfileCard from '@/components/ProfileCard';
import { getAllPosts } from '@/lib/posts';

export default async function HomePage() {
  const posts = await getAllPosts();
  const latestPost = posts[0];

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
        <ProfileCard
          name="Eric Ashenden"
          title="Senior Platform / Site Reliability Engineer"
          tagline="I don’t just automate ops. I build autonomous, reliable systems."
        />
        <AboutPanel
          about="I’m a senior site reliability engineer focused on cloud platforms, Kubernetes, and production reliability. I care about systems that are understandable, automatable, and resilient under stress. I write about engineering decisions, career growth, and the parts of the job people usually avoid documenting."
          latestPost={latestPost}
          featuredProject={{
            title: 'Queue-Based Job Processing Platform',
            summary: 'A queue driven job processing system built on AWS, using Python workers and Terraform managed infrastructure to support scalable, reliable background workloads.',
            link: '/projects'
          }}
        />
      </div>
    </section>
  );
}
