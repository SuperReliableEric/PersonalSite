import React from 'react';

const experience = [
  {
    role: 'Senior Site Reliability Engineer',
    company: 'Corpay',
    time: '2023 — Present',
    bullets: [
      "Led reliability improvements across Kubernetes workloads, including introducing KEDA-based scaling, optimizing Helm charts, and improving deployment pipelines to increase efficiency and security.",
      "Drove the migration from legacy identity approaches to Kubernetes Workload Identity, reducing operational risk and simplifying service authentication.",
      "Expanded observability by building custom Datadog monitors and dashboards and developing a Python-based SSL certificate monitoring tool to close visibility gaps.",
      "Automated operational workflows to reduce toil, debugged critical production incidents, and improved overall system resilience.",
      "Mentored junior SREs through incident response, troubleshooting, and automation best practices."
    ]
  },
  {
    role: 'Site Reliability Engineer',
    company: 'Corpay',
    time: '2021 — 2023',
    bullets: [
      "Supported production systems, focusing on incident response, operational automation, and improving developer experience in production environments.",
      "Partnered closely with application teams to troubleshoot production issues, improve deployment reliability, and reduce recurring operational pain.",
      "Built and refined automation to eliminate manual operational tasks while learning large-scale system design and reliability practices from experienced engineers.",
      "Contributed to post-incident reviews, developing a strong understanding of real-world failure modes and system behavior."
    ]
  },
  {
    role: 'DevOps Engineer',
    company: 'Flexential',
    time: '2020 — 2021',
    bullets: [
      "Designed, automated, and maintained cloud infrastructure across multiple AWS and Azure client environments using Kubernetes, Terraform, and CI/CD pipelines.",
      "Served as a technical escalation point for incidents, outages, and complex operational issues across multiple customer environments.",
      "Led infrastructure onboarding for new clients and acted as the primary engineer for several production environments.",
      "Improved security posture and reliability through infrastructure refactoring, certificate lifecycle management, and proactive incident response.",
      "Mentored teammates and collaborated with senior engineers to evolve reference architectures and operational practices."
    ]
  }
];

const skills = [
  'Distributed systems & reliability engineering',
  'Kubernetes platforms & workload orchestration',
  'Infrastructure as Code & cloud automation',
  'Observability, monitoring, and incident analysis',
  'CI/CD pipelines & release automation',
  'Production troubleshooting & operational tooling',
  'Technical mentorship & cross-team collaboration'
];

const education = [{ school: 'B.S. Computer Science: Software Engineering', place: 'Radford University', time: '2012-2016' }];

export const metadata = {
  title: 'Resume | Eric Ashenden',
  description: 'Resume for Eric Ashenden, Senior Site Reliability Engineer.'
};

export default function ResumePage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-ink">Resume</h1>
        <a
          href="/ericashenden_resume.pdf"
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
