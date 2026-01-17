import React from 'react';

const projects = [
  {
    title: 'Rhythm Sprint',
    description: 'Hyper-responsive rhythm runner with adaptive haptics and 60fps budget on mid-tier devices.',
    link: '/blog/leveling-up-mobile-game-feedback-loops',
    tech: ['Unity', 'C#', 'FMOD', 'Mobile QA']
  },
  {
    title: 'Prototype Pipeline',
    description: 'CI-backed prototype flow that tags builds, runs device smoke tests, and ships test builds automatically.',
    link: '/blog/building-a-prototype-pipeline',
    tech: ['CI', 'Android', 'iOS', 'Automation']
  },
  {
    title: 'Narrative Tools',
    description: 'Lightweight node-based dialogue editor for branching mobile story scenes.',
    link: '#',
    tech: ['Unity', 'ScriptableObjects', 'UX']
  }
];

export const metadata = {
  title: 'Projects | Esha Kurana',
  description: 'Featured projects and prototypes.'
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-ink">Projects</h1>
        <p className="text-lg text-muted">Small, sharp projects that focus on feel, clarity, and measurable polish.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="rounded-xl border border-ink/10 bg-white/80 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <p className="text-sm uppercase tracking-[0.08em] text-muted">Featured</p>
            <h3 className="mt-1 text-xl font-semibold text-ink">{project.title}</h3>
            <p className="mt-2 text-muted">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-ink">
                  {item}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
