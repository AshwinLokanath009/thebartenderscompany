import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { LogoStacked } from './Logo';
import { hasReviews } from './Testimonials';

// The testimonials section hides itself until there are real reviews, so its
// link is filtered out too — otherwise it scrolls to nothing.
const quickLinks = [
  { label: 'Home',          href: '#home' },
  { label: 'Services',      href: '#services' },
  { label: 'Gallery',       href: '#gallery' },
  ...(hasReviews ? [{ label: 'Testimonials', href: '#testimonials' }] : []),
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
    <footer className="bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <LogoStacked className="h-24 w-auto" />
            </div>
            <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
              Premium bartending services for every occasion. Crafting unforgettable
              experiences, one cocktail at a time.
            </p>
            <p className="text-charcoal-500 text-sm mb-6">
              Founded &amp; run by <span className="text-charcoal-300 font-medium">Ashwin Lokanath</span>
              <span className="block text-charcoal-600 text-xs mt-0.5">Bengaluru · Since 2024</span>
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-charcoal-400 hover:text-lemon-500 hover:border-lemon-500/50 transition-all duration-200"
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
                    className="text-charcoal-500 hover:text-lemon-500 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-lemon-500/50 group-hover:bg-lemon-500 transition-colors" />
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
                  <span className="w-1 h-1 rounded-full bg-lemon-500/50" />
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
                <a href="tel:+919663929391" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-lemon-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-500 text-sm group-hover:text-charcoal-300 transition-colors">+91 96639 29391</span>
                </a>
              </li>
              <li>
                <a href="mailto:ashwinlokanath009@gmail.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-lemon-500 mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal-500 text-sm group-hover:text-charcoal-300 transition-colors break-all">ashwinlokanath009@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lemon-500 mt-0.5 flex-shrink-0" />
                <span className="text-charcoal-500 text-sm">Bengaluru, India &amp; surrounding areas</span>
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
