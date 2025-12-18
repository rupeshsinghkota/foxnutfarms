"use client";

import FadeIn from '@/components/FadeIn';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-cream text-earth pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Terms of Service</h1>
                    <p className="text-earth-light mb-12">Last Updated: December 19, 2025</p>

                    <div className="prose prose-earth max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">1. Wholesale Agreement</h2>
                            <p>By placing a wholesale order with FoxNut Farms, you agree to the terms outlined herein. We supply bulk Phool Makhana primarily for commercial use (B2B).</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">2. Pricing & Payment</h2>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>All prices are Ex-Factory Darbhanga unless specified otherwise.</li>
                                <li>Prices fluctuate weekly based on local Mandi rates. The price at the time of booking is final.</li>
                                <li>Payment Terms: 50% Advance upon booking, and remaining 50% before dispatch.</li>
                                <li>GST (5%) is applicable on all orders within India.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">3. Quality & Grading</h2>
                            <p>We adhere to strict sizing standards (5 Suta, 6 Suta, etc.). However, as Makhana is a natural agricultural product, slight variations in size/shape (up to 5%) may occur and are considered acceptable industry standards.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">4. Returns & Rejections</h2>
                            <p>Inspection must be done upon delivery. Any quality complaints must be raised within 48 hours of receipt with video evidence. Valid quality issues will be addressed via replacement or credit note.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">5. Jurisdiction</h2>
                            <p>All disputes are subject to the exclusive jurisdiction of the courts in Darbhanga, Bihar.</p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
