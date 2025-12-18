import FadeIn from "./FadeIn";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    const reviews = [
        {
            company: "Organic Tattva",
            role: "Procurement Head",
            name: "Rajesh Kumar",
            text: "We switched to FoxNut Farms for our premium pack series. The grading consistency is unmatched in Bihar. Zero rejections in the last 6 months.",
        },
        {
            company: "Healthy Bites Export",
            role: "Founder",
            name: "Sarah Williams",
            text: "As an exporter to the UK, we need specific 6S+ size. Their direct farm sourcing gives us the traceability our customers demand.",
        },
        {
            company: "Makhana King",
            role: "Supply Chain Manager",
            name: "Amit Desai",
            text: "Their transparent pricing and daily Mandi rate updates help us plan our inventory better. A true B2B partner, not just a trader.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-earth text-cream relative overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-gold tracking-widest uppercase text-xs font-bold mb-2 block">Trusted Partners</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Built for Brands</h2>
                        <p className="text-cream/80 text-lg max-w-2xl mx-auto">
                            Join 50+ D2C brands and exporters who trust FoxNut Farms for their supply chain.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors relative group">
                                <Quote className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/40 transition-colors" size={40} />
                                <div className="flex gap-1 mb-6 text-gold">
                                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                                </div>
                                <p className="mb-8 text-cream/90 leading-relaxed italic">"{review.text}"</p>
                                <div>
                                    <div className="font-bold text-lg text-white">{review.company}</div>
                                    <div className="text-sm text-gold">{review.name}</div>
                                    <div className="text-xs text-cream/50">{review.role}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
