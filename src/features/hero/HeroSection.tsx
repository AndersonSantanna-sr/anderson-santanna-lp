'use client';

import { useState, useEffect } from 'react';

const phrases = [
  'Senior React Native Engineer',
  'TypeScript Specialist',
  'Mobile Architect',
  'AI-Augmented Developer',
  'Open Source Builder',
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const displayText = phrases[phraseIndex].slice(0, charIndex);

  useEffect(() => {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      if (charIndex < phrase.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), 55 + Math.random() * 40);
        return () => clearTimeout(t);
      } else {
        if (phraseIndex === phrases.length - 1) return;
        const t = setTimeout(() => setDeleting(true), 1600);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => setCharIndex((c) => c - 1), 28);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [charIndex, deleting, phraseIndex]);

  return (
    <header className='hero'>
      <div className='hero-grid-bg' />

      <div className='hero-shapes'>
        <div className='hero-shape-circle-lg' />
        <div className='hero-shape-square' />
        <div className='hero-shape-circle-sm' />
      </div>

      <div className='hero-content'>
        <div className='hero-inner'>
          <div className='hero-eyebrow'>
            <span className='hero-eyebrow-line' />
            Portfolio · 2026
            <span className='hero-status-dot' />
            Available for new projects
          </div>

          <h1 className='hero-heading'>
            Anderson
            <br />
            Sant&apos;<span className='font-serif italic text-accent'>Anna</span>.
          </h1>

          <div className='hero-role'>
            <span className='hero-role-prompt'>~/role $</span>
            <span>
              {displayText}
              <span className='hero-caret'>▎</span>
            </span>
          </div>

          <p className='hero-tagline'>
            Building production-grade{' '}
            <span className='text-accent not-italic'>mobile experiences</span> that scale, delight,
            and endure.
          </p>

          <div className='hero-ctas'>
            <HeroBtn href='#work' primary>
              View Work
              <ArrowIcon />
            </HeroBtn>
            <HeroBtn href='#contact'>
              Get in Touch
              <ArrowIcon />
            </HeroBtn>
          </div>
        </div>
      </div>

      <div className='hero-scroll'>
        scroll
        <span className='hero-scroll-line' />
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
    >
      <path d='M2 10L10 2M4 2h6v6' />
    </svg>
  );
}

function HeroBtn({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={primary ? 'hero-btn hero-btn-primary' : 'hero-btn'}>
      {children}
    </a>
  );
}
