"use client";

import FadeIn from '@/components/FadeIn';

export default function ShippingPolicy() {
    return (
        <main className="min-h-screen bg-cream text-earth pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Shipping Policy</h1>
                    <p className="text-earth-light mb-12">Transparent logistics for your bulk orders.</p>

                    <div className="prose prose-earth max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">1. Dispatch Timeline</h2>
                            <p>Orders are typically processed and dispatched within 2-3 business days after receipt of advance payment. During peak harvest season (Aug-Oct), dispatch may take 4-5 days.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">2. Transport Partners</h2>
                            <p>We work with trusted transport networks (VRL, TCI, Safexpress) for pan-India delivery. Full truck loads (FTL) are arranged directly. Part loads (PTL) are aggregated via transport hubs.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">3. Shipping Costs</h2>
                            <p>Shipping charges are "To Pay" basis (paid by the buyer to the transporter upon delivery) unless a "Door Delivery" rate is negotiated upfront.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">4. Packaging</h2>
                            <p>Standard packing is in high-density gunny bags (usually 4kg - 8kg per bag depending on grade volume) to ensure breathability and prevent moisture damage during transit.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">5. Transit Risk</h2>
                            <p>Goods are dispatched at the buyer's risk. We highly recommend opting for transit insurance, which can be arranged at a nominal additional cost (approx 1% of invoice value).</p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
