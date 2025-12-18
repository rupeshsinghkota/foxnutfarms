"use client";

import { motion } from 'framer-motion';

export default function Marquee() {
    const benefits = [
        "Gluten Free",
        "High Protein",
        "Low GI",
        "Zero Trans Fat",
        "Calcium Rich",
        "Antioxidant Packed",
        "Farm Fresh",
        "Non-GMO",
        "Organic Harvest"
    ];

    return (
        <div className="bg-gold py-4 overflow-hidden relative flex items-center">
            <div className="absolute inset-0 bg-gold z-10 opacity-0 md:opacity-100 md:bg-gradient-to-r md:from-gold md:via-transparent md:to-gold pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap gap-8"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                {[...benefits, ...benefits, ...benefits, ...benefits].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-8">
                        <span className="text-earth font-bold uppercase tracking-widest text-sm md:text-base">
                            {benefit}
                        </span>
                        <span className="text-earth/30">✦</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
