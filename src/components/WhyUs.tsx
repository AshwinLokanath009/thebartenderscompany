import { motion } from 'framer-motion';
import { Award, Sparkles, BookOpen, Users, DollarSign } from 'lucide-react';
import { FadeIn } from './FadeIn';
import whyUsImg from '../assets/images/rush-energy-drink-KcjvOEWfvtM-unsplash.jpg';

const reasons = [
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Experienced Bartenders',
    desc: 'Our team brings years of professional experience and a passion for the craft to every event.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Premium Service',
    desc: 'White-glove hospitality from setup to the final pour — we treat every guest like a VIP.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Custom Cocktail Menus',
    desc: 'We design bespoke drink menus that complement your event theme and guest preferences.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Professional Team',
    desc: 'Uniformed, punctual, and trained — our staff elevates your event\'s atmosphere effortlessly.',
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Affordable Packages',
    desc: 'Luxury service doesn\'t have to break the bank. Flexible packages to suit any budget.',
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080808 0%, #111111 50%, #080808 100%)' }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,160,23,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(212,160,23,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image */}
          <FadeIn direction="right" className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src={whyUsImg}
                alt="Bartender pouring a craft cocktail over ice"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 glass-dark rounded-2xl p-5 shadow-xl shadow-black/40"
            >
              <div className="text-3xl font-bold font-serif text-gradient-gold">8+</div>
              <div className="text-xs text-charcoal-400 uppercase tracking-wider mt-1">Years of Excellence</div>
            </motion.div>
            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold-500/40 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold-500/40 rounded-br-2xl" />
          </FadeIn>

          {/* Right — content */}
          <div>
            <FadeIn direction="left">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
                Why Choose Us
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
                The Gold Standard<br />
                <span className="text-gradient-gold">in Bartending</span>
              </h2>
              <p className="text-charcoal-400 text-lg leading-relaxed mb-10">
                We don't just serve drinks — we craft experiences. Every detail is handled
                with precision so you can focus on enjoying your event.
              </p>
            </FadeIn>

            <div className="space-y-5">
              {reasons.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.08} direction="left">
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 p-5 glass rounded-xl group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gold-600/10 border border-gold-600/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-600/20 transition-all duration-300">
                      {r.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{r.title}</h3>
                      <p className="text-charcoal-400 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
