import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';
import heroBg from '../assets/images/michael-odelberth-6xyLifyRV70-unsplash.webp';

const facts = [
  'Bengaluru, India',
  'Private & corporate events',
  'Fully trained staff',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Full-bleed photograph */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover animate-kenburns"
          style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: '65% center' }}
        />
      </div>

      {/* Editorial gradient: heavy on the left where the type sits, clear on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/90 via-charcoal-950/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pb-16 sm:pb-20 pt-32">
        <div className="max-w-2xl">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-8 h-px bg-lemon-500" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-lemon-400 font-medium">
              Private Bar Hire · Est. 2024
            </span>
          </motion.div>

          {/* Headline with a hand-drawn underline under one word */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-white font-semibold tracking-tight leading-[0.95] text-[2.75rem] sm:text-6xl lg:text-7xl"
          >
            Every good party
            <br />
            has a{' '}
            <span className="relative inline-block">
              great
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M3 8 C 45 3, 90 3, 130 6 S 185 9, 197 5"
                  stroke="#f6de26"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.9, ease: 'easeInOut' }}
                />
              </svg>
            </span>{' '}
            bartender
            <br />
            behind it.
          </motion.h1>

          {/* Subline — written like a person, not a brochure */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 text-charcoal-300 text-base sm:text-lg leading-relaxed max-w-lg"
          >
            We bring the people, the kit and the cocktails your guests will still be
            talking about next week. You just tell us where the party is.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center gap-2 bg-lemon-500 hover:bg-lemon-400 text-charcoal-950 font-semibold text-sm tracking-wide px-7 py-3.5 rounded-sm transition-colors duration-200"
            >
              Check availability
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToSection('#gallery')}
              className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal-200 hover:text-white transition-colors"
            >
              See a few nights we've done
              <ArrowRight className="w-4 h-4 text-lemon-400 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Honest credibility strip — not vanity stat counters */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-charcoal-400"
          >
            {facts.map((f) => (
              <li key={f} className="mr-6">
                <span className="inline-flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-block w-1 h-1 rounded-full bg-lemon-500/70" />
                  <span>{f}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
