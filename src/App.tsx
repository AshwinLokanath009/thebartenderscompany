import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // `reducedMotion="user"` honours the OS "reduce motion" setting across every
    // framer-motion animation on the page: transforms are dropped and only the
    // opacity fade remains, so content still appears rather than staying hidden.
    // The CSS rule in index.css only ever covered the hero's Ken Burns zoom.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-charcoal-950 text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Stats />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
