import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  const variants: Record<string, Variant> = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
