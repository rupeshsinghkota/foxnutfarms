"use client";

import FadeIn from '@/components/FadeIn';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-cream text-earth pt-32 pb-24 px-6">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Privacy Policy</h1>
                    <p className="text-earth-light mb-12">Last Updated: December 19, 2025</p>

                    <div className="prose prose-earth max-w-none space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">1. Introduction</h2>
                            <p>Welcome to FoxNut. We are committed to protecting your personal information and your right to privacy. This policy outlines how we handle the data you provide to us, particularly when you download our wholesale price lists or inquire about bulk orders.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">2. Information We Collect</h2>
                            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products. This includes:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Names</li>
                                <li>Phone Numbers (WhatsApp)</li>
                                <li>Company Names</li>
                                <li>Email Addresses</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">3. How We Use Your Information</h2>
                            <p>We use the information we collect or receive:</p>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>To send you the requested wholesale price lists and product catalogs.</li>
                                <li>To communicate with you about your orders or inquiries via WhatsApp or Email.</li>
                                <li>To send you updates about new harvests, price fluctuations (Mandi rates), and seasonal offers.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">4. Data Sharing</h2>
                            <p>We are direct aggregators and do not sell, lease, or trade your personal information to third parties. Your data is used strictly for internal business purposes to facilitate your wholesale purchases.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-serif mb-4">5. Contact Us</h2>
                            <p>If you have questions or comments about this policy, you may email us at hello@foxnutfarms.com or contact us by post at:</p>
                            <address className="not-italic mt-2">
                                FoxNut Farms<br />
                                Darbhanga, Bihar 846004<br />
                                India
                            </address>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
