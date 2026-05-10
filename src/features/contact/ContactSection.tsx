'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealDiv } from '@/components/ui/RevealDiv';

export function ContactSection() {
  return (
    <section id='contact' className='section-contact'>
      <div className='container'>
        <SectionLabel num='06' label='Contact' />

        <RevealDiv delay={1}>
          <h2 className='contact-heading'>
            Let&apos;s build
            <br />
            <span className='italic text-accent'>something.</span>
          </h2>
        </RevealDiv>

        <RevealDiv delay={2}>
          <p className='contact-sub'>Open to remote opportunities in Brazil and Europe.</p>
          <EmailLink />
        </RevealDiv>

        <div className='contact-stack'>
          <RevealDiv delay={2}>
            <div className='availability-badge'>
              <span className='availability-dot' />
              Currently available · Brazil 🇧🇷 · UTC-3
            </div>
          </RevealDiv>

          <RevealDiv delay={3}>
            <div className='social-links'>
              <SocialBtn href='https://github.com/andersonsantanna-sr' label='GitHub'>
                <GithubIcon />
                GitHub
              </SocialBtn>
              <SocialBtn href='https://linkedin.com/in/anderson-sant-anna' label='LinkedIn'>
                <LinkedinIcon />
                LinkedIn
              </SocialBtn>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}

function EmailLink() {
  return (
    <a href='mailto:anderson.santanna14@gmail.com' className='email-link'>
      anderson.santanna14@gmail.com
      <svg
        width='22'
        height='22'
        viewBox='0 0 12 12'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        className='email-link-icon'
      >
        <path d='M2 10L10 2M4 2h6v6' />
      </svg>
    </a>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      className='social-btn'
    >
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg width='14' height='14' viewBox='0 0 16 16' fill='currentColor'>
      <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.69-.01-1.36-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.67.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z' />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width='14' height='14' viewBox='0 0 16 16' fill='currentColor'>
      <path d='M3.6 2A1.6 1.6 0 1 0 3.6 5.2 1.6 1.6 0 0 0 3.6 2zM2.2 6.4h2.8V14H2.2zM7 6.4h2.7v1.05h.04c.38-.71 1.3-1.45 2.66-1.45 2.84 0 3.36 1.87 3.36 4.3V14h-2.8v-3.4c0-.81-.02-1.86-1.13-1.86-1.14 0-1.31.88-1.31 1.8V14H7z' />
    </svg>
  );
}
