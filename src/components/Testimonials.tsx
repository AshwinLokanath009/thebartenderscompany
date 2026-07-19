import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';
import shyamSundarPhoto from '../assets/images/REVIEW - SHYAM SUNDAR.jpeg';
import abhiramiPhoto from '../assets/images/REVIEW - ABHIRAMI S.jpg';
import rakshithPhoto from '../assets/images/RIVIEW - RAKSHITH.jpeg';
import riyaShettyPhoto from '../assets/images/REVIEW - RIYA SHETTY.jpg';

type Review = {
  /** The client's own words, as close to verbatim as you have them. */
  quote: string;
  /** Their name, or a first name — whatever they're happy to be shown as. */
  name: string;
  /** Optional context, e.g. "Wedding, Dec 2025". */
  role?: string;
  /** Optional date to show alongside the role. */
  date?: string;
  /** Only the number of stars they actually gave. Omit if you didn't get one. */
  rating?: number;
  /** Optional imported photo. Leave out and their initial is used instead. */
  photo?: string;
  /** Optional crop focus for the circular avatar image. */
  photoPosition?: string;
  /** Optional zoom factor for the circular avatar image. */
  photoZoom?: number;
};

/**
 * HOW TO ADD REAL REVIEWS
 * ----------------------
 * Paste them into this array — nothing else needs changing. The whole section
 * hides itself while this is empty and comes back on its own as soon as there's
 * something real in it, so the page never shows an unfinished slot. One review
 * renders as a large featured card; two or more render as a grid.
 *
 *   const reviews: Review[] = [
 *     {
 *       quote: 'They turned up early and just got on with it. Guests are still
 *               asking about the espresso martinis.',
 *       name: 'Priya',
 *       role: 'Birthday party, Nov 2025',
 *       rating: 5,
 *       photo: reviewPhoto,
 *     },
 *   ];
 *
 * To attach a photo, import it at the top of this file and pass it as `photo`:
 *
 *   import reviewPhoto from '../assets/images/review-1-portrait.webp';
 *
 * (That file is a 4:5 crop of "Review 1.jpg" — the original is a full-length
 * candid, which leaves his face tiny in a testimonial-sized frame.)
 *
 * Keep their voice. Real reviews are specific and a little uneven; that's what
 * makes a reader believe them. Polished, balanced copy reads as fake — so don't
 * tidy the rough edges out. Never invent a quote, a name or a rating: attaching
 * invented praise to a real person (or a stock face) is a fake endorsement, and
 * fake reviews are prohibited under the Consumer Protection Act 2019 and
 * BIS IS 19000:2022, with the liability sitting on the business owner.
 */
const reviews: Review[] = [
  {
    quote:
      'Booked The Bartenders Company for my sister\'s engagement, and they did an amazing job. The bartenders were very professional, friendly with the guests, and made some really good cocktails. Highly recommended for weddings and family events.',
    name: 'Shyam',
    role: 'Engagement celebration',
    date: 'Jun 2026',
    rating: 5,
    photo: shyamSundarPhoto,
    photoZoom: 0.20,
  },
  {
    quote:
      'From the first call till the event day, the team was very responsive and cooperative. The drinks were perfectly balanced, the presentation was elegant, and the bartenders had a great attitude throughout the evening.',
    name: 'Abhirami S',
    role: 'Housewarming party',
    date: 'May 2026',
    rating: 5,
    photo: abhiramiPhoto,
    photoPosition: '42% 60%',
    photoZoom: 1.20,
  },
  {
    quote:
      "We hired them for our corporate event in Bengaluru, and the experience exceeded expectations. The team arrived on time, set up everything quickly, and served with great professionalism.",
    name: 'Rakshith',
    role: 'Corporate event, Bengaluru',
    date: 'Apr 2026',
    rating: 5,
    photo: rakshithPhoto,
    photoPosition: '50% 20%',
    photoZoom: 1.20,
  },
  {
    quote:
      'Absolutely loved the experience! We booked The Bartenders Company for my birthday celebration, and they truly made the evening special. The bartenders were polite, energetic, and interacted so well with everyone.',
    name: 'Riya Shetty',
    role: 'Birthday celebration',
    date: 'Nov 2025',
    rating: 4,
    photo: riyaShettyPhoto,
  },
];

/** Footer uses this to drop its "Testimonials" link while the section is hidden. */
export const hasReviews = reviews.length > 0;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-lemon-500 text-lemon-600" />
      ))}
    </div>
  );
}

function Avatar({ review }: { review: Review }) {
  if (review.photo) {
    const zoom = review.photoZoom ?? 1;

    return (
      <div
        role="img"
        aria-label={review.name}
        className="w-11 h-11 rounded-full ring-2 ring-lemon-500 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${review.photo})`,
          backgroundPosition: review.photoPosition ?? '50% 20%',
          backgroundSize: `${Math.max(zoom, 1) * 100}%`,
        }}
      />
    );
  }
  return (
    <div className="w-11 h-11 rounded-full bg-charcoal-950 text-lemon-500 font-semibold flex items-center justify-center ring-2 ring-lemon-500">
      {review.name.trim().charAt(0).toUpperCase()}
    </div>
  );
}

function ReviewCard({ review, i }: { review: Review; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4 }}
      className="card-light card-light-hover rounded-2xl p-7 relative group transition-all duration-300"
    >
      <Quote className="absolute top-7 right-7 w-10 h-10 text-lemon-500" />
      {review.rating ? <Stars rating={review.rating} /> : null}
      <p className="text-charcoal-700 leading-relaxed mb-6 text-sm">{review.quote}</p>
      <div className="flex items-center gap-3.5 pt-5 border-t border-charcoal-950/10">
        <Avatar review={review} />
        <div>
          <div className="font-semibold text-charcoal-950 text-sm">{review.name}</div>
          {review.role && <div className="text-xs text-charcoal-500">{review.role}</div>}
          {review.date && <div className="text-xs text-charcoal-500 mt-0.5">{review.date}</div>}
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  // Nothing real to show yet — render nothing rather than a half-finished slot.
  // Add to `reviews` above and the section returns on its own.
  if (!hasReviews) return null;

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-cream-100">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(246,222,38,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-4">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950 mb-5">
            What Our <span className="highlight-lemon">Clients Say</span>
          </h2>
          <p className="text-charcoal-600 text-lg max-w-xl mx-auto leading-relaxed">
            Real experiences from clients who trusted us with their most cherished events.
          </p>
        </FadeIn>

        {reviews.length >= 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name + i} review={r} i={i} />
            ))}
          </div>
        ) : (
          <FeaturedReview review={reviews[0]} />
        )}
      </div>
    </section>
  );
}

/** Single-review layout: big portrait beside the quote. */
function FeaturedReview({ review }: { review: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`card-light rounded-3xl overflow-hidden grid grid-cols-1 md:min-h-[28rem] ${
        review.photo ? 'md:grid-cols-[minmax(0,20rem)_1fr]' : ''
      }`}
    >
      {/* The card needs its own min-height or a short quote collapses this to a strip. */}
      {review.photo && (
        <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
          <img
            src={review.photo}
            alt={review.name}
            width={550}
            height={690}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      )}

      <div className="p-8 sm:p-10 flex flex-col justify-center relative">
        <Quote className="absolute top-8 right-8 w-10 h-10 text-lemon-500" />

        {review.rating ? <Stars rating={review.rating} /> : null}
        <blockquote className="font-serif text-2xl sm:text-3xl leading-snug text-charcoal-950 mb-6">
          “{review.quote}”
        </blockquote>
        <div className="pt-5 border-t border-charcoal-950/10">
          <div className="font-semibold text-charcoal-950">{review.name}</div>
          {review.role && (
            <div className="text-sm text-charcoal-500 mt-0.5">{review.role}</div>
          )}
          {review.date && <div className="text-sm text-charcoal-500 mt-0.5">{review.date}</div>}
        </div>
      </div>
    </motion.div>
  );
}
