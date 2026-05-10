'use client';

import { motion } from 'motion/react';

const delayMap: Record<number, number> = {
  0: 0,
  1: 0.08,
  2: 0.16,
  3: 0.24,
  4: 0.32,
  5: 0.4,
};

export function RevealDiv({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: delayMap[delay] ?? 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
