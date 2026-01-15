import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
    title: "Our Services | Kainan Holdings - Recruitment & HR Solutions",
    description: "Explore Kainan Holdings' comprehensive services: manpower supply, executive search, HR services, payroll management, hostel & transport management, and maid services.",
};

const services = [
    {
        id: "manpower",
        title: "Manpower Supply",
        subtitle: "Local & Foreign Workers",
        description: "Comprehensive workforce solutions for businesses of all sizes. We provide skilled and unskilled workers across multiple sectors, handling the entire recruitment process from sourcing to placement.",
        features: [
            "Local worker recruitment",
            "Foreign worker procurement (all approved source countries)",
            "Temporary/Contract staffing",
            "Permanent placement",
            "Volume hiring for manufacturing plants",
            "Skilled trades recruitment",
        ],
        industries: ["Manufacturing", "Construction", "Hospitality", "Agriculture"],
        image: "https://raw.githubusercontent.com/kainanholdings/kainanwebsite/main/public/images/services/manpowersupply.jpg",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        id: "executive",
        title: "Executive Search & Permanent Staffing",
        subtitle: "Finding Leaders Who Drive Success",
        description: "Premium headhunting services for senior management, C-level executives, and specialized professional roles. We leverage our extensive network and industry expertise to identify and attract top talent.",
        features: [
            "C-suite executive recruitment",
            "Senior management positions",
            "Specialized professional roles",
            "Confidential search services",
            "Talent mapping and market intelligence",
            "Succession planning support",
        ],
        industries: ["All Industries", "Corporate", "Finance", "Technology"],
        image: "https://raw.githubusercontent.com/kainanholdings/kainanwebsite/main/public/images/services/executivesearching.jpg",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        id: "hr",
        title: "HR Services & Payroll",
        subtitle: "Complete HR Outsourcing Solutions",
        description: "Focus on your core business while we handle your HR administration. From payroll processing to compliance management, we provide comprehensive HR support tailored to your needs.",
        features: [
            "Payroll processing and administration",
            "Employee benefits management",
            "Statutory compliance (EPF, SOCSO, EIS)",
            "Leave management",
            "Performance management support",
            "HR policy development",
        ],
        industries: ["SMEs", "Startups", "Manufacturing", "Retail"],
        image: "https://raw.githubusercontent.com/kainanholdings/kainanwebsite/main/public/images/services/hrservices.jpg",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
    },
    {
        id: "hostel",
        title: "Hostel & Transport Management",
        subtitle: "Worker Welfare Solutions",
        description: "Complete worker accommodation and transportation logistics. We ensure your workers have proper housing and reliable transport, meeting all regulatory requirements for foreign worker welfare.",
        features: [
            "Worker hostel management",
            "Accommodation compliance",
            "Transport fleet coordination",
            "Factory-hostel shuttle services",
            "Facilities maintenance",
            "Worker welfare programs",
        ],
        industries: ["Manufacturing", "Construction", "Plantations"],
        image: "https://raw.githubusercontent.com/kainanholdings/kainanwebsite/main/public/images/services/maid.jpg",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        id: "maid",
        title: "Maid Services",
        subtitle: "Domestic Helper Supply",
        description: "Professional domestic helper placement services. We carefully screen and match qualified domestic helpers with households, ensuring proper documentation and training.",
        features: [
            "Domestic helper recruitment",
            "Background verification",
            "Skills assessment",
            "Documentation processing",
            "Basic training coordination",
            "Placement support",
        ],
        industries: ["Residential", "Expatriate Families"],
        image: "https://raw.githubusercontent.com/kainanholdings/kainanwebsite/main/public/images/services/hostel.jpg",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
];

const staffingTypes = [
    {
        title: "Permanent Staffing",
        description: "Direct-hire recruitment for permanent positions. We find candidates who will grow with your organization.",
        icon: "🎯",
    },
    {
        title: "Temporary/Contract",
        description: "Flexible staffing for project-based needs, seasonal demands, or coverage requirements.",
        icon: "⏰",
    },
    {
        title: "Contract-to-Hire",
        description: "Trial period employment that converts to permanent status upon mutual satisfaction.",
        icon: "📋",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 gradient-dark">
                    <div className="absolute inset-0 bg-mesh opacity-30"></div>
                    <div className="absolute top-20 right-20 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float-slow"></div>
                    <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-400/20 rounded-full blur-3xl animate-float-delayed"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <AnimatedSection animation="fade-up" className="max-w-3xl">
                        <span className="badge bg-accent-400/20 text-accent-300 mb-4 animate-pulse-glow">Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Comprehensive Workforce Solutions
                        </h1>
                        <p className="text-lg text-secondary-300 leading-relaxed">
                            From recruitment to retention, we provide end-to-end staffing and HR solutions tailored to your business needs. Let us handle your workforce challenges so you can focus on growth.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Staffing Types Overview */}
            <section className="py-16 bg-white border-b border-secondary-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-12">
                        <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                            Staffing Types We Offer
                        </h2>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-6">
                        {staffingTypes.map((type, index) => (
                            <AnimatedSection key={type.title} animation="fade-up" delay={index * 100}>
                                <div className="text-center p-6 bg-secondary-50 rounded-2xl hover-lift">
                                    <span className="text-4xl mb-4 block animate-bounce-subtle">{type.icon}</span>
                                    <h3 className="font-heading font-semibold text-secondary-900 mb-2">{type.title}</h3>
                                    <p className="text-secondary-600 text-sm">{type.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Detail */}
            <section className="py-20 bg-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <AnimatedSection
                                key={service.id}
                                animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                            >
                                <div
                                    id={service.id}
                                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                                >
                                    {/* Content */}
                                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 hover-rotate transition-transform">
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-heading font-bold text-secondary-900">
                                                    {service.title}
                                                </h2>
                                                <p className="text-primary-600 font-medium">{service.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="text-secondary-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="mb-6">
                                            <h3 className="font-semibold text-secondary-900 mb-3">What We Offer:</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <li key={feature} className={`flex items-start gap-2 text-sm text-secondary-600 stagger-${featureIndex + 1}`}>
                                                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.industries.map((industry) => (
                                                <span key={industry} className="badge-primary text-xs hover-magnetic">
                                                    {industry}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href="/contact" className="btn-primary hover-lift group">
                                            Get a Quote
                                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>

                                    {/* Visual */}
                                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden hover-glow transition-all duration-500 relative">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-16">
                        <span className="badge-accent mb-4">How We Work</span>
                        <h2 className="section-heading mb-4">Our Recruitment Process</h2>
                        <p className="section-subheading mx-auto">
                            A streamlined process designed to find you the right candidates efficiently.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Understanding", desc: "We learn about your business, culture, and specific staffing requirements." },
                            { step: "02", title: "Sourcing", desc: "We tap into our extensive network and database to find qualified candidates." },
                            { step: "03", title: "Screening", desc: "Rigorous vetting including interviews, background checks, and skill assessments." },
                            { step: "04", title: "Placement", desc: "We handle all documentation and ensure smooth onboarding of selected candidates." },
                        ].map((item, index) => (
                            <AnimatedSection key={item.step} animation="fade-up" delay={index * 100}>
                                <div className="relative text-center hover-magnetic">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center animate-pulse-glow">
                                        <span className="text-white font-heading font-bold text-xl">{item.step}</span>
                                    </div>
                                    <h3 className="font-heading font-semibold text-secondary-900 mb-2">{item.title}</h3>
                                    <p className="text-secondary-600 text-sm">{item.desc}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 gradient-dark text-white">
                <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Ready to Solve Your Staffing Challenges?
                    </h2>
                    <p className="text-secondary-300 mb-8">
                        Contact us today to discuss your workforce needs and get a customized solution.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn-accent hover-lift">
                            Request a Consultation
                        </Link>
                        <Link href="tel:+60333591128" className="btn-outline border-white/30 text-white hover:bg-white/10 hover-magnetic">
                            Call +603-3359 1128
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </>
    );
}
