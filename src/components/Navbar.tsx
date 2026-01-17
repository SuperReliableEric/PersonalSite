import Link from 'next/link';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' }
];

export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        EK<span className="text-accent">.</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium text-muted">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
