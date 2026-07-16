import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';
// 4:5 crop of "Review 1.jpg" — the original is a full-length candid, which
// leaves his face tiny in a testimonial-sized frame. Original is untouched.
import reviewPhoto from '../assets/images/review-1-portrait.jpg';

/**
 * TODO(launch): paste the client's actual review below.
 *
 * `quote` is intentionally null. The photo is of a real, identifiable person,
 * so the section renders as visibly unfinished until his real words are in —
 * an invented quote under a real face is a fake endorsement, not a placeholder.
 * Set `quote`, `name` and `rating` together, or leave all three alone.
 *
 * Keep it in his voice when it lands — a real review is specific and a bit
 * uneven ("they turned up early and just got on with it"), not balanced
 * marketing copy. Don't smooth out the rough edges; those are what make a
 * reader believe it. Only set `rating` to the number of stars he actually gave.
 */
const review: {
  quote: string | null;
  name: string;
  role: string;
  rating: number | null;
} = {
  quote: null,
  name: '',
  role: '',
  rating: null,
};

export default function Testimonials() {
  const isPending = !review.quote;

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="card-light rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,20rem)_1fr] md:min-h-[28rem]"
        >
          {/* Photo — cropped to head and shoulders; the full frame trails off
              into chair and floor that add nothing to a testimonial. The card
              needs its own min-height or a short quote collapses this to a strip. */}
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
            <img
              src={reviewPhoto}
              alt="Client photographed at the event, accompanying their review"
              width={550}
              height={690}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Quote */}
          <div className="p-8 sm:p-10 flex flex-col justify-center relative">
            <Quote className="absolute top-8 right-8 w-10 h-10 text-lemon-500" />

            {review.rating !== null && (
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-lemon-500 text-lemon-600" />
                ))}
              </div>
            )}

            {isPending ? (
              <div className="rounded-xl border-2 border-dashed border-charcoal-300 bg-cream-100/60 p-6">
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-charcoal-950 bg-lemon-500 rounded px-2 py-1 mb-3">
                  Placeholder — not a real review
                </span>
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  Paste the client's own words here, in his voice, along with his name
                  and the star rating he actually gave. See the TODO at the top of{' '}
                  <code className="font-mono text-xs bg-white px-1 py-0.5 rounded border border-charcoal-200">
                    Testimonials.tsx
                  </code>
                  .
                </p>
              </div>
            ) : (
              <>
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
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
