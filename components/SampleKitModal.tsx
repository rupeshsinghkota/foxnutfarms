"use client";

import { submitToGoogleSheets } from '@/lib/submitForm';
import { useState, useRef } from 'react';
import { X, CheckCircle2, ChevronRight, Loader2, MapPin, BadgeCheck, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'details' | 'payment' | 'success';

interface SampleKitModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName?: string;
}

export default function SampleKitModal({ isOpen, onClose, productName }: SampleKitModalProps) {
    const [step, setStep] = useState<Step>('details');
    const [isLoading, setIsLoading] = useState(false);

    // Form State
    const [form, setForm] = useState({
        name: '',
        phone: '',
        company: '',
        address: '',
        purpose: 'Sample Testing'
    });

    if (!isOpen) return null;

    const handleNext = () => {
        setIsLoading(true);
        // Simulate "Processing"
        setTimeout(() => {
            setIsLoading(false);
            setStep('payment');
        }, 800);
    };

    const handlePaymentConfirm = async () => {
        setIsLoading(true);

        // Prepare data for Google Sheets
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("company", form.company);
        formData.append("purpose", form.purpose);
        formData.append("address", form.address);
        formData.append("productInterest", productName || "General Sampler");
        formData.append("paymentStatus", "PAID_VIA_UPI");

        await submitToGoogleSheets(formData);

        setTimeout(() => {
            setIsLoading(false);
            setStep('success');
        }, 1500);
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-earth/60 backdrop-blur-sm transition-opacity"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
                        className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 w-full max-w-2xl flex flex-col md:flex-row"
                    >

                        {/* Left: Product Image (Hidden on very small mobile to save space) */}
                        <div className="hidden md:block w-2/5 bg-cream relative">
                            <Image
                                src="/images/private_label_jars.png"
                                alt="Sample Kit Box"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-earth/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-cream">
                                <span className="text-gold text-xs font-bold uppercase tracking-widest">Quality Verified</span>
                                <h3 className="text-2xl font-serif font-bold mt-1 max-w-[80%] leading-tight">
                                    {productName ? `Sample: ${productName}` : "Complete Sampler Box"}
                                </h3>
                                <p className="text-sm opacity-80 mt-2">
                                    {productName ? "Try this specific grade before bulk ordering." : "Try all export grades before you buy bulk."}
                                </p>
                            </div>
                        </div>

                        {/* Right: Steps */}
                        <div className="flex-1 p-6 md:p-8 flex flex-col relative bg-white overflow-y-auto">
                            <button onClick={onClose} className="absolute top-4 right-4 text-earth/40 hover:text-earth transition-colors z-10">
                                <X size={24} />
                            </button>

                            {/* Step Indictator */}
                            <div className="flex items-center gap-2 mb-8 text-xs font-bold tracking-wider text-earth/30 uppercase">
                                <span className={step === 'details' ? 'text-gold' : 'text-earth'}>01 Details</span>
                                <span className="h-px w-8 bg-earth/10" />
                                <span className={step === 'payment' ? 'text-gold' : step === 'success' ? 'text-earth' : 'text-earth/30'}>02 Pay</span>
                                <span className="h-px w-8 bg-earth/10" />
                                <span className={step === 'success' ? 'text-green-600' : 'text-earth/30'}>03 Done</span>
                            </div>

                            {/* STEP 1: DETAILS */}
                            {step === 'details' && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col">
                                    <h2 className="text-2xl font-serif font-bold text-earth mb-2">Where do we ship?</h2>
                                    <p className="text-sm text-earth-light mb-6">Enter your address for courier delivery.</p>

                                    <div className="space-y-4 flex-1">
                                        <input
                                            type="text" placeholder="Full Name"
                                            className="w-full p-4 bg-white rounded-xl border-2 border-earth/20 focus:border-gold focus:outline-none transition-colors text-earth placeholder:text-earth/40"
                                            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        />
                                        <input
                                            type="tel" placeholder="Mobile Number"
                                            className="w-full p-4 bg-white rounded-xl border-2 border-earth/20 focus:border-gold focus:outline-none transition-colors text-earth placeholder:text-earth/40"
                                            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        />
                                        <input
                                            type="text" placeholder="Company Name"
                                            className="w-full p-4 bg-white rounded-xl border-2 border-earth/20 focus:border-gold focus:outline-none transition-colors text-earth placeholder:text-earth/40"
                                            value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        />
                                        <select
                                            className="w-full p-4 bg-white rounded-xl border-2 border-earth/20 focus:border-gold focus:outline-none transition-colors text-earth"
                                            value={form.purpose} onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                                        >
                                            <option>Sample Testing</option>
                                            <option>Wholesale Purchase</option>
                                            <option>Export Inquiry</option>
                                            <option>Private Labeling</option>
                                        </select>
                                        <textarea
                                            placeholder="Full Address with Pincode" rows={3}
                                            className="w-full p-4 bg-white rounded-xl border-2 border-earth/20 focus:border-gold focus:outline-none transition-colors text-earth placeholder:text-earth/40"
                                            value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })}
                                        />
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-earth/5 flex items-center justify-between">
                                        <div className="text-earth">
                                            <span className="block text-xs uppercase text-earth/50 font-bold">Total</span>
                                            <span className="text-2xl font-bold">₹499</span>
                                        </div>
                                        <button
                                            disabled={!form.name || !form.phone || !form.company || !form.address || isLoading}
                                            onClick={handleNext}
                                            className="bg-earth text-cream px-8 py-3 rounded-xl font-bold hover:bg-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            {isLoading ? <Loader2 className="animate-spin" /> : <>Continue <ChevronRight size={18} /></>}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: PAYMENT */}
                            {step === 'payment' && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 flex flex-col">
                                    <h2 className="text-2xl font-serif font-bold text-earth mb-2">Scan to Pay</h2>
                                    <p className="text-sm text-earth-light mb-6">Use any UPI App (GPay, PhonePe, Paytm).</p>

                                    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-cream/30 rounded-2xl border border-earth/10 mb-6">
                                        <div className="relative w-48 h-48 bg-white p-2 rounded-xl shadow-sm mb-4">
                                            <Image src="/images/upi_qr.png" alt="UPI QR Code" fill className="object-contain" />
                                        </div>
                                        <div className="flex items-center gap-2 text-earth/60 text-sm font-medium">
                                            <ShieldCheck size={16} className="text-green-600" /> Secure Business Payment
                                        </div>
                                    </div>

                                    <button
                                        onClick={handlePaymentConfirm}
                                        disabled={isLoading}
                                        className="w-full bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? <Loader2 className="animate-spin" /> : "I Have Paid ₹499"}
                                    </button>
                                    <button onClick={() => setStep('details')} className="mt-4 text-xs text-earth/40 hover:text-earth text-center w-full">Back to Details</button>
                                </motion.div>
                            )}

                            {/* STEP 3: SUCCESS */}
                            {step === 'success' && (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex-1 flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-earth mb-2">Order Received!</h2>
                                    <p className="text-earth-light mb-8 max-w-xs">
                                        Thanks {form.name.split(' ')[0]}! We will ship your sample kit to <strong>{form.address}</strong> within 24 hours.
                                    </p>
                                    <div className="bg-cream p-4 rounded-xl border border-earth/10 flex items-center gap-3 text-left w-full">
                                        <BadgeCheck className="text-gold shrink-0" />
                                        <div className="text-sm">
                                            <p className="font-bold text-earth">Confirmation Sent</p>
                                            <p className="text-earth/60">Check your WhatsApp for tracking.</p>
                                        </div>
                                    </div>
                                    <button onClick={onClose} className="mt-8 bg-earth text-cream px-8 py-3 rounded-xl font-bold hover:bg-earth-light transition-colors">
                                        Close Window
                                    </button>
                                </motion.div>
                            )}

                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
}
