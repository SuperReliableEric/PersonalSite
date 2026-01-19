import React from 'react';

const projects = [
  {
    title: 'Queue-Based Job Processing Platform',
    description: 'A queue driven job processing system built on AWS, using Python workers and Terraform managed infrastructure to support scalable, reliable background workloads.',
    link: 'https://github.com/SuperReliableEric/aws-queue-jobs',
    tech: ['AWS', 'Python', 'Terraform', 'KEDA', 'GitHub Actions', 'Prometheus', 'Grafana']
  },
  {
    title: 'Reddit Scrubber',
    description: 'A Python tool for analyzing and cleaning Reddit content, built to explore data extraction, filtering, and automation at scale.',
    link: 'https://github.com/SuperReliableEric/RedditScrubber',
    tech: ['Python', 'SQLite']
  },
  {
    title: 'Personal Portfolio & Blog',
    description: 'A personal portfolio site used to bring together engineering projects and technical writing in one place.',
    link: 'https://github.com/SuperReliableEric/PersonalSite',
    tech: ['Next.js', 'Tailwind CSS']
  }
];

export const metadata = {
  title: 'Projects | Eric Ashenden',
  description: 'Featured projects and prototypes.'
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-ink">Projects</h1>
        <p className="text-lg text-muted">Practical engineering projects exploring systems design, automation, and reliability.</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            className="flex h-full flex-col justify-between rounded-xl border border-ink/10 bg-white/80 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div>
              <h3 className="mt-1 text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-2 text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full bg-panel px-3 py-1 text-xs font-semibold text-ink">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end text-sm font-semibold text-accent">
              View on GitHub <span className="ml-1" aria-hidden="true">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
