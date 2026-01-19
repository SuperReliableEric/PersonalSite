import React from 'react';

type ProseProps = {
  children: React.ReactNode;
};

export default function Prose({ children }: ProseProps) {
  return (
    <div
      className="
        prose
        prose-slate
        prose-lg
        max-w-3xl
        prose-headings:font-sans
        prose-headings:text-[30px]
        prose-headings:leading-tight
        prose-headings:font-bold
        prose-h2:text-[28px]
        prose-h2:mt-8
        prose-h2:mb-4
        prose-p:text-[20px]
        prose-p:leading-[1.9]
        prose-li:text-[20px]
        prose-li:leading-[1.9]
        prose-img:rounded-xl
        prose-img:shadow-soft
        prose-a:no-underline
        prose-a:font-semibold
        prose-a:text-ink
        prose-strong:text-ink
      "
      style={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        // Serif body, clean sans headings
        ['--tw-prose-body' as string]: 'Georgia, "Times New Roman", serif',
        ['--tw-prose-headings' as string]: 'Inter, "Helvetica Neue", Arial, sans-serif',
        ['--tw-prose-headings-weight' as string]: '800',
        ['--tw-prose-headings-color' as string]: '#1f2937',
        ['--tw-prose-bullets' as string]: '#111827',
        ['--tw-prose-counters' as string]: '#111827'
      }}
    >
      {children}
    </div>
  );
}
