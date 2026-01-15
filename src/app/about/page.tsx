import Link from "next/link";
import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
    title: "About Us | Kainan Holdings - Licensed Recruitment Agency",
    description: "Learn about Kainan Holdings - Malaysia's trusted JTKSM licensed recruitment agency since 2016. Our mission, vision, and commitment to ethical workforce solutions.",
};

const values = [
    {
        title: "Professional",
        description: "We maintain the highest standards of professionalism in all our dealings, ensuring quality service delivery.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Flexible",
        description: "We adapt our solutions to meet the unique needs of each client, offering customized workforce strategies.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
    },
    {
        title: "Sensible",
        description: "We make practical decisions that benefit both employers and workers, creating sustainable partnerships.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: "Responsible",
        description: "We uphold ethical recruitment practices and comply with all regulatory requirements, including RBA standards.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

const milestones = [
    { year: "2016", event: "Company Established", description: "Agensi Pekerjaan Kainan Sdn Bhd was founded in Selangor" },
    { year: "2017", event: "JTKSM License Obtained", description: "Received JTKSM License C (No. 1131-1) for recruitment operations" },
    { year: "2020", event: "Penang Branch Opening", description: "Expanded operations with a new branch in Penang" },
    { year: "2023", event: "RBA Certification", description: "Completed RBA Awareness/Workshop Training for ethical recruitment" },
    { year: "2024", event: "PVIP Authorization", description: "Became authorized agency for Malaysia Premium Visa Programme" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh opacity-30"></div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl animate-float-slow"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="max-w-3xl">
                        <span className="badge-primary mb-4">About Us</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-6">
                            Your Trusted Partner in Workforce Solutions
                        </h1>
                        <p className="text-lg text-secondary-600 leading-relaxed">
                            Since 2016, Agensi Pekerjaan Kainan Sdn Bhd has been connecting businesses with the right talent across Malaysia. As a licensed recruitment agency, we specialize in providing comprehensive workforce solutions for various industries.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Company Profile */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="slide-left">
                            <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-6">
                                Company Profile
                            </h2>
                            <div className="space-y-4 text-secondary-600">
                                <p>
                                    <strong className="text-secondary-900">Agensi Pekerjaan Kainan Sdn Bhd</strong> is a fully licensed recruitment agency registered under the Ministry of Human Resources Malaysia. We hold the JTKSM License C (No. JTKSM 1131-1), authorizing us to conduct recruitment activities for both local and foreign workers.
                                </p>
                                <p>
                                    Headquartered in Setia Alam, Selangor, with a branch office in Penang, we serve clients across Peninsular Malaysia. Our team has extensive experience in the manufacturing, construction, hospitality, and service sectors.
                                </p>
                                <p>
                                    We are committed to ethical recruitment practices and are proud to be RBA (Responsible Business Alliance) compliant, ensuring fair treatment of all workers throughout the recruitment process.
                                </p>
                            </div>

                            {/* Company Details */}
                            <div className="mt-8 p-6 bg-secondary-50 rounded-2xl hover-magnetic">
                                <h3 className="font-semibold text-secondary-900 mb-4">Company Details</h3>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <span className="text-secondary-500">Company Name</span>
                                        <p className="font-medium text-secondary-900">Agensi Pekerjaan Kainan Sdn Bhd</p>
                                    </div>
                                    <div>
                                        <span className="text-secondary-500">SSM Registration</span>
                                        <p className="font-medium text-secondary-900">201601030868 (1201809-P)</p>
                                    </div>
                                    <div>
                                        <span className="text-secondary-500">JTKSM License</span>
                                        <p className="font-medium text-secondary-900">JTKSM 1131-1</p>
                                    </div>
                                    <div>
                                        <span className="text-secondary-500">Established</span>
                                        <p className="font-medium text-secondary-900">2016</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Visual Element */}
                        <AnimatedSection animation="slide-right" className="relative">
                            <div className="aspect-square bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl overflow-hidden hover-glow transition-all duration-500">
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <div className="text-center p-8">
                                        <div className="w-32 h-32 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm animate-float-slow">
                                            <span className="font-heading font-bold text-6xl">K</span>
                                        </div>
                                        <h3 className="text-2xl font-heading font-bold mb-2">Kainan Holdings</h3>
                                        <p className="text-white/80 text-sm">Est. 2016</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-400 rounded-2xl -z-10 animate-float-delayed"></div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 gradient-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        <AnimatedSection animation="slide-left">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-glow transition-all duration-500 h-full">
                                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 animate-bounce-subtle">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
                                <p className="text-secondary-300 leading-relaxed">
                                    To provide exceptional workforce solutions that connect the right people with the right opportunities. We strive to maximize the pool of top-quality candidates while ensuring ethical recruitment practices that benefit both employers and workers.
                                </p>
                            </div>
                        </AnimatedSection>

                        {/* Vision */}
                        <AnimatedSection animation="slide-right">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-glow transition-all duration-500 h-full">
                                <div className="w-14 h-14 bg-accent-400 rounded-xl flex items-center justify-center mb-6 animate-bounce-subtle">
                                    <svg className="w-7 h-7 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
                                <p className="text-secondary-300 leading-relaxed">
                                    To be Malaysia&apos;s most trusted recruitment partner, recognized for building long-term partnerships and delivering workforce solutions that drive business success across all industries we serve.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-16">
                        <span className="badge-accent mb-4">Our Values</span>
                        <h2 className="section-heading mb-4">What We Stand For</h2>
                        <p className="section-subheading mx-auto">
                            Our core values guide every decision we make and every relationship we build.
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <AnimatedSection key={value.title} animation="fade-up" delay={index * 100}>
                                <div className="card p-6 text-center hover-lift">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 hover-rotate transition-transform">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-heading font-semibold text-secondary-900 mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-secondary-600 text-sm">
                                        {value.description}
                                    </p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline/Milestones */}
            <section className="py-20 bg-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-16">
                        <span className="badge-primary mb-4">Our Journey</span>
                        <h2 className="section-heading mb-4">Key Milestones</h2>
                    </AnimatedSection>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2"></div>

                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <AnimatedSection
                                    key={milestone.year}
                                    animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                                    delay={index * 100}
                                >
                                    <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                        {/* Content */}
                                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                            <div className="card p-6 hover-lift">
                                                <span className="text-primary-600 font-heading font-bold text-2xl">{milestone.year}</span>
                                                <h3 className="text-lg font-semibold text-secondary-900 mt-1">{milestone.event}</h3>
                                                <p className="text-secondary-600 text-sm mt-2">{milestone.description}</p>
                                            </div>
                                        </div>

                                        {/* Center dot */}
                                        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white animate-pulse-glow"></div>

                                        {/* Empty space for other side */}
                                        <div className="hidden md:block w-1/2"></div>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold text-secondary-900 mb-4">
                        View Our Certifications
                    </h2>
                    <p className="text-secondary-600 mb-8">
                        We maintain full transparency about our licensing and compliance status.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/certificates" className="btn-primary hover-lift">
                            View Certificates
                        </Link>
                        <Link href="/contact" className="btn-outline hover-magnetic">
                            Contact Us
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </>
    );
}
