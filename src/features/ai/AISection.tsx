'use client';

import { SectionLabel } from '@/components/ui/SectionLabel';
import { RevealDiv } from '@/components/ui/RevealDiv';

const aiCards = [
  {
    emoji: '🤖',
    title: 'AI-Assisted Coding',
    desc: 'Using Claude, Copilot, and Cursor to accelerate boilerplate, generate typed interfaces from API specs, refactor legacy code, and explore architectural patterns — all in real time inside the editor.',
    featured: true,
  },
  {
    emoji: '🧠',
    title: 'Prompt Engineering for Devs',
    desc: 'Writing precise, context-rich prompts that yield production-ready output. Few-shot examples, chain-of-thought for complex logic, role-based system prompts, and iterative refinement loops.',
  },
  {
    emoji: '🔍',
    title: 'AI-Powered Code Review',
    desc: 'Leveraging LLMs to catch edge cases, suggest TypeScript improvements, identify potential performance issues, and enforce architecture patterns before code hits the PR queue.',
  },
  {
    emoji: '⚙️',
    title: 'Test Generation at Scale',
    desc: 'Generating Jest unit tests and Detox E2E scenarios from component interfaces. AI dramatically reduces time-to-coverage for new features while maintaining meaningful test semantics.',
  },
];

const pills = [
  'LLM APIs (Claude, GPT-4, Gemini)',
  'RAG & vector search',
  'AI chat interfaces in React Native',
  'Cursor & Copilot workflows',
  'Code generation pipelines',
  'Automated documentation',
  'AI-driven UI generation',
  'On-device ML with ONNX',
  'Streaming responses (SSE/WebSocket)',
  'Semantic search in apps',
  'AI-assisted testing strategies',
  'Evaluating & fine-tuning models',
];

export function AISection() {
  return (
    <section id='ai' className='section'>
      <div className='container'>
        <SectionLabel num='03' label='AI-Augmented Development' />
        <RevealDiv delay={1}>
          <h2 className='text-display'>
            Engineering
            <br />
            faster <span className='italic text-accent'>with AI</span>.
          </h2>
        </RevealDiv>

        <RevealDiv delay={2}>
          <p className='text-body-serif-lg italic ai-intro'>
            I actively integrate AI tools into every phase of the development workflow — not as a
            crutch, but as a <span className='text-accent not-italic'>force multiplier</span>. The
            goal: ship higher-quality software in less time, with fewer regressions.
          </p>
        </RevealDiv>

        <div className='ai-grid'>
          {aiCards.map((card, i) => (
            <AICard key={card.title} card={card} delay={i} />
          ))}
        </div>

        <RevealDiv delay={3}>
          <div className='ai-pills'>
            {pills.map((p) => (
              <AIPill key={p}>{p}</AIPill>
            ))}
          </div>
        </RevealDiv>
      </div>
    </section>
  );
}

function AICard({ card, delay }: { card: (typeof aiCards)[0]; delay: number }) {
  return (
    <RevealDiv delay={delay}>
      <div className={`ai-card${card.featured ? ' ai-card-featured' : ''}`}>
        {card.featured && <span className='ai-card-badge'>AI-Powered</span>}
        <div className='ai-card-emoji'>{card.emoji}</div>
        <h3 className='ai-card-title'>{card.title}</h3>
        <p className='ai-card-desc'>{card.desc}</p>
      </div>
    </RevealDiv>
  );
}

function AIPill({ children }: { children: React.ReactNode }) {
  return (
    <span className='ai-pill'>
      <span className='ai-pill-dot' />
      {children}
    </span>
  );
}
