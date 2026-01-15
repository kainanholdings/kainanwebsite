import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PVIP - Malaysia Premium Visa Programme | Kainan Holdings",
    description: "Kainan Holdings is an authorized agency for the Malaysia Premium Visa Programme (PVIP). Learn about eligibility, benefits, and how we can help you apply.",
};

const benefits = [
    {
        title: "20-Year Renewable Visa",
        description: "Long-term residency with a 20-year multiple-entry visa, renewable for continued stay in Malaysia.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "No Minimum Stay",
        description: "Unlike other long-term visas, PVIP has no mandatory minimum stay requirement in Malaysia.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Work Authorization",
        description: "Permission to work in Malaysia as a director, shareholder, or professional consultant.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Spouse & Children",
        description: "Include your spouse and children under 21 years old in your application.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: "Tax Benefits",
        description: "Foreign-sourced income is not taxable in Malaysia for PVIP holders.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Property Purchase",
        description: "Eligible to purchase residential properties in Malaysia above a certain threshold.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
];

const eligibility = [
    {
        category: "Individual Track",
        requirements: [
            "Offshore income of at least USD 40,000 per month",
            "Assets worth at least USD 1 million",
            "Valid passport with at least 12 months validity",
        ],
    },
    {
        category: "Talent Track (for qualified talent)",
        requirements: [
            "Outstanding achievements in their field",
            "Proof of exceptional talent or contributions",
            "Relevant professional qualifications and experience",
        ],
    },
];

const process = [
    { step: "01", title: "Initial Consultation", desc: "We assess your eligibility and discuss your requirements" },
    { step: "02", title: "Document Preparation", desc: "We help you gather and prepare all necessary documents" },
    { step: "03", title: "Application Submission", desc: "We submit your application to the Immigration Department" },
    { step: "04", title: "Approval & Visa Issuance", desc: "Upon approval, we assist with visa collection and next steps" },
];

export default function PVIPPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900">
                    <div className="absolute inset-0 bg-mesh opacity-20"></div>
                    {/* Decorative elements */}
                    <div className="absolute top-20 right-20 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <span className="badge bg-accent-400 text-secondary-900 mb-4">
                                Authorized Agency
                            </span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                Malaysia Premium Visa Programme (PVIP)
                            </h1>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                Kainan Holdings is an authorized agency for the Malaysia Premium Visa Programme. We help high-net-worth individuals and exceptional talent obtain long-term residency in Malaysia.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-accent">
                                    Apply Now
                                </Link>
                                <Link href="#eligibility" className="btn-outline border-white/30 text-white hover:bg-white/10">
                                    Check Eligibility
                                </Link>
                            </div>
                        </div>

                        {/* Visual */}
                        <div className="hidden lg:block">
                            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 bg-accent-400 rounded-2xl flex items-center justify-center">
                                        <svg className="w-10 h-10 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-2">PVIP Authorized Agency</h3>
                                    <p className="text-white/70 text-sm mb-6">Official partner for visa applications</p>

                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div className="bg-white/5 rounded-xl p-4">
                                            <div className="text-2xl font-heading font-bold text-accent-400">20</div>
                                            <div className="text-xs text-white/60">Year Visa</div>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-4">
                                            <div className="text-2xl font-heading font-bold text-accent-400">0</div>
                                            <div className="text-xs text-white/60">Min. Stay</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is PVIP */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-heading mb-6">What is PVIP?</h2>
                        <p className="text-lg text-secondary-600 leading-relaxed">
                            The Malaysia Premium Visa Programme (PVIP) is a long-term residency program launched by the Malaysian government for high-net-worth individuals and exceptional talent from around the world. It offers a 20-year multiple-entry visa with the flexibility to live, work, and invest in Malaysia.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge-primary mb-4">Why Choose PVIP</span>
                        <h2 className="section-heading mb-4">Programme Benefits</h2>
                        <p className="section-subheading mx-auto">
                            PVIP offers numerous advantages for individuals seeking long-term residency in Malaysia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="card p-6">
                                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-secondary-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-secondary-600 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge-accent mb-4">Requirements</span>
                        <h2 className="section-heading mb-4">Eligibility Criteria</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {eligibility.map((track) => (
                            <div key={track.category} className="bg-secondary-50 rounded-2xl p-8">
                                <h3 className="text-xl font-heading font-bold text-secondary-900 mb-6">
                                    {track.category}
                                </h3>
                                <ul className="space-y-4">
                                    {track.requirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-secondary-600">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-accent-50 rounded-2xl border border-accent-200">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-semibold text-secondary-900 mb-1">Not Sure If You Qualify?</h4>
                                <p className="text-secondary-600 text-sm">
                                    Contact us for a free eligibility assessment. Our team will review your profile and advise on the best pathway for your PVIP application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 gradient-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="badge bg-accent-400/20 text-accent-300 mb-4">How to Apply</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Application Process
                        </h2>
                        <p className="text-secondary-300 max-w-2xl mx-auto">
                            As an authorized PVIP agency, we guide you through every step of the application process.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {process.map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-accent-400 rounded-full flex items-center justify-center">
                                    <span className="text-secondary-900 font-heading font-bold text-xl">{item.step}</span>
                                </div>
                                <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                                <p className="text-secondary-300 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="badge-primary mb-4">Why Kainan Holdings</span>
                            <h2 className="section-heading mb-6">Your Trusted PVIP Partner</h2>
                            <p className="text-secondary-600 mb-8">
                                As an authorized PVIP agency, we have the expertise and official authorization to handle your application professionally and efficiently.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Officially authorized PVIP agency",
                                    "Experienced immigration consultants",
                                    "End-to-end application support",
                                    "Document preparation assistance",
                                    "Regular status updates",
                                    "Post-approval support services",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-secondary-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary-50 rounded-3xl p-8">
                            <h3 className="text-xl font-heading font-bold text-secondary-900 mb-6">
                                Ready to Apply for PVIP?
                            </h3>
                            <p className="text-secondary-600 mb-6">
                                Contact us today to schedule a consultation and begin your PVIP journey with Malaysia&apos;s trusted authorized agency.
                            </p>
                            <Link href="/contact" className="btn-primary w-full text-center">
                                Schedule Consultation
                            </Link>
                            <p className="text-center text-sm text-secondary-500 mt-4">
                                Or call us at <a href="tel:+60333591128" className="text-primary-600 font-medium">+603-3359 1128</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
