export const products = {
    "5-suta-standard": {
        title: "5 Suta Standard",
        subtitle: "The Snack Manufacturer's Choice",
        description: "Our 5 Suta (12mm+) grade is the workhorse of the Indian snack industry. Sourced directly from the younger harvest cycles in Darbhanga, these nuts are slightly smaller but pack the highest density. This makes them exceptionally crunchy when roasted, holding seasoning powders (Mint, Cream & Onion) far better than larger, smoother grades. Ideally suited for high-volume commercial packs where cost-efficiency and crunch are paramount.",
        price: "₹650 - ₹750 / kg",
        image: "/images/grade_5s_detail.png",
        images: [
            "/images/grade_5s_detail.png",
            "/images/grade_5s_macro.png",
            "/images/grade_5s_pile.png",
            "/images/grade_5s_roasted.png"
        ],
        specs: {
            size: "12mm - 15mm (Standard)",
            moisture: "< 5% (Kiln Dried)",
            expansion: "2.8 : 1",
            count: "550-600 kernels / 100g",
            color: "Off-White / Cream",
            shelfLife: "12 Months (Dry Storage)",
            foreignMatter: "< 0.5% (Triple Cleaned)"
        },
        nutrition: {
            protein: "9.7g",
            fat: "0.1g",
            minerals: "Magnesium, Potassium",
            calories: "347 kcal"
        },
        packaging: "High-Density Poly Bags (30kg / 50kg)",
        bestFor: ["Flavored Snacks (Masala/Cheese)", "Namkeen Mixes", "High-Volume Retail Packs", "Powder Coating"],
        badge: "Highest Visual Crunch"
    },
    "6-suta-gold": {
        title: "6 Suta Gold",
        subtitle: "Premium Export Grade",
        description: "The 'Goldilocks' size of Phool Makhana. This 6 Suta (16mm+) grade represents the perfect balance of visual appeal and structural integrity. Harvested during the peak season from deep-water ponds, these kernels naturally expand to a perfectly round shape. They are favored by premium D2C brands because they look substantial in a transparent pack but are robust enough to survive shipping without breakage.",
        price: "₹850 - ₹950 / kg",
        image: "/images/grade_6s_detail.png",
        images: [
            "/images/grade_6s_detail.png",
            "/images/grade_6s_macro.png",
            "/images/optical_grading.png",
            "/images/roasting_process.png"
        ],
        specs: {
            size: "16mm - 18mm (Premium)",
            moisture: "< 4% (Sun + Air Dried)",
            expansion: "3.2 : 1",
            count: "400-450 kernels / 100g",
            color: "Bright White",
            shelfLife: "12 Months",
            foreignMatter: "0% (Optical Graded)"
        },
        nutrition: {
            protein: "9.9g",
            fat: "0.1g",
            minerals: "Phosphorus, Iron",
            calories: "350 kcal"
        },
        packaging: "Retail-Ready Bulk Bags (10kg / 20kg)",
        bestFor: ["Premium D2C Brands", "Gourmet Flavors (Peri Peri/Truffle)", "Transparent Packaging", "Health Food Stores"],
        badge: "Best Seller"
    },
    "7-suta-platinum": {
        title: "7 Suta Platinum",
        subtitle: "Ultra-Premium Jumbo Size",
        description: "The crown jewel of the harvest. Only top 5% of the total crop reaches this 'Jumbo' 7 Suta (19mm+) size. These are hand-picked giants, revered for their snow-white appearance and almost cotton-like fluffiness. When bitten, they dissolve in the mouth. Exclusively reserved for luxury gifting hampers, high-end export markets (Middle East/USA), and dry fruit specialty stores. A visual spectacle in any bowl.",
        price: "₹1200+ / kg",
        image: "/images/grade_7s_detail.png",
        images: [
            "/images/grade_7s_detail.png",
            "/images/farmer_harvest.png",
            "/images/manual_popping.png",
            "/images/optical_grading.png"
        ],
        specs: {
            size: "19mm + (Jumbo)",
            moisture: "< 3% (Premium Dried)",
            expansion: "3.5 : 1",
            count: "250-300 kernels / 100g",
            color: "Snow White (Pristine)",
            shelfLife: "14 Months",
            foreignMatter: "0% (Hand Sorted)"
        },
        nutrition: {
            protein: "10.1g",
            fat: "0.1g",
            minerals: "Calcium, Antioxidants",
            calories: "355 kcal"
        },
        packaging: "Carton Box withliner (5kg / 10kg)",
        bestFor: ["Luxury Gifting", "Middle East Exports", "High-Ticket Retail", "Wedding Hampers"],
        badge: "Luxury Allocation"
    }
};

export type Product = typeof products["5-suta-standard"];
