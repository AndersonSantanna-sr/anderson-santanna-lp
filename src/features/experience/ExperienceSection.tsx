'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealDiv } from '@/components/ui/RevealDiv';

const roles = [
  {
    title: 'Senior React Native Engineer',
    company: '@ RD Saúde · Remote (Brazil)',
    desc: 'Building and evolving the main consumer apps — Drogasil and Drogaraia — for the largest pharmacy network in Brazil and Latin America. Responsible for the cart, checkout, scheduled delivery, and click-and-collect features. Working with React Native on the frontend and Node.js on the backend, collaborating across product, design, and engineering to ship features used by millions.',
    date: '2023 — Present',
  },
  {
    title: 'React Native Developer · Mid-level',
    company: '@ Builders · Brazil · promoted from Junior',
    desc: 'Joined as a Junior Developer working across React, React Native, and Java. Promoted to Mid-level after 18 months and transitioned to focus exclusively on mobile. Contributed to products for Vivo (telecom), Iguatemi (retail), and RD Saúde (healthcare) — gaining broad experience across industries and delivering client-facing apps in a fast-paced consultancy environment.',
    date: '2019 — 2023',
  },
];

export function ExperienceSection() {
  return (
    <section id='experience' className='section'>
      <div className='container'>
        <SectionLabel num='05' label='Experience' />
        <RevealDiv delay={1}>
          <h2 className='text-display'>
            An <span className='italic text-accent'>arc</span>
            <br />
            through teams.
          </h2>
        </RevealDiv>

        <div className='experience-list'>
          {roles.map((role, i) => (
            <RoleItem key={role.title} role={role} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoleItem({ role, delay }: { role: (typeof roles)[0]; delay: number }) {
  return (
    <RevealDiv delay={delay}>
      <div className='role-item'>
        <div>
          <h3 className='role-title'>{role.title}</h3>
          <div className='role-company'>{role.company}</div>
          <p className='role-desc'>{role.desc}</p>
        </div>
        <div className='role-date'>{role.date}</div>
      </div>
    </RevealDiv>
  );
}
