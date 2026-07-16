import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';
// 4:5 crop of "Review 1.jpg" — the original is a full-length candid, which
// leaves his face tiny in a testimonial-sized frame. Original is untouched.
import reviewPhoto from '../assets/images/review-1-portrait.jpg';

type Review = {
  /** The client's own words, as close to verbatim as you have them. */
  quote: string;
  /** Their name, or a first name — whatever they're happy to be shown as. */
  name: string;
  /** Optional context, e.g. "Wedding, Dec 2025". */
  role?: string;
  /** Only the number of stars they actually gave. Omit if you didn't get one. */
  rating?: number;
  /** Optional imported photo. Leave out and their initial is used instead. */
  photo?: string;
};

/**
 * HOW TO ADD REAL REVIEWS
 * ----------------------
 * Paste them into this array — nothing else needs changing. One review renders
 * as a large featured card; two or more render as a grid. While it's empty the
 * section shows a visibly-unfinished slot, which is why it must not ship empty.
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
 * Keep their voice. Real reviews are specific and a little uneven; that's what
 * makes a reader believe them. Polished, balanced copy reads as fake — so don't
 * tidy the rough edges out. Never invent a quote, a name or a rating: attaching
 * invented praise to a real person (or a stock face) is a fake endorsement, and
 * fake reviews are prohibited under the Consumer Protection Act 2019 and
 * BIS IS 19000:2022, with the liability sitting on the business owner.
 */
const reviews: Review[] = [];

/** The photo we already have, shown while its review is still outstanding. */
const pendingPhoto = reviewPhoto;

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
    return (
      <img
        src={review.photo}
        alt={review.name}
        width={550}
        height={690}
        loading="lazy"
        className="w-11 h-11 rounded-full object-cover object-top ring-2 ring-lemon-500"
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
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
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
          {reviews.length > 0 && (
            <p className="text-charcoal-600 text-lg max-w-xl mx-auto leading-relaxed">
              Real experiences from clients who trusted us with their most cherished events.
            </p>
          )}
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
function FeaturedReview({ review }: { review?: Review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="card-light rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] md:min-h-[28rem]"
    >
      {/* The card needs its own min-height or a short quote collapses this to a strip. */}
      <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
        <img
          src={review?.photo ?? pendingPhoto}
          alt={review ? review.name : 'Client photographed at the event, accompanying their review'}
          width={550}
          height={690}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-8 sm:p-10 flex flex-col justify-center relative">
        <Quote className="absolute top-8 right-8 w-10 h-10 text-lemon-500" />

        {review ? (
          <>
            {review.rating ? <Stars rating={review.rating} /> : null}
            <blockquote className="font-serif text-2xl sm:text-3xl leading-snug text-charcoal-950 mb-6">
              “{review.quote}”
            </blockquote>
            <div className="pt-5 border-t border-charcoal-950/10">
              <div className="font-semibold text-charcoal-950">{review.name}</div>
              {review.role && (
                <div className="text-sm text-charcoal-500 mt-0.5">{review.role}</div>
              )}
            </div>
          </>
        ) : (
          <div className="rounded-xl border-2 border-dashed border-charcoal-300 bg-cream-100/60 p-6">
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-charcoal-950 bg-lemon-500 rounded px-2 py-1 mb-3">
              Placeholder — not a real review
            </span>
            <p className="text-charcoal-700 text-sm leading-relaxed">
              Add real reviews to the <code className="font-mono text-xs bg-white px-1 py-0.5 rounded border border-charcoal-200">reviews</code>{' '}
              array at the top of{' '}
              <code className="font-mono text-xs bg-white px-1 py-0.5 rounded border border-charcoal-200">
                Testimonials.tsx
              </code>
              . One shows as this featured card; two or more switch to a grid
              automatically.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
