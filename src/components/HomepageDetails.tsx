import { Check, ClipboardCheck, GlassWater, MapPin, Sparkles } from 'lucide-react';
import { FadeIn } from './FadeIn';

const process = [
  ['Tell us about your event', 'Share your date, venue, guest count and the kind of celebration you are planning.'],
  ['Receive a tailored plan', 'We recommend the right bar setup, team size and cocktail or mocktail menu for your event.'],
  ['Enjoy effortless service', 'Our trained bartenders arrive prepared, set up professionally and keep the drinks flowing.'],
];

const included = [
  'Professional, trained bartenders',
  'Custom cocktail and mocktail menu planning',
  'Bar tools, glassware guidance and service setup',
  'Event-ready service for intimate and large gatherings',
  'A team scaled to your guest count and venue',
  'Friendly coordination from enquiry to last call',
];

const eventTypes = ['Weddings & receptions', 'Corporate events', 'Birthdays & house parties', 'Engagements & anniversaries', 'Festivals & concerts', 'Private celebrations'];

export default function HomepageDetails() {
  return (
    <>
      <section className="section-padding bg-charcoal-950 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-lemon-400 mb-4">Why Choose Us</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">Reliable bartending services for memorable Bengaluru events</h2>
            <p className="mt-6 text-charcoal-300 text-lg leading-relaxed max-w-xl">
              The Bartenders Company brings trained people, thoughtful menus and a polished bar experience to celebrations across Bengaluru. We make hosting easier, whether you are planning a wedding, a corporate gathering or a private party.
            </p>
          </FadeIn>
          <FadeIn delay={0.12} className="grid sm:grid-cols-2 gap-5">
            {[
              ['Experienced team', 'Professional bartenders who are calm, welcoming and event-ready.'],
              ['Tailored menus', 'Cocktails and mocktails shaped around your guests and occasion.'],
              ['Smooth coordination', 'Clear planning before the event and reliable service on the day.'],
              ['Flexible setups', 'From intimate house parties to high-footfall celebrations.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Sparkles className="w-5 h-5 text-lemon-400 mb-4" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{text}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <section id="process" className="section-padding bg-cream-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="max-w-2xl mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-4">Our Process</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950">Simple booking, thoughtful bar service</h2>
            <p className="mt-5 text-charcoal-600 text-lg leading-relaxed">From your first enquiry to the final toast, we plan every detail around your event.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {process.map(([title, text], index) => (
              <FadeIn key={title} delay={index * 0.08} className="rounded-2xl bg-white p-8 border border-charcoal-950/10">
                <span className="inline-flex w-10 h-10 rounded-full items-center justify-center bg-lemon-500 text-charcoal-950 font-bold mb-6">0{index + 1}</span>
                <h3 className="font-serif text-2xl font-semibold text-charcoal-950">{title}</h3>
                <p className="mt-3 text-charcoal-600 leading-relaxed">{text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="event-types" className="section-padding bg-cream-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <FadeIn>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-4">Event Types</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950">Bartenders for every kind of celebration</h2>
            <p className="mt-5 text-charcoal-600 text-lg leading-relaxed">Our Bengaluru bartending team adapts the service, menu and setup to fit your event—not the other way around.</p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {eventTypes.map((event) => <li key={event} className="flex gap-3 items-center text-charcoal-800"><GlassWater className="w-4 h-4 text-lemon-600" aria-hidden="true" />{event}</li>)}
            </ul>
          </FadeIn>
          <FadeIn delay={0.12} className="rounded-3xl bg-charcoal-950 p-8 sm:p-10 text-white">
            <ClipboardCheck className="w-8 h-8 text-lemon-400 mb-6" aria-hidden="true" />
            <h3 className="font-serif text-3xl font-semibold">What&apos;s included</h3>
            <ul className="mt-6 space-y-4">
              {included.map((item) => <li key={item} className="flex gap-3 text-charcoal-200"><Check className="w-5 h-5 shrink-0 text-lemon-400" aria-hidden="true" />{item}</li>)}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section id="service-areas" className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <MapPin className="w-8 h-8 text-lemon-600 mx-auto mb-5" aria-hidden="true" />
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-4">Service Areas</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950">Serving Bengaluru, Bangalore and celebrations across Karnataka</h2>
            <p className="mt-6 text-charcoal-600 text-lg leading-relaxed">We serve homes, venues, offices and event spaces across Bengaluru, including Whitefield, Indiranagar, Koramangala, HSR Layout, Electronic City and surrounding areas. Planning an event elsewhere in Karnataka? Ask us about availability.</p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
