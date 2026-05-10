'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealDiv } from '@/components/ui/RevealDiv';

const skills = [
  {
    cls: 'c1',
    domain: '// Mobile · Primary',
    emoji: '📱',
    title: 'React Native & Expo',
    desc: 'Production apps for iOS & Android. Custom native modules, Expo Router, EAS Build, and a healthy respect for the new architecture.',
    tags: ['Expo SDK 52', 'Expo Router', 'EAS Build', 'Hermes', 'New Architecture'],
    colSpan: 6,
    rowSpan: 2,
  },
  {
    cls: 'c2',
    domain: '// Language',
    emoji: '🔷',
    title: 'TypeScript',
    desc: 'Strict typing, generic patterns, type-safe APIs, Zod validation end-to-end.',
    colSpan: 3,
  },
  {
    cls: 'c3',
    domain: '// Domain',
    emoji: '🛒',
    title: 'E-commerce Mobile',
    desc: 'Cart, checkout flows, scheduled delivery, click-and-collect. Built for scale.',
    colSpan: 3,
  },
  {
    cls: 'c4',
    domain: '// Architecture',
    emoji: '🏗️',
    title: 'Architecture',
    desc: 'Clean Architecture, feature-sliced design, Zustand, React Query, Redux.',
    tags: ['Zustand', 'React Query', 'Redux'],
    colSpan: 3,
  },
  {
    cls: 'c5',
    domain: '// Motion',
    emoji: '🎞️',
    title: 'Animations',
    desc: 'Reanimated 3, Skia, Lottie. Fluid 60fps interactions at the native layer.',
    tags: ['Reanimated 3', 'Skia', 'Lottie'],
    colSpan: 3,
  },
  {
    cls: 'c6',
    domain: '// DevOps',
    emoji: '🚀',
    title: 'CI/CD & DevOps',
    desc: 'Fastlane, EAS, GitHub Actions. App Store & Play Store pipelines.',
    tags: ['Fastlane', 'EAS', 'GH Actions'],
    colSpan: 4,
  },
  {
    cls: 'c7',
    domain: '// Quality',
    emoji: '🧪',
    title: 'Testing',
    desc: 'Jest, Detox, React Native Testing Library. TDD for critical paths.',
    tags: ['Jest', 'Detox', 'RNTL'],
    colSpan: 4,
  },
  {
    cls: 'c8',
    domain: '// Performance',
    emoji: '⚡',
    title: 'Performance',
    desc: 'Hermes engine, FlashList, bundle splitting, memory leak detection.',
    tags: ['Hermes', 'FlashList', 'Profiling'],
    colSpan: 4,
  },
];

export function SkillsSection() {
  return (
    <section id='skills' className='section'>
      <div className='container'>
        <SectionLabel num='02' label='Expertise' />
        <RevealDiv delay={1}>
          <h2 className='text-display'>
            The stack I&apos;ve
            <br />
            been <span className='italic text-accent'>sharpening</span>.
          </h2>
        </RevealDiv>

        <div className='skills-grid'>
          {skills.map((skill, i) => (
            <SkillCard key={skill.cls} skill={skill} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }: { skill: (typeof skills)[0]; delay: number }) {
  const colClass =
    skill.colSpan === 6 ? 'skill-col-6' : skill.colSpan === 3 ? 'skill-col-3' : 'skill-col-4';
  const rowClass = skill.rowSpan === 2 ? 'skill-row-2' : '';

  return (
    <RevealDiv delay={delay} className={`${colClass} ${rowClass}`.trim()}>
      <div className='skill-card'>
        <div className='skill-card-domain'>{skill.domain}</div>
        <div className='skill-card-emoji'>{skill.emoji}</div>
        <h3 className='skill-card-title'>{skill.title}</h3>
        <p className='skill-card-desc'>{skill.desc}</p>
        {skill.tags && (
          <div className='skill-card-tags'>
            {skill.tags.map((t) => (
              <span key={t} className='tag-filled'>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </RevealDiv>
  );
}
