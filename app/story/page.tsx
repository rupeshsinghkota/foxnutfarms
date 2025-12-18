import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Story | FoxNut Farms',
    description: 'Born in the ponds of Mithila. We work directly with Darbhanga farming communities to bring you authentic GI-Tagged Makhana.',
};

export default function StoryPage() {
    return (
        <main className="min-h-screen bg-cream text-earth pt-0">
            {/* Header */}
            <section className="pt-32 pb-20 px-6 text-center">
                <span className="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">The Roots</span>
                <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">The Lily of Mithila</h1>
                <p className="max-w-2xl mx-auto text-xl text-earth-light leading-relaxed">
                    Fox Nuts (Makhana) are not just nuts. They are the seeds of the Euryale Ferox lily, found in the stagnant wetlands of Eastern India.
                </p>
            </section>

            {/* The Journey Grid */}
            <section className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="h-80 bg-earth/5 rounded-2xl border border-earth/10 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image
                            src="/images/farmer_harvest.png"
                            alt="Farmer Harvesting Makhana"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div>
                        <div className="text-6xl font-serif text-earth/10 font-bold mb-4">01</div>
                        <h3 className="text-3xl font-serif font-bold mb-4">The Deep Dive</h3>
                        <p className="text-earth-light text-lg leading-relaxed">
                            Cultivation is arduous. Farmers in Darbhanga and Madhubani dive deep into thorny ponds to harvest the seeds from the bottom of the lake bed. It is a skill passed down for generations.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                    <div className="md:order-2 h-80 bg-earth/5 rounded-2xl border border-earth/10 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image
                            src="/images/roasting_process.png"
                            alt="Roasting Process"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="md:order-1">
                        <div className="text-6xl font-serif text-earth/10 font-bold mb-4">02</div>
                        <h3 className="text-3xl font-serif font-bold mb-4">The Fire Pop</h3>
                        <p className="text-earth-light text-lg leading-relaxed">
                            The black hard nuts are dried and then roasted in traditional earthen pots. The artisan hits the hot nut with a wooden mallet, and *pop*—the white starchy kernel explodes out.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="h-80 bg-earth/5 rounded-2xl border border-earth/10 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <Image
                            src="/images/optical_grading.png"
                            alt="Optical Grading"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div>
                        <div className="text-6xl font-serif text-earth/10 font-bold mb-4">03</div>
                        <h3 className="text-3xl font-serif font-bold mb-4">The Hand Grade</h3>
                        <p className="text-earth-light text-lg leading-relaxed">
                            We don't rely on machines alone. Our team manually sorts the "Phool" (Flower) to ensure only the roundest, whitest, and crunchiest makhanas make it to the "6S Premium" batch.
                        </p>
                    </div>
                </div>

            </section>

            {/* Footer Quote */}
            <section className="py-24 bg-earth text-cream text-center px-6">
                <blockquote className="max-w-3xl mx-auto font-serif text-3xl italic leading-relaxed opacity-80">
                    "For the farmer, it's a livelihood. For the world, it's a superfood. For us, it's a responsibility."
                </blockquote>
            </section>
        </main>
    );
}
