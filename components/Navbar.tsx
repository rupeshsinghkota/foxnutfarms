"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-earth/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-serif text-earth font-bold tracking-tight">FoxNut <span className="text-gold italic font-light">Farms</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-earth font-medium text-sm tracking-wide">
                    <Link href="/story" className="hover:text-gold transition-colors">OUR STORY</Link>
                    <Link href="/private-label" className="hover:text-gold transition-colors">PRIVATE LABEL</Link>
                    <Link href="/process" className="hover:text-gold transition-colors">PROCESS</Link>
                    <Link href="/#products" className="hover:text-gold transition-colors">PRODUCTS</Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/#contact" className="bg-gold text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold/80 transition-colors shadow-lg shadow-gold/20 flex items-center gap-2">
                        Get Pricing
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-earth" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-cream border-b border-earth/10 shadow-xl py-4 px-6 flex flex-col gap-4">
                    <Link href="/story" className="text-earth font-medium py-2 border-b border-earth/5" onClick={() => setIsOpen(false)}>OUR STORY</Link>
                    <Link href="/private-label" className="text-earth font-medium py-2 border-b border-earth/5" onClick={() => setIsOpen(false)}>PRIVATE LABEL</Link>
                    <Link href="/process" className="text-earth font-medium py-2 border-b border-earth/5" onClick={() => setIsOpen(false)}>PROCESS</Link>
                    <Link href="/#products" className="text-earth font-medium py-2 border-b border-earth/5" onClick={() => setIsOpen(false)}>PRODUCTS</Link>

                    <div className="flex flex-col gap-3 mt-4">
                        <Link href="/#contact" className="bg-gold text-white px-6 py-3 rounded-xl text-center font-semibold flex items-center justify-center gap-2" onClick={() => setIsOpen(false)}>
                            Get Pricing Sheet
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
