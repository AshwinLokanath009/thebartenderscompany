import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { FadeIn } from './FadeIn';
import eventImg from '../assets/images/long-truong-Y5PXVs1LpY4-unsplash.webp';
import img1 from '../assets/images/IMG1.webp';
import img2 from '../assets/images/IMG2.webp';
import img3 from '../assets/images/IMG3.webp';
import img4 from '../assets/images/IMG4.webp';

/**
 * Real work photos lead; stock fills out the grid behind them.
 * `w`/`h` are the intrinsic pixel sizes — they reserve the right box before the
 * image loads, which matters here because the masonry columns would otherwise
 * reflow as each one arrives.
 */
const images = [
  {
    src: img1,
    alt: 'Bartender pouring a measure from a jigger into a shaker behind the bar',
    w: 736,
    h: 1104,
  },
  {
    src: img2,
    alt: 'Double-straining a cocktail into a chilled coupe',
    w: 736,
    h: 1104,
  },
  {
    src: img4,
    alt: 'Two gin and tonics being built over ice with citrus and herb garnish',
    w: 736,
    h: 1102,
  },
  {
    src: img3,
    alt: 'Seasonal summer cocktail garnished with a mango slice',
    w: 736,
    h: 1308,
  },
  {
    src: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Signature cocktails garnished with citrus and rosemary',
    w: 600,
    h: 900,
  },
  {
    src: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Vibrant craft cocktail on a moody bar top',
    w: 600,
    h: 900,
  },
  // The two landscape shots are placed to even out the column heights — the
  // browser balances masonry columns in source order, and grouping the tall
  // portraits together otherwise leaves a hole in the middle column.
  {
    src: eventImg,
    alt: 'Live event crowd under the lights',
    w: 1100,
    h: 733,
  },
  {
    src: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Freshly mixed drink with lemon garnish',
    w: 600,
    h: 900,
  },
  {
    src: 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Espresso martini in a coupe glass',
    w: 600,
    h: 900,
  },
  {
    src: 'https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=1000&q=85',
    alt: 'Whiskey on the rocks with a dramatic splash',
    w: 1000,
    h: 667,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  // Esc closes the lightbox, and the page behind it stays put while it's open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [selected]);

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-4">
            Our Work
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950 mb-5">
            Gallery <span className="highlight-lemon">Highlights</span>
          </h2>
          <p className="text-charcoal-600 text-lg max-w-xl mx-auto leading-relaxed">
            A glimpse into the elegance and craftsmanship we bring to every event.
          </p>
        </FadeIn>

        {/* Masonry columns — the shots are a mix of portrait and landscape, so a
            fixed square grid would crop the tall ones to pieces. */}
        <div className="columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <div key={img.src} className="mb-4 break-inside-avoid">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelected(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-lemon-500 flex items-center justify-center text-charcoal-950">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                {/* Lemon overlay border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-lemon-500/0 group-hover:border-lemon-500 transition-all duration-300 pointer-events-none" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected} alt="Gallery lightbox" className="w-full object-contain rounded-2xl max-h-[85vh]" />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-lemon-500 flex items-center justify-center text-charcoal-950 hover:bg-lemon-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
