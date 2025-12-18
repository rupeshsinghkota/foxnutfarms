"use client";

import { useState } from 'react';
import { Download, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { submitToGoogleSheets } from '@/lib/submitForm';

export default function LeadForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        await submitToGoogleSheets(formData);

        // Simulate download delay for UX
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            // Trigger download of the dummy file
            const link = document.createElement('a');
            link.href = '/FoxNut_Wholesale_Rates_Dec25.txt';
            link.download = 'FoxNut_Wholesale_Rates_Dec25.txt';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 px-6 bg-earth/5">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-earth/10 relative overflow-hidden">

                    {/* Decorative Background Icon */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 text-earth/5 rotate-12">
                        <FileText size={200} />
                    </div>

                    <div className="text-center mb-10 relative z-10">
                        <div className="inline-flex items-center gap-2 bg-gold/10 text-earth font-bold px-4 py-1.5 rounded-full text-sm mb-4 border border-gold/20">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Live Market Rates
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-earth mb-3 leading-tight">
                            Download Today's Wholesale Price List
                        </h2>
                        <p className="text-earth-light max-w-lg mx-auto">
                            Get instant access to our Ex-Factory rates for 5S, 6S, and 7S grades. Updated daily based on Mandi prices.
                        </p>
                    </div>

                    {isSuccess ? (
                        <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-earth mb-2">Download Started!</h3>
                            <p className="text-earth-light mb-8">
                                Please check your downloads folder for the rate sheet. Our team will also contact you on WhatsApp shortly.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="text-gold font-bold hover:underline"
                            >
                                Download Again
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-earth">Your Name</label>
                                    <input required name="name" type="text" className="w-full px-4 py-3 rounded-lg border border-earth/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/30" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-earth">Company Name</label>
                                    <input required name="company" type="text" className="w-full px-4 py-3 rounded-lg border border-earth/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/30" placeholder="Healthy Snacks Pvt Ltd" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-earth">WhatsApp Number</label>
                                <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-earth/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/30" placeholder="+91 98765 43210" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-earth">Purpose</label>
                                <select name="purpose" className="w-full px-4 py-3 rounded-lg border border-earth/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-cream/30">
                                    <option>Wholesale Purchase</option>
                                    <option>Export Inquiry</option>
                                    <option>Private Labeling</option>
                                    <option>Raw Material Sourcing</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gold hover:bg-gold-light text-earth font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin" /> Preparing PDF...
                                    </>
                                ) : (
                                    <>
                                        <Download size={20} /> Download Price List
                                    </>
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-4 text-xs text-earth/40 mt-4">
                                <span className="flex items-center gap-1"><FileText size={12} /> PDF Format</span>
                                <span>•</span>
                                <span>Updated: Today</span>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
