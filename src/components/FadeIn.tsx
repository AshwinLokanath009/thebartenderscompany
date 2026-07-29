import { ReactNode, type CSSProperties } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  return (
    <div className={`fade-in fade-in-${direction} ${className}`} style={{ '--fade-delay': `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
