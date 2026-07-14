import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import contactBg from '../assets/images/ruben-mavarez-YA8NUxf8Wmk-unsplash.jpg';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-charcoal-950 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/95 to-charcoal-950 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-500 mb-6 px-4 py-1.5 glass rounded-full gold-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Ready to Book?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Make Your Event<br />
            <span className="text-gradient-gold">Unforgettable</span>
          </h2>
          <p className="text-charcoal-400 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Get in touch today for a free consultation and custom quote. We're here
            to make your celebration extraordinary.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-charcoal-950 bg-gold-gradient shadow-xl shadow-gold-600/30 hover:shadow-gold-500/50 transition-shadow duration-200"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/919663929391"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-white glass-dark gold-border hover:bg-gold-600/10 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" />
              WhatsApp Us
            </motion.a>
          </div>
        </FadeIn>

        {/* Contact details */}
        <FadeIn delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a
              href="tel:+919663929391"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-gold-600/10 border border-gold-600/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-600/20 transition-all duration-200">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-charcoal-500 uppercase tracking-wider">Call Us</div>
                <div className="text-white font-medium group-hover:text-gold-400 transition-colors">+91 96639 29391</div>
              </div>
            </a>

            <div className="hidden sm:block w-px h-10 bg-charcoal-800" />

            <a
              href="mailto:ashwinlokanath009@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-gold-600/10 border border-gold-600/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-600/20 transition-all duration-200">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-charcoal-500 uppercase tracking-wider">Email Us</div>
                <div className="text-white font-medium group-hover:text-gold-400 transition-colors">ashwinlokanath009@gmail.com</div>
              </div>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
