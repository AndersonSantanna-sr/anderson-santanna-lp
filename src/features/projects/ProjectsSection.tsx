'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealDiv } from '@/components/ui/RevealDiv';

const projects = [
  {
    cls: 'p1',
    bgGradient: 'linear-gradient(135deg, #1F2937, #0F172A)',
    emoji: '💊',
    stat: '17M+ downloads',
    name: 'Drogasil',
    company: '@ RD Saúde',
    role: 'Senior · Cart & Checkout',
    desc: "Senior React Native Engineer responsible for the cart and checkout experience, including scheduled delivery and click-and-collect features. One of Brazil's largest pharmacy e-commerce apps.",
    tags: ['React Native', 'TypeScript', 'Node.js', 'E-commerce'],
    hasLinks: true,
    appStore: 'https://apps.apple.com/br/app/drogasil-drogaria-online-24h/id1328994276',
    playStore: 'https://play.google.com/store/apps/details?id=br.com.drogasil',
  },
  {
    cls: 'p2',
    bgGradient: 'linear-gradient(135deg, #2D1B0E, #1A0F08)',
    emoji: '💊',
    stat: '11M+ on Android',
    name: 'Drogaraia',
    company: '@ RD Saúde',
    role: 'Checkout redesign',
    desc: 'Contributed to the redesign of the checkout flow and the implementation of click-and-collect — buy online, pick up at your selected pharmacy.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'E-commerce'],
    hasLinks: true,
    appStore: 'https://apps.apple.com/br/app/raia-farm%C3%A1cia-24-horas/id1093925421',
    playStore: 'https://play.google.com/store/apps/details?id=br.com.drogaraia',
  },
  {
    cls: 'p3',
    bgGradient: 'linear-gradient(135deg, #15203D, #0A1228)',
    emoji: '📱',
    stat: 'via Builders',
    name: 'Vivo Bank App',
    company: '@ Builders · for Vivo',
    role: 'Consultancy · Discontinued',
    desc: "Mobile banking application developed during consultancy at Builders for Vivo, Brazil's largest telecommunications company. App no longer active.",
    tags: ['React Native', 'TypeScript', 'Fintech', 'Consultancy'],
    hasLinks: false,
  },
  {
    cls: 'p4',
    bgGradient: 'linear-gradient(135deg, #15203D, #0A1228)',
    emoji: '🏬',
    stat: 'via Builders',
    name: 'Iguatemi Backoffice',
    company: '@ Builders · for Iguatemi',
    role: 'Internal platform',
    desc: "Internal backoffice platform for Iguatemi, one of Brazil's most prestigious shopping mall groups. Delivered as part of the Builders consultancy practice.",
    tags: ['React', 'TypeScript', 'Backoffice', 'Consultancy'],
    hasLinks: false,
  },
];

export function ProjectsSection() {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <SectionLabel num='04' label='Selected Work' />

        <div className='projects-header'>
          <RevealDiv delay={1}>
            <h2 className='text-display-flush'>
              Things I&apos;ve
              <br />
              built &amp; <span className='italic text-accent'>shipped</span>.
            </h2>
          </RevealDiv>
          <RevealDiv delay={2}>
            <div className='projects-live-badge'>
              <span className='projects-live-dot' />
              Apps live on App Store &amp; Google Play
            </div>
          </RevealDiv>
        </div>

        <div className='projects-grid'>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, delay }: { project: (typeof projects)[0]; delay: number }) {
  return (
    <RevealDiv delay={delay}>
      <div className='project-card'>
        {/* eslint-disable-next-line react/forbid-dom-props -- dynamic gradient, cannot be a static class */}
        <div className='project-card-header' style={{ background: p.bgGradient }}>
          <span className='project-card-emoji'>{p.emoji}</span>
          <span className='project-card-stat'>
            <span className='project-card-stat-dot' />
            {p.stat}
          </span>
        </div>

        <div className='project-card-body'>
          <h3 className='project-card-title'>
            {p.name}
            {p.hasLinks && (
              <svg
                width='14'
                height='14'
                viewBox='0 0 12 12'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                className='project-card-icon'
              >
                <path d='M2 10L10 2M4 2h6v6' />
              </svg>
            )}
          </h3>

          <div className='project-card-meta'>
            <span className='project-card-company'>{p.company}</span>
            <span>{p.role}</span>
          </div>

          <p className='project-card-desc'>{p.desc}</p>

          <div className={`project-card-tags${p.hasLinks ? '' : ' mb-0'}`}>
            {p.tags.map((t) => (
              <span key={t} className='tag'>
                {t}
              </span>
            ))}
          </div>

          {p.hasLinks && (
            <div className='project-card-links'>
              <StoreBtn href={p.appStore!}>App Store</StoreBtn>
              <StoreBtn href={p.playStore!}>Google Play</StoreBtn>
            </div>
          )}
        </div>
      </div>
    </RevealDiv>
  );
}

function StoreBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className='store-btn'>
      {children}
    </a>
  );
}
