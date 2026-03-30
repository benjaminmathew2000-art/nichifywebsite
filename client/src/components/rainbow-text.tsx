import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RainbowTextProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  animated?: boolean;
  flow?: boolean;
}

export function RainbowText({ children, hover = false, className, animated = false, flow = false }: RainbowTextProps) {
  return (
    <span 
      className={cn(
        flow ? 'rainbow-flow' : (hover ? 'rainbow-text-hover' : 'rainbow-text'),
        animated && 'animate-rainbow',
        className
      )}
    >
      {children}
    </span>
  );
}
