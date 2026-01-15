"use client";

import { useState } from "react";
import Image from "next/image";

interface Certificate {
    id: string;
    title: string;
    number: string;
    description: string;
    issuedBy: string;
    image: string;
    alt: string;
}

interface CertificateGalleryProps {
    certificates: Certificate[];
}

export default function CertificateGallery({ certificates }: CertificateGalleryProps) {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    return (
        <>
            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                    <button
                        key={cert.id}
                        onClick={() => setSelectedCertificate(cert)}
                        className="card p-6 text-left group cursor-pointer hover-lift"
                    >
                        <div className="flex gap-4">
                            {/* Thumbnail */}
                            <div className="w-24 h-32 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-primary-600 transition-all relative">
                                <Image
                                    src={cert.image}
                                    alt={cert.alt}
                                    fill
                                    className="object-cover"
                                    sizes="96px"
                                    unoptimized
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-grow">
                                <h3 className="font-heading font-semibold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-primary-600 text-sm font-medium mb-2">{cert.number}</p>
                                <p className="text-secondary-600 text-sm mb-2 line-clamp-2">{cert.description}</p>
                                <p className="text-secondary-400 text-xs">Issued by: {cert.issuedBy}</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to view
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-secondary-100">
                            <div>
                                <h3 className="font-heading font-bold text-secondary-900">
                                    {selectedCertificate.title}
                                </h3>
                                <p className="text-primary-600 text-sm">{selectedCertificate.number}</p>
                            </div>
                            <button
                                onClick={() => setSelectedCertificate(null)}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-secondary-100 transition-colors"
                                aria-label="Close"
                            >
                                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Certificate Image */}
                        <div className="aspect-[4/3] bg-secondary-50 relative">
                            <Image
                                src={selectedCertificate.image}
                                alt={selectedCertificate.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 896px"
                                unoptimized
                            />
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-secondary-50 border-t border-secondary-100">
                            <p className="text-secondary-600 text-sm">{selectedCertificate.description}</p>
                            <p className="text-secondary-400 text-xs mt-2">Issued by: {selectedCertificate.issuedBy}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
