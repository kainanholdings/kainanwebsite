import Link from "next/link";
import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
    title: "Industries We Serve | Kainan Holdings",
    description: "Kainan Holdings provides workforce solutions across Manufacturing, Construction, Hospitality, Healthcare, F&B, Cleaning Services, and Cargo & Shipping sectors.",
};

const industries = [
    {
        id: "manufacturing",
        name: "Manufacturing",
        description: "We supply skilled and semi-skilled workers for electronics, automotive, plastics, textiles, food processing, and other manufacturing plants across Malaysia.",
        positions: [
            "Production Operators",
            "Machine Operators",
            "Quality Control Inspectors",
            "Assembly Line Workers",
            "Technicians",
            "Warehouse Staff",
            "Supervisors",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: "from-blue-500 to-blue-700",
    },
    {
        id: "construction",
        name: "Construction",
        description: "Comprehensive manpower solutions for construction projects including residential, commercial, infrastructure, and industrial developments.",
        positions: [
            "General Workers",
            "Scaffolders",
            "Concreters",
            "Carpenters",
            "Plumbers",
            "Electricians",
            "Site Supervisors",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        color: "from-orange-500 to-orange-700",
    },
    {
        id: "hospitality",
        name: "Hospitality",
        description: "Trained hospitality staff for hotels, resorts, spas, and tourism-related businesses. We focus on candidates with strong service orientation.",
        positions: [
            "Front Desk Staff",
            "Housekeeping",
            "F&B Service Staff",
            "Kitchen Helpers",
            "Bellhops",
            "Concierge",
            "Maintenance Staff",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        color: "from-purple-500 to-purple-700",
    },
    {
        id: "healthcare",
        name: "Healthcare",
        description: "Support staff for hospitals, clinics, nursing homes, and healthcare facilities. We understand the specialized requirements of the healthcare sector.",
        positions: [
            "Healthcare Assistants",
            "Nursing Aides",
            "Ward Attendants",
            "Cleaners",
            "Kitchen Staff",
            "Administrative Support",
            "Security Personnel",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: "from-red-500 to-red-700",
    },
    {
        id: "fnb",
        name: "Food & Beverage",
        description: "Staff for restaurants, cafes, fast food chains, catering companies, and food courts. From kitchen to front-of-house positions.",
        positions: [
            "Kitchen Crew",
            "Chefs & Cooks",
            "Servers",
            "Cashiers",
            "Baristas",
            "Dishwashers",
            "Restaurant Managers",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: "from-green-500 to-green-700",
    },
    {
        id: "cleaning",
        name: "Cleaning Services",
        description: "Professional cleaners for commercial buildings, offices, factories, and residential complexes. Trained in various cleaning standards.",
        positions: [
            "Office Cleaners",
            "Industrial Cleaners",
            "Janitorial Staff",
            "Window Cleaners",
            "Carpet Cleaners",
            "Team Leaders",
            "Supervisors",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        color: "from-cyan-500 to-cyan-700",
    },
    {
        id: "shipping",
        name: "Cargo & Shipping",
        description: "Workforce for ports, warehouses, logistics companies, and shipping operations. We supply workers trained in cargo handling and logistics.",
        positions: [
            "Warehouse Workers",
            "Forklift Operators",
            "Packers",
            "Loaders",
            "Drivers",
            "Inventory Clerks",
            "Logistics Coordinators",
        ],
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        color: "from-indigo-500 to-indigo-700",
    },
];

export default function IndustriesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh opacity-30"></div>
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl animate-float-slow"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="max-w-3xl">
                        <span className="badge-primary mb-4">Industries We Serve</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-6">
                            Expertise Across Key Sectors
                        </h1>
                        <p className="text-lg text-secondary-600 leading-relaxed">
                            We have deep experience providing workforce solutions across Malaysia&apos;s most dynamic industries. Our sector-specific expertise ensures we understand your unique staffing challenges.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12">
                        {industries.map((industry, index) => (
                            <AnimatedSection
                                key={industry.id}
                                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                            >
                                <div
                                    id={industry.id}
                                    className="grid lg:grid-cols-2 gap-8 items-center"
                                >
                                    {/* Visual */}
                                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                                        <div className={`aspect-[4/3] bg-gradient-to-br ${industry.color} rounded-3xl flex items-center justify-center text-white hover-glow transition-all duration-500`}>
                                            <div className="text-center">
                                                <div className="w-24 h-24 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4 animate-float-slow">
                                                    {industry.icon}
                                                </div>
                                                <h3 className="text-2xl font-heading font-bold">{industry.name}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                        <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                                            {industry.name}
                                        </h2>
                                        <p className="text-secondary-600 mb-6 leading-relaxed">
                                            {industry.description}
                                        </p>

                                        <div className="mb-6">
                                            <h3 className="font-semibold text-secondary-900 mb-3">Common Positions We Fill:</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {industry.positions.map((position) => (
                                                    <span key={position} className="badge-primary text-xs hover-magnetic">
                                                        {position}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <Link href="/contact" className="btn-primary hover-lift group">
                                            Discuss Your Needs
                                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 gradient-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "7+", label: "Industries Served" },
                            { value: "500+", label: "Client Companies" },
                            { value: "10,000+", label: "Workers Placed" },
                            { value: "95%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
                                <div className="hover-magnetic">
                                    <div className="text-4xl font-heading font-bold text-accent-400 mb-2">{stat.value}</div>
                                    <div className="text-secondary-300">{stat.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Industry Expertise Matters */}
            <section className="py-20 bg-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="section-heading mb-4">Why Industry Expertise Matters</h2>
                        <p className="text-secondary-600">
                            Every industry has unique workforce requirements. Our sector-specific knowledge ensures we find candidates who meet your specific needs.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Understanding Requirements",
                                description: "We know the specific skills, certifications, and experience levels required for each industry.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Compliance Knowledge",
                                description: "We understand industry-specific regulations and ensure all workers meet compliance requirements.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                            },
                            {
                                title: "Faster Placements",
                                description: "Our industry networks allow us to source and place qualified candidates more quickly.",
                                icon: (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                ),
                            },
                        ].map((item, index) => (
                            <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                                <div className="card p-6 text-center hover-lift">
                                    <div className="w-16 h-16 mx-auto bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 hover-rotate transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-heading font-semibold text-secondary-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-secondary-600 text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
                        Don&apos;t See Your Industry?
                    </h2>
                    <p className="text-secondary-600 mb-8">
                        We serve many more sectors beyond those listed. Contact us to discuss your specific workforce needs.
                    </p>
                    <Link href="/contact" className="btn-primary hover-lift">
                        Contact Us Today
                    </Link>
                </AnimatedSection>
            </section>
        </>
    );
}
