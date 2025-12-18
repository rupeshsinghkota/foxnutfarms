import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetails from "@/components/ProductDetails";

// Generate static params for SSG
export async function generateStaticParams() {
    return Object.keys(products).map((slug) => ({
        slug: slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    console.log("Debugging ProductPage:", { slug });
    const product = products[slug as keyof typeof products];
    console.log("Product found:", !!product);

    if (!product) {
        return notFound();
    }

    return <ProductDetails product={product} />;
}
