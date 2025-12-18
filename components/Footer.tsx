import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-earth text-cream pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">

                {/* Brand Column */}
                <div className="space-y-4 col-span-2 md:col-span-1">
                    <Link href="/" className="text-2xl font-serif font-bold text-gold">FoxNut Farms</Link>
                    <p className="opacity-80 leading-relaxed text-sm">
                        Premium Phool Makhana sourced directly from the wetlands of Mithila. Empowering farmers, delivering health.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h3 className="text-gold font-bold mb-6 font-serif tracking-wide">Quick Links</h3>
                    <ul className="space-y-3 text-sm opacity-80">
                        <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
                        <li><Link href="/story" className="hover:text-gold transition-colors">Our Story</Link></li>
                        <li><Link href="/process" className="hover:text-gold transition-colors">Quality Process</Link></li>
                        <li><Link href="#contact" className="hover:text-gold transition-colors">Wholesale Inquiry</Link></li>
                    </ul>
                </div>

                {/* Legal / Info */}
                <div className="col-span-1">
                    <h3 className="text-gold font-bold mb-6 font-serif tracking-wide">Information</h3>
                    <ul className="space-y-3 text-sm opacity-80">
                        <li><Link href="/shipping-policy" className="hover:text-gold transition-colors">Shipping Policy</Link></li>
                        <li><Link href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/sitemap.xml" className="hover:text-gold transition-colors">Sitemap</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-gold font-bold mb-6 font-serif tracking-wide">Contact Us</h3>
                    <ul className="space-y-4 text-sm opacity-80">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="mt-1 text-gold shrink-0" />
                            <span>Darbhanga, Bihar 846004<br />India</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-gold shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-gold shrink-0" />
                            <span>hello@foxnutfarms.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-cream/10 pt-8 text-center text-xs opacity-60">
                <p>© {new Date().getFullYear()} FoxNut Farms. All rights reserved.</p>
                <p className="mt-2">Designed with authentic care.</p>
            </div>
        </footer>
    );
}
