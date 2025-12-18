"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download, CheckCircle2, ShoppingBag, FileText, TrendingUp, Droplets, Ruler, Scale } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import SampleKitModal from "@/components/SampleKitModal";
import { Product } from "@/lib/products";

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    const [isSampleOpen, setIsSampleOpen] = useState(false);
    const [activeImage, setActiveImage] = useState(product.image);

    return (
        <main className="bg-cream min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20">
            <SampleKitModal isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} productName={product.title} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Back Link */}
                <Link href="/#products" className="inline-flex items-center gap-2 text-earth/60 hover:text-earth mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
                    <ArrowLeft size={18} /> Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

                    {/* Left: Image Gallery */}
                    <FadeIn>
                        {/* Main Image */}
                        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border-2 border-earth/5 relative overflow-hidden group mb-4">
                            <div className="aspect-square relative">
                                <Image
                                    src={activeImage || product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {product.badge && (
                                <div className="absolute top-6 right-6 bg-gold text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-gold/20">
                                    {product.badge}
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Grid */}
                        <div className="grid grid-cols-4 gap-4">
                            {product.images && product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`bg-white rounded-xl p-2 border overflow-hidden transition-all ${activeImage === img ? 'border-gold shadow-md scale-95' : 'border-earth/10 hover:border-gold/50'}`}
                                >
                                    <div className="aspect-square relative">
                                        <Image src={img} alt="Thumbnail" fill className="object-contain" />
                                    </div>
                                </button>
                            ))}
                        </div>


                        {/* Quick Metrics */}
                        <div className="grid grid-cols-3 gap-4 mt-8">
                            <div className="bg-white p-4 rounded-xl border border-earth/10 text-center">
                                <Ruler className="w-6 h-6 text-earth/40 mx-auto mb-2" />
                                <p className="text-xs text-earth/60 uppercase font-bold tracking-wider">Size</p>
                                <p className="text-lg font-serif font-bold text-earth">{product.specs.size}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-earth/10 text-center">
                                <Droplets className="w-6 h-6 text-earth/40 mx-auto mb-2" />
                                <p className="text-xs text-earth/60 uppercase font-bold tracking-wider">Moisture</p>
                                <p className="text-lg font-serif font-bold text-earth">{product.specs.moisture}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-earth/10 text-center">
                                <Scale className="w-6 h-6 text-earth/40 mx-auto mb-2" />
                                <p className="text-xs text-earth/60 uppercase font-bold tracking-wider">Count</p>
                                <p className="text-sm font-serif font-bold text-earth leading-tight pt-1">{product.specs.count}</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: Details & Specs */}
                    <FadeIn delay={0.2}>
                        <div>
                            <span className="text-gold font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block">{product.subtitle}</span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth mb-4 sm:mb-6">{product.title}</h1>
                            <p className="text-base sm:text-lg text-earth-light leading-relaxed mb-6 sm:mb-8 text-justify sm:text-left">
                                {product.description}
                            </p>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="text-2xl sm:text-3xl font-bold text-earth font-serif">
                                    {product.price} <span className="text-xs sm:text-sm font-sans font-normal text-earth/40">*ex-factory</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                                <button
                                    onClick={() => setIsSampleOpen(true)}
                                    className="flex-1 bg-gold text-white px-8 py-4 rounded-xl font-bold hover:bg-gold/90 transition-colors shadow-xl shadow-gold/20 flex items-center justify-center gap-2"
                                >
                                    <ShoppingBag size={20} /> Order Sample
                                </button>
                                <a
                                    href="/spec_sheets/product_spec.txt"
                                    download
                                    className="flex-1 bg-white text-earth border-2 border-earth/10 px-8 py-4 rounded-xl font-bold hover:border-earth/30 transition-colors flex items-center justify-center gap-2"
                                >
                                    <FileText size={20} /> Download Specs
                                </a>
                            </div>

                            {/* Detailed Specs Table */}
                            <div className="bg-white rounded-2xl border border-earth/10 overflow-hidden">
                                <div className="bg-earth/5 px-6 py-4 border-b border-earth/10">
                                    <h3 className="font-serif font-bold text-earth">Technical Specifications</h3>
                                </div>
                                <div className="divide-y divide-earth/5">
                                    <div className="grid grid-cols-2 px-6 py-4 hover:bg-cream/30 transition-colors">
                                        <span className="text-earth/60 font-medium">Expansion Ratio</span>
                                        <span className="text-earth font-bold text-right">{product.specs.expansion}</span>
                                    </div>
                                    <div className="grid grid-cols-2 px-6 py-4 hover:bg-cream/30 transition-colors">
                                        <span className="text-earth/60 font-medium">Color / Appearance</span>
                                        <span className="text-earth font-bold text-right">{product.specs.color}</span>
                                    </div>
                                    <div className="grid grid-cols-2 px-6 py-4 hover:bg-cream/30 transition-colors">
                                        <span className="text-earth/60 font-medium">Foreign Matter</span>
                                        <span className="text-earth font-bold text-right">{product.specs.foreignMatter}</span>
                                    </div>
                                    <div className="grid grid-cols-2 px-6 py-4 hover:bg-cream/30 transition-colors">
                                        <span className="text-earth/60 font-medium">Shelf Life</span>
                                        <span className="text-earth font-bold text-right">{product.specs.shelfLife}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Nutrition & Packaging Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="bg-earth/5 p-4 rounded-xl border border-earth/10">
                                    <h4 className="text-xs font-bold text-earth/50 uppercase tracking-wider mb-2">Nutrition (100g)</h4>
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-sm"><span className="text-earth/70">Protein</span> <span className="font-bold text-earth">{product.nutrition.protein}</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-earth/70">Calories</span> <span className="font-bold text-earth">{product.nutrition.calories}</span></div>
                                    </div>
                                </div>
                                <div className="bg-earth/5 p-4 rounded-xl border border-earth/10">
                                    <h4 className="text-xs font-bold text-earth/50 uppercase tracking-wider mb-2">Bulk Packaging</h4>
                                    <p className="text-sm font-bold text-earth leading-tight">{product.packaging}</p>
                                </div>
                            </div>

                            {/* Best For Tags */}
                            <div className="mt-8">
                                <p className="text-sm font-bold text-earth/50 uppercase tracking-wider mb-4">Recommended For</p>
                                <div className="flex flex-wrap gap-3">
                                    {product.bestFor.map((tag, i) => (
                                        <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 bg-earth/5 text-earth rounded-full text-sm font-medium">
                                            <CheckCircle2 size={14} className="text-gold" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
