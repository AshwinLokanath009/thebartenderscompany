import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { FadeIn } from './FadeIn';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Wedding Client',
    rating: 5,
    text: 'The Bartenders Company transformed our wedding reception into an absolutely magical evening. The bartenders were professional, personable, and the custom cocktails were the talk of the night!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'James Thornton',
    role: 'Corporate Event Manager',
    rating: 5,
    text: 'We hired The Bartenders Company for our annual gala and they exceeded every expectation. Flawless execution, premium spirits, and a team that genuinely cares about delivering an exceptional experience.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Priya Kapoor',
    role: 'Birthday Party Host',
    rating: 5,
    text: 'Absolutely incredible! They created a personalized cocktail menu for my 30th and every single drink was outstanding. Our guests are still talking about it months later.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
  {
    name: 'Marcus Webb',
    role: 'Festival Organizer',
    rating: 5,
    text: 'Managed a 2,000-person festival with zero hitches. The mobile bar team was quick, efficient, and incredibly professional. Will absolutely use The Bartenders Company for every future event.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&q=80',
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080808 0%, #0d0d0d 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(ellipse at center, rgba(212,160,23,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
            Client Stories
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-charcoal-400 text-lg max-w-xl mx-auto leading-relaxed">
            Real experiences from clients who trusted us with their most cherished events.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-7 relative group"
            >
              {/* Quote icon */}
              <Quote className="absolute top-7 right-7 w-10 h-10 text-gold-500/15 group-hover:text-gold-500/25 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              <p className="text-charcoal-300 leading-relaxed mb-6 text-sm">{t.text}</p>

              <div className="flex items-center gap-3.5 pt-5 border-t border-gold-600/15">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-gold-500/30"
                />
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gold-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
