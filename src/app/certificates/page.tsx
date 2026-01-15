import { Metadata } from "next";
import CertificateGallery from "@/components/CertificateGallery";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
    title: "Certificates & Compliance | Kainan Holdings",
    description: "View Kainan Holdings' official certifications including JTKSM License C, SSM Registration, RBA Compliance Training, and PVIP Authorization.",
};

const certificates = [
    {
        id: "jtksm",
        title: "JTKSM License C",
        number: "JTKSM 1131-1",
        description: "Official license from Jabatan Tenaga Kerja Semenanjung Malaysia authorizing recruitment operations for local and foreign workers.",
        issuedBy: "Ministry of Human Resources Malaysia",
        image: "/images/certificates/cert-jtksm.jpg",
        alt: "JTKSM License C Certificate No. 1131-1 for Agensi Pekerjaan Kainan Sdn Bhd",
    },
    {
        id: "ssm",
        title: "SSM Certificate of Incorporation",
        number: "201601030868 (1201809-P)",
        description: "Official registration with Suruhanjaya Syarikat Malaysia (Companies Commission of Malaysia) as a private limited company.",
        issuedBy: "Suruhanjaya Syarikat Malaysia",
        image: "/images/certificates/cert-ssm.jpg",
        alt: "SSM Certificate of Incorporation for Agensi Pekerjaan Kainan Sdn Bhd Registration No. 201601030868",
    },
    {
        id: "rba",
        title: "RBA Awareness Training",
        number: "December 2023",
        description: "Completion certificate for Responsible Business Alliance (RBA) Awareness/Workshop Training, demonstrating commitment to ethical recruitment practices.",
        issuedBy: "Responsible Business Alliance",
        image: "/images/certificates/cert-rba.jpg",
        alt: "RBA Responsible Business Alliance Awareness Training Certificate for Kainan Holdings December 2023",
    },
    {
        id: "pvip",
        title: "PVIP Authorization",
        number: "Authorized Agency",
        description: "Official authorization as an approved agency for the Malaysia Premium Visa Programme (PVIP).",
        issuedBy: "Immigration Department Malaysia",
        image: "/images/certificates/cert-pvip.jpg",
        alt: "PVIP Malaysia Premium Visa Programme Authorization Certificate for Kainan Holdings",
    },
];

export default function CertificatesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-50 to-white"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-mesh opacity-30"></div>
                <div className="absolute bottom-10 left-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl animate-float-slow"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="max-w-3xl">
                        <span className="badge-primary mb-4">Compliance & Certifications</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary-900 mb-6">
                            Our Credentials
                        </h1>
                        <p className="text-lg text-secondary-600 leading-relaxed">
                            We maintain full transparency about our licensing and compliance status. Below are our official certifications that authorize us to operate as a licensed recruitment agency in Malaysia.
                        </p>
                    </AnimatedSection>
                </div>
            </section>

            {/* Credentials Summary */}
            <section className="py-12 bg-white border-b border-secondary-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: "JTKSM", sub: "License C Holder", detail: "No. 1131-1", color: "bg-primary-50 text-primary-600" },
                            { label: "SSM", sub: "Registered Company", detail: "Since 2016", color: "bg-accent-50 text-accent-600" },
                            { label: "RBA", sub: "Compliant Practices", detail: "Certified 2023", color: "bg-green-50 text-green-600" },
                            { label: "PVIP", sub: "Authorized Agency", detail: "Official Partner", color: "bg-blue-50 text-blue-600" },
                        ].map((item, index) => (
                            <AnimatedSection key={item.label} animation="scale" delay={index * 80}>
                                <div className={`text-center p-4 ${item.color.split(' ')[0]} rounded-xl hover-magnetic`}>
                                    <div className={`text-2xl font-heading font-bold ${item.color.split(' ')[1]} mb-1`}>{item.label}</div>
                                    <div className="text-sm text-secondary-600">{item.sub}</div>
                                    <div className="text-xs text-secondary-500 mt-1">{item.detail}</div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Gallery */}
            <section className="py-20 bg-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up" className="text-center mb-12">
                        <h2 className="section-heading mb-4">Certificate Gallery</h2>
                        <p className="section-subheading mx-auto">
                            Click on any certificate to view in detail.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-up" delay={100}>
                        <CertificateGallery certificates={certificates} />
                    </AnimatedSection>
                </div>
            </section>

            {/* Compliance Commitment */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <AnimatedSection animation="slide-left">
                            <span className="badge-accent mb-4">Our Commitment</span>
                            <h2 className="section-heading mb-6">
                                Ethical Recruitment Excellence
                            </h2>
                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                At Kainan Holdings, we are committed to maintaining the highest standards of ethical recruitment. Our RBA compliance certification demonstrates our dedication to responsible business practices throughout the recruitment process.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Zero tolerance for forced labor and human trafficking",
                                    "Fair and transparent recruitment fees",
                                    "Proper documentation for all workers",
                                    "Safe and hygienic worker accommodation",
                                    "Regular audits and compliance reviews",
                                    "Continuous staff training on ethical practices",
                                ].map((item, index) => (
                                    <AnimatedSection key={item} animation="fade-up" delay={index * 80}>
                                        <div className="flex items-start gap-3 hover-magnetic p-1 -m-1 rounded-lg transition-all">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-secondary-700">{item}</span>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="slide-right">
                            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-8 hover-glow transition-all duration-500">
                                <div className="text-center">
                                    <div className="w-20 h-20 mx-auto bg-green-600 rounded-2xl flex items-center justify-center mb-4 animate-bounce-subtle">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-secondary-900 mb-2">
                                        RBA Compliant
                                    </h3>
                                    <p className="text-secondary-600 text-sm mb-4">
                                        Committed to the Responsible Business Alliance Code of Conduct
                                    </p>
                                    <div className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg font-medium animate-pulse-glow">
                                        Certified December 2023
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Verification CTA */}
            <section className="py-16 gradient-dark text-white">
                <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Need to Verify Our Credentials?
                    </h2>
                    <p className="text-secondary-300 mb-8">
                        For government bodies, auditors, or clients who need to verify our licensing status, please contact us directly.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn-accent hover-lift">
                            Request Verification
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
