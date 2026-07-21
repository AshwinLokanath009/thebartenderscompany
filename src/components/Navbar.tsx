import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { LogoLockup } from './Logo';
import { scrollToSection } from '../lib/scroll';

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    // passive: the handler never preventDefaults, and saying so up front stops
    // the browser waiting on it before it can scroll.
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  const handleMobileNav = (href: string) => {
    // Close the drawer first. Deferring the scroll one frame keeps the drawer's
    // layout animation from cancelling the section scroll on mobile browsers.
    setOpen(false);
    requestAnimationFrame(() => scrollToSection(href));
  };

  // At the top the bar floats over the dark hero photo; once scrolled it lands
  // on the cream page and flips to the light, full-colour logo treatment.
  const onLight = scrolled || open;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        onLight
          ? 'bg-cream-50 border-b border-charcoal-950/10 shadow-sm shadow-charcoal-950/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <LogoLockup variant={onLight ? 'ink' : 'white'} onClick={() => handleNav('#home')} />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  onLight
                    ? 'text-charcoal-700 hover:text-charcoal-950'
                    : 'text-charcoal-200 hover:text-white'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lemon-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            {/* Lemon on the dark hero; inverted to ink-on-lemon once the bar is
                light, so it stays readable when the yellow band scrolls behind it. */}
            <button
              onClick={() => handleNav('#contact')}
              className={`ml-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                onLight
                  ? 'bg-charcoal-950 text-lemon-500 hover:bg-charcoal-900'
                  : 'bg-lemon-500 text-charcoal-950 hover:bg-lemon-400 shadow-md shadow-lemon-500/25'
              }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`md:hidden p-2 ${onLight ? 'text-charcoal-950' : 'text-white'}`}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-cream-50 border-t border-charcoal-950/10"
          >
            <div className="flex flex-col gap-1 px-4 py-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleMobileNav(l.href)}
                  className="text-left px-3 py-3 text-base font-medium text-charcoal-700 hover:text-charcoal-950 hover:bg-lemon-500/15 rounded-lg transition-all duration-200"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleMobileNav('#contact')}
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-lemon-500 bg-charcoal-950 text-center shadow-md"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
