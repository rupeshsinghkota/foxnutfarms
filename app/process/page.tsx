import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Our Quality Process | FoxNut Farms',
    description: 'See how we grade Phool Makhana. From sun-drying to manual popping, we ensure <4% moisture and 16mm+ size for export quality.',
};

const processSteps = [
    {
        step: "01",
        title: "Sun Drying",
        desc: "Raw nuts are sun-dried for 3 days to reduce moisture from 30% to 12%. This ensures the shell hardens perfectly."
    },
    {
        step: "02",
        title: "Sand Roasting",
        desc: "Nuts are roasted in cast-iron pans using river sand at 250°C. This systematic heat shock is crucial for expansion."
    },
    {
        step: "03",
        title: "Manual Popping",
        desc: "Each nut is manually hit with a wooden mallet. Machines break the kernel; human hands preserve the round shape."
    },
    {
        step: "04",
        title: "Optical Grading",
        desc: "We use color sorters to remove black spots (chilka) and manual sieves for uniform 16mm+ sizing."
    }
];

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-earth-light text-cream pt-0">
            <section className="pt-32 pb-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gold">Our Quality Process</h1>
                <p className="max-w-xl mx-auto text-lg opacity-80">
                    Why our Makhana pops better. A look into our 4-step cleaning and grading standard.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 pb-24">
                {processSteps.map((item, index) => (
                    <div key={item.step} className={`mb-16 last:mb-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        {item.step === "02" ? (
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="md:order-2 h-80 bg-earth/5 rounded-2xl border border-earth/10 flex items-center justify-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <Image
                                        src="/images/roasting_process.png"
                                        alt="Traditional Roasting Process"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="md:order-1">
                                    <div className="text-6xl font-serif text-earth/10 font-bold mb-4">{item.step}</div>
                                    <h3 className="text-3xl font-bold mb-4 text-gold">{item.title}</h3>
                                    <p className="text-lg leading-relaxed opacity-80">{item.desc}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className={`h-80 bg-earth/5 rounded-2xl border border-earth/10 flex items-center justify-center relative overflow-hidden group ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                    <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <Image
                                        src={item.step === "01" ? "/images/sun_drying.png" : item.step === "03" ? "/images/manual_popping.png" : "/images/optical_grading.png"}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className={`${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                                    <div className="text-6xl font-serif text-gold/30 font-bold mb-4">{item.step}</div>
                                    <h3 className="text-3xl font-bold mb-4 text-gold">{item.title}</h3>
                                    <p className="text-lg leading-relaxed text-cream/90">{item.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            <div className="text-center pb-20">
                <div className="inline-block bg-cream text-earth px-8 py-4 rounded-full font-bold">
                    Moisture Guarantee: &lt; 4%
                </div>
            </div>
        </main>
    );
}
