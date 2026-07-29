import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// The hero is the only content needed for the first paint. Loading the sections
// below it on demand keeps their images, lightbox, and animation code out of the
// mobile critical path.
const Services = lazy(() => import('./components/Services'));
const Stats = lazy(() => import('./components/Stats'));
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const HomepageDetails = lazy(() => import('./components/HomepageDetails'));
const Faq = lazy(() => import('./components/Faq'));

function DeferredSection({ id, minHeight, children }: { id?: string; minHeight: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) {
      setReady(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setReady(true);
      observer.disconnect();
    }, { rootMargin: '900px 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} ref={ref} style={!ready ? { minHeight } : undefined}>
      {ready ? <Suspense fallback={null}>{children}</Suspense> : null}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-charcoal-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <DeferredSection id="services" minHeight={900}><Services /></DeferredSection>
      <DeferredSection minHeight={800}><Stats /></DeferredSection>
      <DeferredSection id="why-us" minHeight={700}><HomepageDetails /></DeferredSection>
      <DeferredSection id="gallery" minHeight={1600}><Gallery /></DeferredSection>
      <DeferredSection id="testimonials" minHeight={1000}><Testimonials /></DeferredSection>
      <DeferredSection id="faq" minHeight={1200}><Faq /></DeferredSection>
      <DeferredSection id="contact" minHeight={850}><Contact /></DeferredSection>
      <DeferredSection minHeight={400}><Footer /></DeferredSection>
    </div>
  );
}

export default App;
