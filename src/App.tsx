import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load off-screen components for massive performance gains
const SelectedWork = lazy(() => import('./components/SelectedWork').then(module => ({ default: module.SelectedWork })));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

/**
 * Main App component.
 */
export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
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
