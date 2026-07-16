import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Users, Martini, MapPin } from 'lucide-react';
import { FadeIn } from './FadeIn';

/**
 * Credibility stats band — icon, count-up number, label.
 * These are the real figures (confirmed in cd4cdbf); they aren't placeholders.
 */
const stats = [
  { icon: Users,   value: 150, suffix: '+', label: 'Events Served' },
  { icon: Martini, value: 25,  suffix: '+', label: 'Expert Bartenders' },
  { icon: MapPin,  value: 3,   suffix: '',  label: 'Cities Served' },
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
      <div className="relative w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-charcoal-950">
        <Icon className="relative w-8 h-8 text-lemon-500" strokeWidth={1.5} />
      </div>
      <div className="font-serif font-bold text-5xl sm:text-6xl text-charcoal-950 tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm tracking-wide font-medium text-charcoal-950/70">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-padding bg-lemon-500 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <FadeIn className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-charcoal-950/60 mb-4">
            By the Numbers
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-950">
            Why The Bartenders Company
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
