import Script from 'next/script';

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FoxNut Farms",
        "url": "https://foxnutfarms.com",
        "logo": "https://foxnutfarms.com/images/grade_6s.png",
        "description": "Direct wholesale supplier of premium Phool Makhana (Fox Nuts) from Mithila, Bihar",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Darbhanga",
            "addressLocality": "Darbhanga",
            "addressRegion": "Bihar",
            "postalCode": "846004",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "Sales",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi"]
        },
        "sameAs": [
            "https://instagram.com/foxnutfarms",
            "https://facebook.com/foxnutfarms",
            "https://linkedin.com/company/foxnutfarms"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FoxNut Farms",
        "image": "https://foxnutfarms.com/images/hero_pond.png",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Darbhanga",
            "addressLocality": "Darbhanga",
            "addressRegion": "Bihar",
            "postalCode": "846004",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.1542,
            "longitude": 85.8918
        },
        "telephone": "+91-98765-43210",
        "openingHours": "Mo-Sa 09:00-18:00"
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    );
}
