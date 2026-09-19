import { useState, useEffect, useMemo } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { FadeIn } from './FadeIn';
import eventImg from '../assets/images/long-truong-Y5PXVs1LpY4-unsplash.webp';
import bartenderJiggerCocktail from '../assets/images/bartender-jigger-cocktail.webp';
import doubleStrainedCoupeCocktail from '../assets/images/double-strained-coupe-cocktail.webp';
import mangoGarnishedCocktail from '../assets/images/mango-garnished-cocktail.webp';
import ginTonicCitrusGarnish from '../assets/images/gin-tonic-citrus-garnish.webp';
import gardenArchedBar from '../assets/images/garden-arched-bar-floral.jpg';
import velvetLoungeBar from '../assets/images/velvet-lounge-bar-gold-shelving.jpg';
import discoBallRoundBar from '../assets/images/disco-ball-round-bar-florals.jpg';
import coralTentedBar from '../assets/images/coral-tented-bar-lanterns.jpg';
import blueMarqueeBar from '../assets/images/blue-marquee-arched-bar.jpg';
import burgundyMosaicBar from '../assets/images/burgundy-mosaic-arched-bar.jpg';
import emeraldArchedBar from '../assets/images/emerald-arched-bar-candlelit.jpg';

/**
 * A single mixed set — custom bar builds and cocktail shots together.
 * `w`/`h` are the intrinsic pixel sizes — they reserve the right box before the
 * image loads, so the masonry columns don't reflow as each one arrives (this is
 * what lets us shuffle the order freely without the layout jumping around).
 */
const images = [
  {
    src: bartenderJiggerCocktail,
    alt: 'Professional bartender measuring a cocktail with a jigger at a Bengaluru event bar',
    w: 736,
    h: 1104,
  },
  {
    src: doubleStrainedCoupeCocktail,
    alt: 'Bartender double-straining a cocktail into a chilled coupe glass at a Bengaluru event',
    w: 736,
    h: 1104,
  },
  {
    src: ginTonicCitrusGarnish,
    alt: 'Gin and tonic cocktails with citrus and herb garnish for private event guests',
    w: 736,
    h: 1102,
  },
  {
    src: mangoGarnishedCocktail,
    alt: 'Seasonal mango-garnished cocktail prepared for a private celebration',
    w: 736,
    h: 1308,
  },
  {
    src: 'https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Signature cocktails garnished with citrus and rosemary at a Bengaluru party bar',
    w: 600,
    h: 900,
  },
  {
    src: 'https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Vibrant craft cocktail on a moody bar top at a private event in Bengaluru',
    w: 600,
    h: 900,
  },
  {
    src: gardenArchedBar,
    alt: 'Custom arched garden bar dressed with cascading florals at an outdoor celebration',
    w: 738,
    h: 1519,
  },
  {
    src: velvetLoungeBar,
    alt: 'Moody lounge bar with velvet drapes, gold shelving and candlelit florals',
    w: 1125,
    h: 1379,
  },
  {
    src: discoBallRoundBar,
    alt: 'Round white bar under mirror balls and blush draping with tall floral arrangements',
    w: 1125,
    h: 1261,
  },
  {
    src: coralTentedBar,
    alt: 'Coral circular bar with hanging lanterns and a lush floral centrepiece inside a marquee',
    w: 1125,
    h: 1264,
  },
  {
    src: eventImg,
    alt: 'Guests enjoying the bar at a live event in Bengaluru',
    w: 1100,
    h: 733,
  },
  {
    src: blueMarqueeBar,
    alt: 'Powder-blue arched back bar with glassware styled inside a marquee',
    w: 1125,
    h: 1233,
  },
  {
    src: burgundyMosaicBar,
    alt: 'Burgundy bar with a mirrored mosaic base and arched candlelit shelving',
    w: 1125,
    h: 1526,
  },
  {
    src: emeraldArchedBar,
    alt: 'Emerald green arched bar with candlelight and floral wallpaper detailing',
    w: 1125,
    h: 1370,
  },
  {
    src: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Freshly mixed cocktail with lemon garnish served at a wedding bar',
    w: 600,
    h: 900,
  },
  {
    src: 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    alt: 'Espresso martini in a coupe glass made by an event bartender',
    w: 600,
    h: 900,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  // Shuffle once per mount so the bar builds and cocktail shots read as one
  // curated mix rather than grouped by type — a fresh arrangement each visit.
  // useMemo keeps the order stable across re-renders (e.g. opening the lightbox).
  const shuffled = useMemo(() => {
    const list = [...images];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }, []);

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
    <section className="section-padding bg-white relative overflow-hidden">
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
          {shuffled.map((img) => (
            <div key={img.src} className="mb-4 break-inside-avoid">
              <div
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div
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
            </div>
          </div>
      )}
    </section>
  );
}
