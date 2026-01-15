import Link from "next/link";
import TrustBadge from "@/components/TrustBadge";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
    {
        title: "Manpower Supply",
        description: "Comprehensive local and foreign worker recruitment for all sectors. We handle the entire hiring process from sourcing to placement.",
        icon: "users",
        href: "/services#manpower",
    },
    {
        title: "Executive Search",
        description: "Premium headhunting services for senior and C-level positions. Finding leaders who drive organizational success.",
        icon: "search",
        href: "/services#executive",
    },
    {
        title: "HR Services & Payroll",
        description: "Complete HR outsourcing solutions including payroll management, compliance, and employee administration.",
        icon: "clipboard",
        href: "/services#hr",
    },
    {
        title: "Hostel & Transport",
        description: "End-to-end worker welfare management including accommodation and transportation logistics.",
        icon: "building",
        href: "/services#hostel",
    },
];

const industries = [
    { name: "Manufacturing", icon: "factory" },
    { name: "Construction", icon: "construction" },
    { name: "Hospitality", icon: "hotel" },
    { name: "Healthcare", icon: "healthcare" },
    { name: "F&B", icon: "food" },
    { name: "Logistics", icon: "shipping" },
];

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Companies Served" },
    { value: "10,000+", label: "Workers Placed" },
    { value: "2", label: "Branch Offices" },
];

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 gradient-dark">
                    <div className="absolute inset-0 bg-mesh opacity-50"></div>
                    {/* Decorative elements with animations */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float-slow"></div>
                    <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl animate-float-delayed"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="text-white">
                            <AnimatedSection animation="fade-up" delay={0}>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="badge bg-accent-400/20 text-accent-300 animate-pulse-glow">
                                        JTKSM Licensed Agency
                                    </span>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-up" delay={100}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                                    Connecting the <span className="text-gradient bg-gradient-to-r from-accent-400 to-accent-300">Right People</span> for Outstanding Efficiency
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-up" delay={200}>
                                <p className="text-lg text-secondary-300 mb-8 max-w-xl">
                                    Malaysia&apos;s trusted recruitment partner since 2016. We specialize in local and foreign workforce solutions for manufacturing, construction, hospitality, and more.
                                </p>
                            </AnimatedSection>

                            <AnimatedSection animation="fade-up" delay={300}>
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <Link href="/contact" className="btn-primary hover-lift group">
                                        Get Started Today
                                        <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                    <Link href="/services" className="btn-outline border-white/30 text-white hover:bg-white/10 hover:text-white hover-magnetic">
                                        Explore Services
                                    </Link>
                                </div>
                            </AnimatedSection>

                            {/* Trust Badges */}
                            <AnimatedSection animation="fade-up" delay={400}>
                                <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
                                    <TrustBadge type="jtksm" number="JTKSM 1131-1" />
                                    <TrustBadge type="ssm" number="201601030868" />
                                    <TrustBadge type="rba" number="RBA Certified" />
                                </div>
                            </AnimatedSection>
                        </div>

                        {/* Hero Image/Illustration */}
                        <AnimatedSection animation="slide-right" delay={200} className="hidden lg:block relative">
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                {/* Decorative card stack */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-400/20 rounded-3xl transform rotate-3 animate-float-slow"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 hover-glow transition-all duration-500">
                                    <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                                        <div className="w-24 h-24 mb-6 bg-primary-600/20 rounded-2xl flex items-center justify-center animate-bounce-subtle">
                                            <svg className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2">Workforce Solutions</h3>
                                        <p className="text-secondary-300 text-sm">From recruitment to retention, we&apos;ve got you covered</p>

                                        {/* Mini stats */}
                                        <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                                            {stats.slice(0, 2).map((stat, index) => (
                                                <div key={stat.label} className={`bg-white/5 rounded-xl p-4 hover-magnetic stagger-${index + 1}`}>
                                                    <div className="text-2xl font-heading font-bold text-accent-400">{stat.value}</div>
                                                    <div className="text-xs text-secondary-400">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-secondary-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <AnimatedSection key={stat.label} animation="fade-up" delay={index * 100}>
                                <div className="text-center hover-magnetic">
                                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-secondary-600 text-sm">{stat.label}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-secondary-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-16">
                        <span className="badge-primary mb-4">Our Services</span>
                        <h2 className="section-heading mb-4">
                            Comprehensive Workforce Solutions
                        </h2>
                        <p className="section-subheading mx-auto">
                            From recruitment to retention, we provide end-to-end staffing solutions tailored to your business needs.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
                                <ServiceCard {...service} />
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection animation="fade-up" delay={400} className="text-center mt-12">
                        <Link href="/services" className="btn-secondary hover-lift group">
                            View All Services
                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <AnimatedSection animation="slide-left">
                            <span className="badge-accent mb-4">Why Kainan</span>
                            <h2 className="section-heading mb-6">
                                Building Long-Term Partnerships, Not Just Filling Vacancies
                            </h2>
                            <p className="text-secondary-600 text-lg mb-8">
                                We understand that successful recruitment goes beyond matching skills to job descriptions. We focus on cultural fit, long-term potential, and sustainable workforce solutions.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Licensed & Compliant",
                                        description: "JTKSM License C holder with full RBA compliance for ethical recruitment practices.",
                                    },
                                    {
                                        title: "End-to-End Solutions",
                                        description: "From recruitment to payroll, hostel to transport – we handle the entire workforce lifecycle.",
                                    },
                                    {
                                        title: "Industry Expertise",
                                        description: "Deep understanding of manufacturing, construction, hospitality, and service sector requirements.",
                                    },
                                    {
                                        title: "PVIP Authorized",
                                        description: "Official authorized agency for the Malaysia Premium Visa Programme.",
                                    },
                                ].map((item, index) => (
                                    <AnimatedSection key={item.title} animation="fade-up" delay={index * 100}>
                                        <div className="flex gap-4 hover-magnetic p-2 -m-2 rounded-xl transition-all">
                                            <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center hover-rotate">
                                                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-secondary-900 mb-1">{item.title}</h3>
                                                <p className="text-secondary-600 text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link href="/about" className="btn-primary hover-lift group">
                                    Learn More About Us
                                </Link>
                            </div>
                        </AnimatedSection>

                        {/* Image/Visual */}
                        <AnimatedSection animation="slide-right" className="relative">
                            <div className="aspect-square bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-3xl overflow-hidden hover-glow transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-32 h-32 mx-auto mb-6 bg-primary-600 rounded-2xl flex items-center justify-center animate-float-slow hover-rotate">
                                            <span className="text-white font-heading font-bold text-5xl">K</span>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-2">
                                            Professional. Flexible. Responsible.
                                        </h3>
                                        <p className="text-secondary-600">
                                            Our core values drive everything we do
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-2xl -z-10 animate-float-delayed"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-2xl -z-10 animate-float-slow"></div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 gradient-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-16">
                        <span className="badge bg-accent-400/20 text-accent-300 mb-4">Industries We Serve</span>
                        <h2 className="section-heading text-white mb-4">
                            Expertise Across Key Sectors
                        </h2>
                        <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
                            We have deep experience in providing workforce solutions across Malaysia&apos;s most dynamic industries.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {industries.map((industry, index) => (
                            <AnimatedSection key={industry.name} animation="scale" delay={index * 80}>
                                <IndustryCard {...industry} variant="dark" />
                            </AnimatedSection>
                        ))}
                    </div>

                    <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12">
                        <Link href="/industries" className="btn-accent hover-lift group">
                            Explore All Industries
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="section-heading mb-6">
                        Ready to Find the Right Talent?
                    </h2>
                    <p className="text-secondary-600 text-lg mb-10 max-w-2xl mx-auto">
                        Let us help you build a workforce that drives your business forward. Contact us today for a consultation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn-primary hover-lift group">
                            Request a Consultation
                        </Link>
                        <Link href="tel:+60333591128" className="btn-outline hover-magnetic group">
                            <svg className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call Us Now
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </>
    );
}
