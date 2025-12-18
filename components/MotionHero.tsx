"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useRef } from "react";

export default function MotionHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={ref} className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-0 pb-8">

            {/* Background Image with Parallax & Scale */}
            <motion.div style={{ y, scale, opacity }} className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_pond.png"
                    alt="FoxNut Farms Mithila Pond"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/70 to-cream/90 backdrop-blur-[1px]" />
            </motion.div>

            {/* Floating Elements (Decorative) */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 w-24 h-24 bg-gold/10 rounded-full blur-3xl z-10 hidden md:block"
            />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 right-10 w-32 h-32 bg-earth/5 rounded-full blur-3xl z-10 hidden md:block"
            />

            {/* Main Content Area */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6 flex-grow flex flex-col justify-start pt-32">

                {/* Animated Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 py-1.5 px-5 border border-earth/20 rounded-full text-xs font-serif tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-md shadow-sm mx-auto"
                >
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    Authentic Bihar Origin
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-serif font-bold mb-6 md:mb-8 text-earth leading-[1.1] tracking-tight drop-shadow-sm"
                >
                    Pure Makhana. <br />
                    <span className="italic text-gold relative inline-block">
                        Direct from Farm.
                        {/* Underline svg */}
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-earth/10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                    </span>
                </motion.h1>

                {/* Subcopy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-2xl text-earth-light/80 font-medium mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    We aggregate GI-Tagged Phool Makhana from 500+ Mallah farmers in Darbhanga.
                    <span className="hidden md:inline"> consistent grading, zero middlemen, and transparent wholesale pricing for brands.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-5 justify-center items-center"
                >
                    <Link href="#contact" className="group relative bg-earth text-cream px-10 py-4 md:py-5 rounded-full text-lg font-bold shadow-2xl shadow-earth/20 overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full md:w-auto text-center">
                        <span className="relative z-10 flex items-center justify-center gap-3">
                            Download Rate List <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-earth via-earth-light to-earth skew-x-12 group-hover:skew-x-0 transition-transform duration-500 opacity-50" />
                    </Link>

                    <Link href="/story" className="group flex items-center justify-center gap-2 text-earth font-semibold hover:text-gold transition-colors px-6 py-4 w-full md:w-auto">
                        See our Sourcing Process
                        <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:border-gold transition-colors">
                            <ArrowRight size={14} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                    </Link>
                </motion.div>

            </div>

            {/* Floating Trust Bar (Bottom - In Flow) */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-20 w-full px-6"
            >
                <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-xl shadow-earth/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 text-center md:text-left">

                        {/* Stat 1 */}
                        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                            <div className="bg-gold/20 p-2 rounded-lg text-earth">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-earth/60 font-bold uppercase tracking-wider">Daily Capacity</p>
                                <p className="text-xl font-serif font-bold text-earth">20,000 kg+</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-10 bg-earth/10" />
                        <div className="md:hidden w-full h-px bg-earth/10" />

                        {/* Stat 2 */}
                        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                            <div className="text-4xl">👨‍🌾</div>
                            <div>
                                <p className="text-xs text-earth/60 font-bold uppercase tracking-wider">Farmer Network</p>
                                <p className="text-xl font-serif font-bold text-earth">500+ Families</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-10 bg-earth/10" />
                        <div className="md:hidden w-full h-px bg-earth/10" />

                        {/* Live Update */}
                        <div className="flex items-center gap-3 flex-1 bg-green-50/50 p-2 rounded-lg border border-green-100 w-full md:w-auto justify-center md:justify-start">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2 shrink-0" />
                            <p className="text-sm font-medium text-earth/80 text-left">
                                <span className="font-bold text-green-700">Live Update:</span> Mandi prices dropped by ₹20/kg.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
