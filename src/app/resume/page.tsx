import React from 'react';

const experience = [
  {
    role: 'Mobile Game Developer',
    company: 'Indie Studio',
    time: '2024 — Present',
    bullets: [
      'Shipped two mobile prototypes with 30% better retention through faster tutorial loops and tuned haptics.',
      'Built a Unity tooling bundle to profile frame budgets and automate device smoke tests.',
      'Partnered with designers to translate paper prototypes into playable builds in under a week.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Bootcamp + Freelance',
    time: '2022 — 2024',
    bullets: [
      'Delivered web and mobile MVPs for small clients; focused on performance and accessibility.',
      'Ran playtest sessions, synthesized feedback, and turned findings into prioritized sprints.',
      'Maintained CI pipelines with automated checks for crashes and FPS regressions.'
    ]
  }
];

const skills = [
  'Unity / C#',
  'C++ basics',
  'Gameplay programming',
  'Mobile performance budgets',
  'Haptics & audio timing',
  'CI for prototypes',
  'Playtest synthesis',
  'Narrative + UX collaboration'
];

const education = [{ school: 'B.S. Software Development', place: 'State University', time: '2022' }];

export const metadata = {
  title: 'Resume | Esha Kurana',
  description: 'Resume for Esha Kurana, mobile game developer.'
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-ink">Resume</h1>
        <p className="text-muted">Mobile game developer focused on tactile play, fast prototypes, and measurable polish.</p>
        <a
          href="/resume.pdf"
          className="btn btn-primary mt-2 w-fit"
          aria-label="Download PDF resume"
          download
        >
          Download PDF
        </a>
      </div>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-ink">Experience</h2>
          <div className="mt-4 space-y-6">
            {experience.map((item) => (
              <div key={item.role} className="rounded-lg border border-ink/10 bg-white/70 p-5 shadow-soft">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-ink">{item.role}</p>
                    <p className="text-muted">{item.company}</p>
                  </div>
                  <p className="text-sm text-muted">{item.time}</p>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Skills</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-ink/10 bg-white px-3 py-1 text-sm font-medium text-ink shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-ink">Education</h2>
          <div className="mt-3 space-y-3">
            {education.map((item) => (
              <div key={item.school} className="flex items-center justify-between rounded-lg bg-white/70 p-4 shadow-soft">
                <div>
                  <p className="font-semibold text-ink">{item.school}</p>
                  <p className="text-muted">{item.place}</p>
                </div>
                <p className="text-sm text-muted">{item.time}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
