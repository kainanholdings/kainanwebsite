import Link from "next/link";

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "PVIP Programme", href: "/pvip" },
    { name: "Industries", href: "/industries" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact Us", href: "/contact" },
];

const services = [
    { name: "Manpower Supply", href: "/services#manpower" },
    { name: "Executive Search", href: "/services#executive" },
    { name: "HR Services", href: "/services#hr" },
    { name: "Hostel Management", href: "/services#hostel" },
];

export default function Footer() {
    return (
        <footer className="gradient-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-heading font-bold text-xl">K</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-xl">KAINAN</span>
                                <span className="text-xs text-secondary-400 tracking-wider">HOLDINGS SDN BHD</span>
                            </div>
                        </div>
                        <p className="text-secondary-300 text-sm leading-relaxed mb-6">
                            Your trusted licensed recruitment partner in Malaysia. Connecting the right people for outstanding efficiency.
                        </p>
                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-3">
                            <span className="badge bg-primary-600/20 text-primary-300 text-xs">
                                JTKSM 1131-1
                            </span>
                            <span className="badge bg-accent-400/20 text-accent-300 text-xs">
                                SSM 201601030868
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-secondary-300 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            {/* HQ */}
                            <div>
                                <h4 className="font-medium text-accent-400 text-sm mb-2">Headquarters (Selangor)</h4>
                                <p className="text-secondary-300 text-sm leading-relaxed">
                                    No 20, 3rd Floor,<br />
                                    Jalan Setia Perdana BF U13/BF,<br />
                                    Bandar Setia Alam
                                </p>
                                <p className="text-secondary-300 text-sm mt-2">
                                    <a href="tel:+60333591128" className="hover:text-white transition-colors">
                                        +603-3359 1128
                                    </a>
                                </p>
                            </div>

                            {/* Penang */}
                            <div>
                                <h4 className="font-medium text-accent-400 text-sm mb-2">Penang Branch</h4>
                                <p className="text-secondary-300 text-sm leading-relaxed">
                                    12 Tingkat 1,<br />
                                    Jalan Persiaran Bertam Seksyen 4/2,<br />
                                    Bandar Putra Bertam
                                </p>
                                <p className="text-secondary-300 text-sm mt-2">
                                    <a href="tel:+6045752424" className="hover:text-white transition-colors">
                                        +604-575 2424
                                    </a>
                                </p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-secondary-300 text-sm">
                                    <a href="mailto:agensipekerjaankainan@gmail.com" className="hover:text-white transition-colors">
                                        agensipekerjaankainan@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-secondary-700/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-secondary-400 text-sm">
                            © {new Date().getFullYear()} Agensi Pekerjaan Kainan Sdn Bhd. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <span className="text-secondary-400 text-xs">
                                Reg. No: 201601030868 (1201809-P)
                            </span>
                            <span className="text-secondary-400 text-xs">
                                License: JTKSM 1131-1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
