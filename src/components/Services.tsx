import { motion } from 'framer-motion';
import { GlassWater, Music, Building2, Cake, Car, Star } from 'lucide-react';
import { FadeIn } from './FadeIn';

const services = [
  {
    icon: <GlassWater className="w-7 h-7" />,
    title: 'Weddings',
    desc: 'Elegant bar setups and signature cocktails tailored to your special day — from the toast to the last dance.',
  },
  {
    icon: <Cake className="w-7 h-7" />,
    title: 'Birthday Parties',
    desc: 'Custom drink menus and professional service to make your birthday celebration truly memorable.',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Corporate Events',
    desc: 'Impress clients and colleagues with polished bartending that reflects your brand\'s excellence.',
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: 'Cocktail Catering',
    desc: 'Bespoke cocktail menus crafted with premium spirits and fresh ingredients for any occasion.',
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: 'Mobile Bar',
    desc: 'Fully equipped mobile bars brought directly to your venue — no setup headaches, only great drinks.',
  },
  {
    icon: <Music className="w-7 h-7" />,
    title: 'Private Events',
    desc: 'Festivals, concerts, house parties, and luxury events — we scale seamlessly to any crowd size.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-charcoal-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-charcoal-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, our professional bartenders
            deliver world-class service at every event.
          </p>
        </FadeIn>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass rounded-2xl p-8 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-600/10 border border-gold-600/20 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-600/20 group-hover:border-gold-500/40 transition-all duration-300">
                {s.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-charcoal-400 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-gold-600/30 to-transparent group-hover:from-gold-500/60 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
