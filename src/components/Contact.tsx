import { Phone, Mail, MessageCircle, Instagram, MapPin, ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { trackLead } from '../lib/analytics';
import contactBg from '../assets/images/ruben-mavarez-YA8NUxf8Wmk-unsplash.webp';

export default function Contact() {
  return (
    <section className="section-padding bg-lemon-500 relative overflow-hidden">
      {/* Photo texture, multiplied into the lemon so it tints rather than greys
          out. Kept faint and blurred — at full detail the bottles read as
          stains on the yellow rather than texture. */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
          filter: 'blur(3px)',
        }}
      />

      <div className="max-w-4xl mx-auto relative text-center">
        <FadeIn>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-lemon-500 mb-6 px-4 py-1.5 bg-charcoal-950 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-lemon-500 animate-pulse" />
            Ready to Book?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-950 mb-6 leading-tight">
            Let's Make Your Event<br />
            Unforgettable
          </h2>
          <p className="text-charcoal-950/75 text-lg max-w-xl mx-auto leading-relaxed mb-12">
            Get in touch today for a free consultation and custom quote. We're here
            to make your celebration extraordinary.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="tel:+919148624249"
              onClick={() => trackLead({ action: 'phone_click', label: '+91 91486 24249', location: 'contact_cta' })}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-lemon-500 bg-charcoal-950 shadow-xl shadow-charcoal-950/20 hover:bg-charcoal-900 transition-colors duration-200"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/919148624249"
              onClick={() => trackLead({ action: 'whatsapp_click', label: 'WhatsApp', location: 'contact_cta' })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-charcoal-950 bg-white border border-charcoal-950/15 hover:bg-cream-100 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </FadeIn>

        {/* Contact details */}
        <FadeIn delay={0.25}>
          {/* Stacked on mobile: the rows are different widths (the email is
              longer), so centring each one individually leaves the icons on a
              ragged left edge. Left-align them to a shared edge and centre the
              group as a block instead. */}
          <div className="flex flex-col items-start w-fit mx-auto gap-6 sm:w-auto sm:mx-0 sm:flex-row sm:items-center sm:justify-center sm:gap-12">
            <a
              href="tel:+919148624249"
              onClick={() => trackLead({ action: 'phone_click', label: '+91 91486 24249', location: 'contact_details' })}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-charcoal-950 flex items-center justify-center text-lemon-500 group-hover:bg-charcoal-900 transition-all duration-200">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-charcoal-950/60 uppercase tracking-wider">Call Us</div>
                <div className="text-charcoal-950 font-medium group-hover:underline">+91 91486 24249</div>
              </div>
            </a>

            <div className="hidden sm:block w-px h-10 bg-charcoal-950/20" />

            <a
              href="mailto:ashwinlokanath009@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-charcoal-950 flex items-center justify-center text-lemon-500 group-hover:bg-charcoal-900 transition-all duration-200">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-charcoal-950/60 uppercase tracking-wider">Email Us</div>
                <div className="text-charcoal-950 font-medium group-hover:underline">ashwinlokanath009@gmail.com</div>
              </div>
            </a>

            <div className="hidden sm:block w-px h-10 bg-charcoal-950/20" />

            <a
              href="https://www.instagram.com/the_bartenderscompany"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead({ action: 'instagram_click', label: '@the_bartenderscompany', location: 'contact_details' })}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-charcoal-950 flex items-center justify-center text-lemon-500 group-hover:bg-charcoal-900 transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-charcoal-950/60 uppercase tracking-wider">Follow Us</div>
                <div className="text-charcoal-950 font-medium group-hover:underline">@the_bartenderscompany</div>
              </div>
            </a>
          </div>
        </FadeIn>

        {/* Location map — reinforces local relevance for "near me" / Bengaluru
            searches and lets guests find the base. Lazy-loaded so it never
            blocks first paint. */}
        <FadeIn delay={0.35}>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4 text-charcoal-950/70 text-sm">
              <MapPin className="w-4 h-4 text-charcoal-950" />
              <span>Bengaluru, Karnataka · Serving events across the city</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-charcoal-950/10 shadow-sm">
              <iframe
                title="The Bartenders Company location in Bengaluru"
                src="https://www.google.com/maps?q=The+Bartenders+Company,+Mariyappana+Palya,+Jnana+Ganga+Nagar,+Bengaluru,+Karnataka+560056&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
