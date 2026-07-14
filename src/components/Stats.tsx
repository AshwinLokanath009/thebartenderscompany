import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Users, Martini, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

/**
 * Credibility stats band — icon in a yellow radial glow, count-up number, label.
 * NOTE: the numbers below are placeholders — replace `value`/`suffix` with the
 * real figures for The Bartenders Company.
 */
const stats = [
  { icon: Users,   value: 250, suffix: '+', label: 'Guests Served' },
  { icon: Martini, value: 30,  suffix: '+', label: 'Expert Bartenders' },
  { icon: MapPin,  value: 6,   suffix: '',  label: 'Cities Served' },
];

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return n;
}

function StatItem({ icon: Icon, value, suffix, label }: (typeof stats)[number]) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(closest-side, rgba(247,209,48,0.9), rgba(247,209,48,0.18) 58%, transparent 74%)',
          }}
        />
        <Icon className="relative w-9 h-9 text-charcoal-950" strokeWidth={1.5} />
      </div>
      <div className="font-serif font-bold text-4xl sm:text-5xl text-gradient-gold tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm tracking-wide text-charcoal-400">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-charcoal-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4">
            By the Numbers
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Why <span className="text-gradient-gold">The Bartenders Company</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
