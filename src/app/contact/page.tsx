import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
    title: "Contact Us | Kainan Holdings",
    description: "Get in touch with Kainan Holdings. Visit our offices in Selangor (HQ) or Penang, call us, or send an inquiry through our contact form.",
};

const offices = [
    {
        id: "hq",
        name: "Headquarters (Selangor)",
        address: "No 20, 3rd Floor, Jalan Setia Perdana BF U13/BF, Bandar Setia Alam, 40170 Shah Alam, Selangor",
        phone: "+603-3359 1128",
        phoneLink: "+60333591128",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.4!3d3.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnMDAuMCJOIDEwMcKwMjQnMDAuMCJF!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
    {
        id: "penang",
        name: "Penang Branch",
        address: "12 Tingkat 1, Jalan Persiaran Bertam Seksyen 4/2, Bandar Putra Bertam, 13200 Kepala Batas, Pulau Pinang",
        phone: "+604-575 2424",
        phoneLink: "+6045752424",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0!2d100.4!3d5.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzAnMDAuMCJOIDEwMMKwMjQnMDAuMCJF!5e0!3m2!1sen!2smy!4v1600000000000!5m2!1sen!2smy",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 gradient-dark">
                    <div className="absolute inset-0 bg-mesh opacity-30"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
                    <div className="max-w-3xl">
                        <span className="badge bg-accent-400/20 text-accent-300 mb-4">Contact Us</span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Let&apos;s Start a Conversation
                        </h1>
                        <p className="text-lg text-secondary-300 leading-relaxed">
                            Ready to find the right workforce solution for your business? Get in touch with our team today. We&apos;re here to help you build stronger teams.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left: Office Locations */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-8">
                                Our Offices
                            </h2>

                            <div className="space-y-8">
                                {offices.map((office) => (
                                    <div key={office.id} className="card p-6">
                                        <h3 className="text-lg font-heading font-semibold text-secondary-900 mb-4">
                                            {office.name}
                                        </h3>

                                        <div className="space-y-3">
                                            {/* Address */}
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-secondary-500">Address</p>
                                                    <p className="text-secondary-700">{office.address}</p>
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-secondary-500">Phone</p>
                                                    <a href={`tel:${office.phoneLink}`} className="text-primary-600 font-medium hover:underline">
                                                        {office.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Hours */}
                                            <div className="flex items-start gap-3">
                                                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-secondary-500">Office Hours</p>
                                                    <p className="text-secondary-700">{office.hours}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Email */}
                            <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-secondary-500">Email Us</p>
                                        <a href="mailto:agensipekerjaankainan@gmail.com" className="text-primary-600 font-medium hover:underline">
                                            agensipekerjaankainan@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-8">
                                Send Us a Message
                            </h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Maps Section */}
            <section className="py-20 bg-secondary-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="section-heading mb-4">Find Us</h2>
                        <p className="section-subheading mx-auto">
                            Visit our offices in Selangor or Penang
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {offices.map((office) => (
                            <div key={office.id} className="card overflow-hidden">
                                <GoogleMap title={office.name} />
                                <div className="p-4">
                                    <h3 className="font-heading font-semibold text-secondary-900">{office.name}</h3>
                                    <p className="text-secondary-600 text-sm mt-1">{office.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact CTA */}
            <section className="py-16 gradient-dark text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-4">
                        Need Immediate Assistance?
                    </h2>
                    <p className="text-secondary-300 mb-8">
                        Call us directly for urgent staffing needs or inquiries.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+60333591128" className="btn-accent">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            HQ: +603-3359 1128
                        </a>
                        <a href="tel:+6045752424" className="btn-outline border-white/30 text-white hover:bg-white/10">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Penang: +604-575 2424
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
