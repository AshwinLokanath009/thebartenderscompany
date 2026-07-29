import { FadeIn } from './FadeIn';

const faqs = [
  ['What areas do you serve?', 'We provide bartending and mobile bar services across Bengaluru, Bangalore and selected locations in Karnataka. Share your venue when you enquire so we can confirm availability.'],
  ['What types of events do you cater for?', 'We cater for weddings, receptions, corporate events, birthdays, house parties, engagements, anniversaries, festivals and private celebrations.'],
  ['How far in advance should I book a bartender?', 'For the best availability, contact us as soon as your date and venue are known. We also try to help with short-notice events when our team is available.'],
  ['Can you create a custom cocktail menu?', 'Yes. We can help create a cocktail and mocktail menu that suits your guests, event style and preferences.'],
  ['Do you provide mobile bar setups?', 'Yes. We can recommend a mobile bar setup and the right service format for your venue and guest count.'],
  ['Do you serve mocktails too?', 'Yes. We can include thoughtful non-alcoholic options so every guest has something enjoyable to drink.'],
  ['How many bartenders will my event need?', 'It depends on your guest count, event duration, menu and venue layout. We recommend an appropriate team size during planning.'],
  ['Can you help with weddings?', 'Yes. Our wedding bartending service can include menu planning, professional bartenders and coordinated bar service for your celebration.'],
  ['Can you handle corporate events?', 'Yes. We support corporate gatherings, launches, team celebrations and client events with polished, brand-appropriate service.'],
  ['What is included in your bartending service?', 'Service can include trained bartenders, cocktail and mocktail menu planning, bar tools, setup guidance and event coordination. Your proposal confirms the final inclusions.'],
  ['Do you provide glassware and ingredients?', 'Requirements vary by event and venue. Tell us what is already available and we will recommend what should be arranged for a smooth service.'],
  ['How do I get a quote?', 'Call, WhatsApp or use the Book Now action with your event date, venue, guest count and requirements. We will prepare a tailored quote.'],
  ['Do you cater for small house parties?', 'Yes. We can tailor a compact, high-quality service for intimate house parties and private gatherings.'],
  ['Can you work at our chosen venue?', 'Usually, yes. We coordinate with you and the venue on access, bar space, setup timing and event requirements.'],
  ['What information should I share when booking?', 'Please share the event date, location, guest count, event type, timing and whether you would like cocktails, mocktails or a mobile bar setup.'],
] as const;

export default function Faq() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-500 mb-4">Booking Questions</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950">Bartending service FAQs</h2>
          <p className="mt-5 text-charcoal-600 text-lg">Quick answers for planning a bar service in Bengaluru.</p>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-xl bg-white border border-charcoal-950/10 p-5">
              <summary className="cursor-pointer list-none font-semibold text-charcoal-950 flex justify-between gap-4">{question}<span className="text-lemon-600 group-open:rotate-45 transition-transform" aria-hidden="true">+</span></summary>
              <p className="pt-4 pr-8 text-charcoal-600 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
