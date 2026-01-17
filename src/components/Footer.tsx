import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-ink">
          <span className="font-semibold">Esha Kurana</span>
          <span className="text-muted">• Game Developer</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="mailto:esha@example.com?subject=Hello%20Esha" className="hover:text-ink">
            Email
          </Link>
          <Link href="https://github.com/esha" className="hover:text-ink">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/esha" className="hover:text-ink">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
