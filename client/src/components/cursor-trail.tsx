import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/use-gsap';

export function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const { gsap } = useGSAP();

  useEffect(() => {
    if (!cursorRef.current || !gsap) return;

    const cursor = cursorRef.current;
    const trail: HTMLDivElement[] = [];
    
    // Create trail particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'fixed w-2 h-2 rounded-full pointer-events-none z-[9998] opacity-60';
      particle.style.background = `hsl(${(i * 45) % 360}, 100%, 60%)`;
      particle.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(particle);
      trail.push(particle);
    }
    
    trailRef.current = trail;

    const handleMouseMove = (e: MouseEvent) => {
      // Main cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      // Trail particles with delay
      trail.forEach((particle, index) => {
        gsap.to(particle, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3 + (index * 0.05),
          ease: "power2.out",
          delay: index * 0.02
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trail.forEach(particle => particle.remove());
    };
  }, [gsap]);

  return (
    <div 
      ref={cursorRef}
      className="cursor-trail fixed w-4 h-4 rounded-full pointer-events-none z-[9999] opacity-90 animate-pulse-rainbow"
      style={{
        background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,0,255,0.6) 70%, transparent 100%)',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
}
