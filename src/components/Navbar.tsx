import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GlassWater } from 'lucide-react';

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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-lg shadow-black/40' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center shadow-md shadow-gold-600/30 group-hover:shadow-gold-500/50 transition-shadow">
              <GlassWater className="w-5 h-5 text-charcoal-950" />
            </div>
            <span className="font-serif font-semibold text-xl tracking-wide">
              <span className="text-gradient-gold">The Bartenders</span>
              <span className="text-white"> Co.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-sm font-medium text-charcoal-200 hover:text-gold-400 transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-charcoal-950 bg-gold-gradient hover:brightness-110 transition-all duration-200 shadow-md shadow-gold-600/30 hover:shadow-gold-500/50"
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gold-400"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-dark border-t border-gold-600/20"
          >
            <div className="flex flex-col gap-1 px-4 py-5">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left px-3 py-3 text-base font-medium text-charcoal-200 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('#contact')}
                className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-charcoal-950 bg-gold-gradient text-center shadow-md"
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
