import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Animate page in
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        onComplete: () => {
          // Refresh ScrollTrigger after animation completes
          ScrollTrigger.refresh();
        }
      }
    );

    return () => {
      // Cleanup ScrollTriggers on route change
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
