import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { LogoMark } from './Logo';

const quickLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'Services',      href: '#services' },
  { label: 'Gallery',       href: '#gallery' },
  { label: 'Testimonials',  href: '#testimonials' },
  { label: 'Contact',       href: '#contact' },
];

const services = [
  'Wedding Bartending',
  'Corporate Events',
  'Birthday Parties',
  'Cocktail Catering',
  'Mobile Bar Hire',
  'Festival Bar',
];

const socials = [
  { icon: <Instagram className="w-4 h-4" />, href: '#' },
  { icon: <Facebook className="w-4 h-4" />,  href: '#' },
  { icon: <Twitter className="w-4 h-4" />,   href: '#' },
  { icon: <Youtube className="w-4 h-4" />,   href: '#' },
];

export default function Footer() {
  const scroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-charcoal-950 border-t border-gold-600/15">
      {/* Top gradient line */}
      <div className="h-px bg-gold-gradient opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-md shadow-gold-600/30">
                <LogoMark className="w-7 h-7 text-charcoal-950" />
              </div>
              <span className="font-serif font-black leading-none tracking-tight">
                <span className="block text-[15px] uppercase text-gradient-gold">The Bartenders</span>
                <span className="block text-[11px] uppercase tracking-[0.35em] text-white/90">Company</span>
              </span>
            </div>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-6">
              Premium bartending services for every occasion. Crafting unforgettable
              experiences, one cocktail at a time.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scroll(l.href)}
                    className="text-charcoal-500 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600/40 group-hover:bg-gold-400 transition-colors" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-charcoal-500 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-600/40" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+1234567890" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-500 text-sm group-hover:text-charcoal-300 transition-colors">+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@thebartenderscompany.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-500 text-sm group-hover:text-charcoal-300 transition-colors">hello@thebartenderscompany.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-500 text-sm">New York, NY & Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-charcoal-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-600 text-xs">
            &copy; {new Date().getFullYear()} The Bartenders Company. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-charcoal-600 hover:text-charcoal-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-charcoal-600 hover:text-charcoal-400 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
