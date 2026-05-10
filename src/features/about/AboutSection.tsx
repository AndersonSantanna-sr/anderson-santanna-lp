'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealDiv } from '@/components/ui/RevealDiv';

const stats = [
  { num: '8+', label: 'Years of experience' },
  { num: '28M+', label: 'App downloads' },
  { num: '2', label: 'Apps at scale' },
];

const stack = [
  'React Native',
  'TypeScript',
  'Expo',
  'Node.js',
  'Zustand',
  'React Query',
  'Reanimated',
  'NativeWind',
  'Jest',
  'Detox',
  'Java',
  'React',
];

export function AboutSection() {
  return (
    <section id='about' className='section'>
      <div className='container'>
        <SectionLabel num='01' label='About' />

        <div className='about-grid'>
          <div>
            <RevealDiv delay={1}>
              <h2 className='text-display about-heading'>
                Crafting mobile
                <br />
                with <span className='italic text-accent'>intention</span>.
              </h2>
            </RevealDiv>

            <RevealDiv delay={2}>
              <p className='text-body-serif about-para'>
                I&apos;m a Senior{' '}
                <span className='text-accent italic'>React Native & TypeScript Engineer</span> with
                8 years of experience building mobile and web products — from early-stage startups
                to platforms serving millions of users across Latin America.
              </p>
            </RevealDiv>

            <RevealDiv delay={3}>
              <p className='text-body-serif about-para'>
                I started my career at <span className='text-accent italic'>Builders</span>, a
                technology consultancy startup, as a Junior Developer working across the full stack.
                After 18 months I was promoted to Mid-level and transitioned to focus exclusively on
                mobile, contributing to products for{' '}
                <span className='text-accent italic'>Vivo</span>,{' '}
                <span className='text-accent italic'>Iguatemi</span>, and{' '}
                <span className='text-accent italic'>RD Saúde</span>.
              </p>
              <p className='text-body-serif about-para'>
                Today I work as a Senior React Native Engineer at{' '}
                <span className='text-accent italic'>RD Saúde</span>, where I build and evolve
                consumer apps used by millions. I collaborate closely with product, design, and
                backend to shape features end-to-end.
              </p>
            </RevealDiv>

            <RevealDiv delay={3}>
              <div className='about-stat-grid'>
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <div className='about-stat-num'>{num}</div>
                    <div className='about-stat-label'>{label}</div>
                  </div>
                ))}
              </div>
            </RevealDiv>

            <RevealDiv delay={4}>
              <div className='about-meta'>
                <div>{'// Brazil 🇧🇷 · Remote-first · Open to Europe'}</div>
                <div>{'// Senior @ RD Saúde (Drogasil + Drogaraia)'}</div>
              </div>

              <div className='about-pills'>
                {stack.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </RevealDiv>
          </div>

          <RevealDiv delay={2}>
            <div className='about-code-window'>
              <div className='about-code-titlebar'>
                <span className='about-code-dot' />
                <span className='about-code-dot' />
                <span className='about-code-dot-accent' />
                <span className='about-code-filename'>~/anderson.profile.ts</span>
              </div>
              <pre className='about-code-body'>
                <CodeLine ln='1'>
                  <Kw>const</Kw> <Fn>developer</Fn> {'= {'}
                </CodeLine>
                <CodeLine ln='2'>
                  {'  '}name<Punc>:</Punc> <Str>&quot;Anderson Sant&apos;Anna&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='3'>
                  {'  '}role<Punc>:</Punc> <Str>&quot;Senior RN Engineer&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='4'>
                  {'  '}location<Punc>:</Punc> <Str>&quot;Brazil 🇧🇷 (remote)&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='5'>
                  {'  '}stack<Punc>:</Punc> {'['}
                </CodeLine>
                <CodeLine ln='6'>
                  {'    '}
                  <Str>&quot;React Native&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='7'>
                  {'    '}
                  <Str>&quot;TypeScript&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='8'>
                  {'    '}
                  <Str>&quot;Node.js&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='9'>
                  {'    '}
                  <Com>{'// + more'}</Com>
                </CodeLine>
                <CodeLine ln='10'>
                  {'  '}
                  {']'}
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='11'>
                  {'  '}impact<Punc>:</Punc> <Str>&quot;28M+ app downloads&quot;</Str>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='12'>
                  {'  '}aiAugmented<Punc>:</Punc> <Kw>true</Kw>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='13'>
                  {'  '}openToWork<Punc>:</Punc> <Kw>true</Kw>
                  <Punc>,</Punc>
                </CodeLine>
                <CodeLine ln='14'>
                  {'}'}
                  <Punc>;</Punc>
                </CodeLine>
                <CodeLine ln='15'>{''}</CodeLine>
                <CodeLine ln='16'>
                  <Kw>export default</Kw> developer<Punc>;</Punc>
                </CodeLine>
              </pre>
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className='pill'>{children}</span>;
}

function CodeLine({ ln, children }: { ln: string; children: React.ReactNode }) {
  return (
    <div>
      <span className='text-faint select-none inline-block w-6.5'>{ln}</span>
      {children}
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className='text-accent'>{children}</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span className='code-str'>{children}</span>;
}
function Com({ children }: { children: React.ReactNode }) {
  return <span className='text-faint italic'>{children}</span>;
}
function Fn({ children }: { children: React.ReactNode }) {
  return <span className='code-fn'>{children}</span>;
}
function Punc({ children }: { children: React.ReactNode }) {
  return <span className='text-dim'>{children}</span>;
}
