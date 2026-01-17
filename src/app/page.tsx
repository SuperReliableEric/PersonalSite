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
          name="Esha Kurana"
          title="Game Developer"
          tagline="I design and build tactile mobile games with tight feedback loops."
        />
        <AboutPanel
          about="I'm a tech-savvy game developer focused on mobile experiences. I care about shipping fast prototypes, tuning feel, and keeping the pipeline simple so teams can ship. I'm currently looking for roles that blend gameplay engineering with player experience."
          latestPost={latestPost}
          featuredProject={{
            title: 'Rhythm Sprint',
            summary: 'A fast-loop rhythm runner built in Unity with adaptive haptics and sub-7ms frame budgets.',
            link: '/projects'
          }}
        />
      </div>
    </section>
  );
}
