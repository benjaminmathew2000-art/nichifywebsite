import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAP() {
  const contextSafe = useRef<any>();

  useEffect(() => {
    contextSafe.current = gsap.context(() => {});
    return () => contextSafe.current?.revert();
  }, []);

  return {
    gsap,
    ScrollTrigger,
    contextSafe: contextSafe.current
  };
}

export function useTextReveal(selector: string, options = {}) {
  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element: any, index: number) => {
      gsap.fromTo(element, 
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: index * 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none reverse",
            ...options
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [gsap, ScrollTrigger, selector]);
}

export function useParallax(selector: string, distance = -100) {
  const { gsap, ScrollTrigger } = useGSAP();

  useEffect(() => {
    if (!gsap || !ScrollTrigger) return;

    const elements = gsap.utils.toArray(selector);
    
    elements.forEach((element: any) => {
      gsap.to(element, {
        y: distance,
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [gsap, ScrollTrigger, selector, distance]);
}
