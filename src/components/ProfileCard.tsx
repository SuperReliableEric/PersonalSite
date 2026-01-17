import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinks from './SocialLinks';

type ProfileCardProps = {
  name: string;
  title: string;
  tagline: string;
  imageSrc?: string;
};

export default function ProfileCard({
  name,
  title,
  tagline,
  imageSrc = '/profile.png'
}: ProfileCardProps) {
  return (
    <div className="card split-panel flex h-full flex-col items-start gap-5 bg-white p-8">
      <div className="flex w-full justify-center">
        <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl bg-panel shadow-soft">
          <Image
            src={imageSrc}
            alt={`${name} portrait`}
            fill
            sizes="(min-width: 1024px) 320px, 80vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold leading-tight text-ink">{name}</h1>
        <h2 className="mt-1 text-lg font-semibold text-muted">{title}</h2>
        <p className="mt-2 text-base text-muted">{tagline}</p>
      </div>
      <Link
        href="mailto:esha@example.com?subject=Hey%20Esha"
        className="btn btn-primary w-full justify-center text-sm sm:w-auto"
      >
        Email me
      </Link>
      <SocialLinks />
    </div>
  );
}
