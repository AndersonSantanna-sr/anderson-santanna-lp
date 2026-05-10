'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#about', num: '01', label: 'about' },
  { href: '#skills', num: '02', label: 'skills' },
  { href: '#ai', num: '03', label: 'ai & dev' },
  { href: '#work', num: '04', label: 'work' },
  { href: '#experience', num: '05', label: 'experience' },
  { href: '#contact', num: '06', label: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={cn('navbar', scrolled && 'navbar-scrolled')}>
      <Link href='/' className='navbar-brand'>
        <span className='navbar-badge'>AS</span>
        <span>anderson.dev</span>
      </Link>

      <div className='navbar-right'>
        <div className='navbar-links hidden md:flex'>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} num={link.num} label={link.label} />
          ))}
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
}

function NavLink({ href, num, label }: { href: string; num: string; label: string }) {
  return (
    <a href={href} className='nav-link'>
      <span className='nav-link-num'>{num}</span>
      {label}
    </a>
  );
}

function ThemeToggle({
  theme,
  setTheme,
}: {
  theme: string | undefined;
  setTheme: (t: string) => void;
}) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
      className='theme-toggle'
    >
      {theme === 'light' ? (
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.6'
        >
          <circle cx='12' cy='12' r='4' />
          <path d='M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41' />
        </svg>
      ) : (
        <svg
          width='16'
          height='16'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.6'
        >
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
        </svg>
      )}
    </button>
  );
}
