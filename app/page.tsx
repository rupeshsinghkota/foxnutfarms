import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Marquee from '@/components/Marquee';
import LeadForm from '@/components/LeadForm';
import Testimonials from '@/components/Testimonials';
import FadeIn from '@/components/FadeIn';
import MotionHero from '@/components/MotionHero';

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-earth selection:bg-gold/30">

      {/* 1. Hero Section (Animated) */}
      <MotionHero />

      {/* 1.5 Marquee */}
      <Marquee />

      {/* 2. Trust Signals (Visual Upgrade) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="grid md:grid-cols-4 gap-6">
            {[
              { title: "GI Tagged Origin", desc: "Authentic Makhana from the specific ponds of Mithila.", icon: "🌿" },
              { title: "Direct from Farm", desc: "Sourced from 500+ Mallah community farmers.", icon: "👨‍🌾" },
              { title: "Chemical Free", desc: "Grown naturally without synthetic fertilizers.", icon: "🚫" },
              { title: "Export Grade", desc: "Machine sorted for consistent 6S+ size.", icon: "✨" }
            ].map((signal, i) => (
              <div key={i} className="bg-cream/50 p-6 rounded-2xl border border-earth/10 hover:border-gold/50 transition-colors text-center group cursor-pointer hover:-translate-y-1 transform duration-300">
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-300">{signal.icon}</div>
                <h3 className="font-serif font-bold text-earth text-lg mb-2">{signal.title}</h3>
                <p className="text-sm text-earth-light leading-relaxed">{signal.desc}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* 3. The Product (Grades) */}
      <section id="products" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4">Export Quality Grades</h2>
            <p className="text-earth-light">Sorted by size and crunch. Sourced specifically for D2C brands.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 5 Suta (Standard) */}
            <FadeIn delay={0.1}>
              <Link href="/products/5-suta-standard" className="block h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth/5 hover:border-gold/30 transition-colors group h-full">
                  <div className="h-56 bg-cream rounded-xl mb-6 relative overflow-hidden border border-earth/10">
                    <Image src="/images/grade_5s.png" alt="5 Suta Makhana" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-serif font-bold">5 Suta <span className="text-sm font-sans font-normal text-earth/60">(Standard)</span></h3>
                    <span className="text-xs bg-earth/10 px-2 py-1 rounded text-earth/60">12mm+</span>
                  </div>
                  <p className="text-sm text-earth-light mb-4 text-justify">
                    Perfect for flavoured snacks. The standard size used by major Indian retail brands. High crunch, low cost.
                  </p>
                  <div className="text-gold text-sm font-bold flex items-center gap-1 mb-4 group-hover:gap-2 transition-all">
                    View Specifications <ArrowRight size={16} />
                  </div>
                  <ul className="text-sm space-y-2 mb-6 text-earth/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Moisture: &lt;5%</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> MOQ: 50kg</li>
                  </ul>
                  <div className="text-gold font-bold text-lg">₹650 - ₹750 <span className="text-xs text-earth/50 font-normal">/ kg*</span></div>
                </div>
              </Link>
            </FadeIn>

            {/* 6 Suta (Premium) */}
            <FadeIn delay={0.2}>
              <Link href="/products/6-suta-gold" className="block h-full transform md:-translate-y-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gold/40 relative group h-full">
                  <div className="absolute top-0 right-0 bg-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg z-10">BEST SELLER</div>
                  <div className="h-56 bg-cream rounded-xl mb-6 relative overflow-hidden border border-earth/10">
                    <Image src="/images/grade_6s.png" alt="6 Suta Makhana" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-serif font-bold text-earth">6 Suta <span className="text-sm font-sans font-normal text-earth/60">(Premium)</span></h3>
                    <span className="text-xs bg-gold text-white px-2 py-1 rounded">16mm+</span>
                  </div>
                  <p className="text-sm text-earth-light mb-4 text-justify">
                    The "Goldilocks" size. Ideal for premium packaging where visual appeal matters. Retains shape after roasting.
                  </p>
                  <div className="text-gold text-sm font-bold flex items-center gap-1 mb-4 group-hover:gap-2 transition-all">
                    View Specifications <ArrowRight size={16} />
                  </div>
                  <ul className="text-sm space-y-2 mb-6 text-earth/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Moisture: &lt;4%</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> MOQ: 50kg</li>
                  </ul>
                  <div className="text-gold font-bold text-lg">₹850 - ₹950 <span className="text-xs text-earth/50 font-normal">/ kg*</span></div>
                </div>
              </Link>
            </FadeIn>

            {/* 7 Suta (Jumbo) */}
            <FadeIn delay={0.3}>
              <Link href="/products/7-suta-platinum" className="block h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth/5 hover:border-gold/30 transition-colors group h-full">
                  <div className="h-56 bg-cream rounded-xl mb-6 relative overflow-hidden border border-earth/10">
                    <Image src="/images/grade_7s.png" alt="7 Suta Makhana" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-serif font-bold">7 Suta <span className="text-sm font-sans font-normal text-earth/60">(Jumbo)</span></h3>
                    <span className="text-xs bg-earth/10 px-2 py-1 rounded text-earth/60">19mm+</span>
                  </div>
                  <p className="text-sm text-earth-light mb-4 text-justify">
                    The largest commercially available size. For ultra-premium luxury gifting or export markets.
                  </p>
                  <div className="text-gold text-sm font-bold flex items-center gap-1 mb-4 group-hover:gap-2 transition-all">
                    View Specifications <ArrowRight size={16} />
                  </div>
                  <ul className="text-sm space-y-2 mb-6 text-earth/80">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Moisture: &lt;3%</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> MOQ: 100kg</li>
                  </ul>
                  <div className="text-gold font-bold text-lg">₹1200+ <span className="text-xs text-earth/50 font-normal">/ kg*</span></div>
                </div>
              </Link>
            </FadeIn>
          </div>
          <p className="text-center text-xs text-earth-light mt-8 italic">*Prices subject to market fluctuation. Rates updated weekly.</p>
        </div>
      </section>

      {/* 3.5 Testimonials */}
      <Testimonials />

      {/* 4. Story Section */}
      <section id="story" className="py-24 px-6 bg-earth text-cream relative overflow-hidden">
        <FadeIn className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold tracking-widest uppercase text-xs font-bold mb-2 block">Our Origin</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Born in the Ponds of Mithila</h2>
              <p className="text-cream/80 text-lg leading-relaxed mb-6">
                Makhana isn't just a crop; it's a craft. In the wetlands of Bihar, farmers dive deep into ponds to harvest these thorny lilies.
                <br /><br />
                Most brands buy from 3rd or 4th layer middlemen in Delhi. We don't. We work with the harvesting communities in Darbhanga to bring you the "Phool" (popped seed) directly.
              </p>
            </div>
            <div className="h-96 w-full relative rounded-2xl overflow-hidden border border-cream/20 group">
              <Image
                src="/images/farmer_harvest.png"
                alt="Farmer Harvesting Makhana"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/80 to-transparent" />
              <p className="absolute bottom-6 left-6 text-sm font-medium italic text-cream/80">A Mallah farmer in Darbhanga district during harvest.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 4.5 FAQ Section */}
      <section className="py-20 px-6 bg-cream">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4">Frequently Asked Questions</h2>
            <p className="text-earth-light">Common questions from our wholesale partners.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is your Minimum Order Quantity (MOQ)?", a: "Our standard MOQ is 50kg for domestic orders. This allows us to offer true wholesale pricing." },
              { q: "Do you offer samples?", a: "Yes, we offer a paid sample kit containing 250g of each grade (5S, 6S, 7S) so you can verify the quality before bulk booking." },
              { q: "Are prices inclusive of GST and Shipping?", a: "No, the listed rates are ex-factory. GST (5%) and Transport charges are extra at actuals." },
              { q: "Can you do private white-label packaging?", a: "Absolutely. We supply plain pouches or can print your brand packaging for orders above 500kg." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-earth/10 open:border-gold/40 transition-colors">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-earth list-none">
                  <span className="text-lg font-serif font-bold">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-0 text-earth-light/80 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 5. Contact / Lead Form */}
      <FadeIn>
        <LeadForm />
      </FadeIn>

    </main>
  );
}
