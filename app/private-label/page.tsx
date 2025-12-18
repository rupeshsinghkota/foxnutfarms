"use client";

import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Package, PenTool, Truck } from 'lucide-react';

export default function PrivateLabel() {
    return (
        <main className="min-h-screen bg-cream text-earth selection:bg-gold/30 pt-0">

            {/* 1. Hero */}
            <section className="relative pt-6 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    {/* Abstract Pattern */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[100px]" />
                </div>

                <FadeIn className="relative z-10 max-w-4xl mx-auto text-center">
                    <span className="inline-block py-1 px-4 border border-earth/20 rounded-full text-xs font-serif tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-md">
                        Contract Manufacturing
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 text-earth leading-tight">
                        Your Brand. <span className="italic text-gold">Our Makhana.</span>
                    </h1>
                    <p className="text-xl text-earth-light/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                        Launch your own premium Makhana brand with zero manufacturing capex.
                        From raw sorting to roasting and retail packaging—we handle it all.
                    </p>
                    <Link href="#starter-kit" className="bg-earth text-cream px-8 py-4 rounded-full text-lg font-bold hover:bg-earth-light transition-all shadow-xl shadow-earth/10">
                        View Startup Package
                    </Link>
                </FadeIn>
            </section>

            {/* 2. Services Grid */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <FadeIn className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 md:p-8 rounded-2xl bg-cream/30 border border-earth/5 hover:border-gold/30 transition-colors">
                            <Package className="text-gold mb-6" size={40} />
                            <h3 className="text-2xl font-serif font-bold mb-3">Private Labeling</h3>
                            <p className="text-earth-light">We pack into your branded pouches or jars. You send the design, we handle printing, filling, and sealing.</p>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl bg-cream/30 border border-earth/5 hover:border-gold/30 transition-colors">
                            <PenTool className="text-gold mb-6" size={40} />
                            <h3 className="text-2xl font-serif font-bold mb-3">Custom Flavors</h3>
                            <p className="text-earth-light">Beyond plain. We offer roasting and flavoring services (Peri-Peri, Cream & Onion, Himalayan Salt) with low MOQs.</p>
                        </div>
                        <div className="p-6 md:p-8 rounded-2xl bg-cream/30 border border-earth/5 hover:border-gold/30 transition-colors">
                            <Truck className="text-gold mb-6" size={40} />
                            <h3 className="text-2xl font-serif font-bold mb-3">Bulk & Export</h3>
                            <p className="text-earth-light">FSSAI compliant facility capable of handling 20MT/month. Docs provided for export (Phytosanitary, Origin).</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3. The "Startup Kit" (Competitor Inspiration) */}
            <section id="starter-kit" className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <FadeIn>
                        <div className="bg-earth text-cream rounded-3xl p-6 md:p-12 relative overflow-hidden shadow-2xl">
                            {/* Decorative BG */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20" />

                            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                <div>
                                    <div className="inline-block bg-gold text-earth font-bold text-xs px-3 py-1 rounded-md mb-4 uppercase tracking-wider">
                                        Limited Time Offer
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">The "Makhana Entrepreneur" Kit</h2>
                                    <p className="text-cream/80 text-lg mb-8">
                                        Launch your D2C brand in 7 days. Ideally suited for testing the market before committing to tons.
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="text-gold" /> <span>100 Retail Jars (100g each)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="text-gold" /> <span>Custom Sticker Labeling (Your Logo)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="text-gold" /> <span>3 Flavors Included (Salt, Spice, Cheese)</span>
                                        </li>
                                        <li className="flex items-center gap-3">
                                            <CheckCircle2 className="text-gold" /> <span>Delivered to your Doorstep</span>
                                        </li>
                                    </ul>

                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                        <div>
                                            <span className="block text-sm text-cream/60 line-through">₹20,000</span>
                                            <span className="block text-4xl font-bold text-gold">₹14,999</span>
                                        </div>
                                        <Link href="/#contact" className="w-full sm:w-auto text-center bg-white text-earth px-8 py-3 rounded-full font-bold hover:bg-gold hover:text-white transition-colors">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>

                                {/* Mockup Image */}
                                <div className="bg-white/10 rounded-2xl h-64 md:h-80 flex items-center justify-center border border-white/10 relative overflow-hidden group">
                                    <Image
                                        src="/images/private_label_jars.png"
                                        alt="Private Label Makhana Sample Jars"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 4. Process Steps */}
            <section className="py-24 px-6 bg-cream">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-serif font-bold text-earth mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Choose Product", desc: "Select Grade (5S/6S) or Flavor profile." },
                            { step: "02", title: "Send Design", desc: "Email us your logo and packaging files." },
                            { step: "03", title: "Production", desc: "We sort, roast, flavor, and pack in 3-5 days." },
                            { step: "04", title: "Launch", desc: "Receive retail-ready stock and start selling." },
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-bold text-earth/5 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-earth mb-2">{item.title}</h3>
                                <p className="text-sm text-earth-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
