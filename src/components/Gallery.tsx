import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { FadeIn } from './FadeIn';
import eventImg from '../assets/images/long-truong-Y5PXVs1LpY4-unsplash.jpg';

const images = [
  {
    src: eventImg,
    alt: 'Live event crowd under the lights',
    span: 'lg:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Signature cocktails garnished with citrus and rosemary',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Vibrant craft cocktail on a moody bar top',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Freshly mixed drink with lemon garnish',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Espresso martini in a coupe glass',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=1000&q=85',
    alt: 'Whiskey on the rocks with a dramatic splash',
    span: 'lg:col-span-2',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-600/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
            Our Work
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Gallery <span className="text-gradient-gold">Highlights</span>
          </h2>
          <p className="text-charcoal-400 text-lg max-w-xl mx-auto leading-relaxed">
            A glimpse into the elegance and craftsmanship we bring to every event.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${img.span} aspect-square`}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-gold-400">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
              {/* Gold overlay border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-gold-500/0 group-hover:border-gold-500/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
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
                className="absolute top-4 right-4 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:text-gold-400 transition-colors"
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
