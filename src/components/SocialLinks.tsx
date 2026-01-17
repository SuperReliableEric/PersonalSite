import Link from 'next/link';
import React from 'react';

type Social = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    href: 'https://www.linkedin.com/in/esha',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M6.94 9H4v11h3V9zm.26-3.5a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0zM20 20V13.5c0-3.5-1.87-5.13-4.36-5.13c-2 0-2.89 1.1-3.39 1.88V9H9.42c.04.97 0 11 0 11h3V13.6c0-.35.03-.7.13-.95c.28-.7.92-1.43 2-1.43c1.32 0 1.85 1.08 1.85 2.66V20H20z" />
      </svg>
    )
  },
  {
    href: 'https://github.com/esha',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.475 2 2 6.475 2 12c0 4.418 2.865 8.166 6.839 9.489c.5.09.682-.217.682-.483c0-.237-.01-1.026-.014-1.86c-2.782.605-3.369-1.19-3.369-1.19c-.454-1.153-1.11-1.46-1.11-1.46c-.908-.62.07-.607.07-.607c1.004.07 1.532 1.03 1.532 1.03c.892 1.53 2.341 1.088 2.91.832c.091-.647.35-1.088.636-1.338c-2.22-.252-4.555-1.11-4.555-4.943c0-1.091.39-1.985 1.03-2.684c-.104-.253-.446-1.27.098-2.647c0 0 .84-.269 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.705.115 2.503.337c1.91-1.295 2.75-1.026 2.75-1.026c.545 1.377.203 2.394.1 2.647c.64.699 1.029 1.593 1.029 2.684c0 3.843-2.339 4.688-4.565 4.936c.359.31.679.921.679 1.855c0 1.338-.012 2.417-.012 2.745c0 .268.18.58.688.482C19.138 20.162 22 16.416 22 12C22 6.475 17.525 2 12 2Z"
          clipRule="evenodd"
        />
      </svg>
    )
  },
  {
    href: 'https://medium.com/@esha',
    label: 'Medium',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M4 7.5c.014-.45-.117-.896-.367-1.262L2.5 4.7V4h4.446l3.434 7.533L13.173 4h4.227v.7l-.946.906a.54.54 0 0 0-.204.494v7.77a.54.54 0 0 0 .204.494l.923.906V16H12.4v-.7l.958-.928c.094-.094.094-.123.094-.259V8.27l-2.667 6.74h-.36L6.985 8.27v5.044c-.025.185.036.37.167.503L8.32 15.3V16H2.333v-.7l1.168-1.484c.131-.133.192-.319.156-.503L3.642 7.5z" />
      </svg>
    )
  }
];

export default function SocialLinks() {
  return (
    <div className="mt-6 flex items-center gap-4">
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:-translate-y-0.5 hover:text-black"
          aria-label={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
