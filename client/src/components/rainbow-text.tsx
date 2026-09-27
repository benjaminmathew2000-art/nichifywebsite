import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface RainbowTextProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  animated?: boolean;
  flow?: boolean;
  intro?: boolean;
}

export function RainbowText({ children, hover = false, className, animated = false, flow = false, intro = false }: RainbowTextProps) {
  // Play one wave on mount, then fall back to the normal (hover) styling
  const [introPlaying, setIntroPlaying] = useState(intro);

  return (
    <span 
      className={cn(
        flow ? 'rainbow-flow' : (hover ? 'rainbow-text-hover' : 'rainbow-text'),
        animated && 'animate-rainbow',
        introPlaying && 'rainbow-intro',
        className
      )}
      onAnimationEnd={(e) => {
        if (e.animationName === 'rainbow-intro-wave') setIntroPlaying(false);
      }}
    >
      {children}
    </span>
  );
}
