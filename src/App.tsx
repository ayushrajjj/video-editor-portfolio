import React, { Suspense, lazy, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { CustomCursor } from './components/CustomCursor';

// Lazy load off-screen components for massive performance gains
const SelectedWork = lazy(() => import('./components/SelectedWork'));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer'));

/**
 * Main App component.
 */
export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Anchor link handling for Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = id ? document.getElementById(id) : null;
        if (element) {
          lenis.scrollTo(element, { offset: -80 });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-white selection:text-black cursor-none">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />

        {/* Suspense Boundary for dynamic imports */}
        <Suspense fallback={<div className="h-screen flex items-center justify-center bg-[#0B0B0B]"><div className="w-8 h-8 rounded-full border border-gold/30 border-t-gold animate-spin" /></div>}>
          <SelectedWork />
          <Process />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
