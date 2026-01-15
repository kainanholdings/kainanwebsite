"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "PVIP", href: "/pvip" },
    { name: "Industries", href: "/industries" },
    { name: "Certificates", href: "/certificates" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0">
                            <Image
                                src="https://raw.githubusercontent.com/kainanholdings/kainanwebsite/main/public/images/logo/kainan_logo-v2.png"
                                alt="Kainan Holdings Logo"
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading font-bold text-xl text-secondary-900">KAINAN</span>
                            <span className="text-xs text-secondary-500 tracking-wider">HOLDINGS SDN BHD</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/contact" className="btn-primary">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 rounded-md text-secondary-700 hover:text-primary-600 hover:bg-secondary-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-secondary-100">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-3 text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <Link
                                    href="/contact"
                                    className="btn-primary w-full text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
