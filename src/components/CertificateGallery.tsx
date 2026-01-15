"use client";

import { useState } from "react";

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
                        className="card p-6 text-left group cursor-pointer"
                    >
                        <div className="flex gap-4">
                            {/* Thumbnail */}
                            <div className="w-24 h-32 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-primary-600 transition-all">
                                {/* Placeholder certificate icon */}
                                <svg className="w-12 h-12 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>

                            {/* Info */}
                            <div className="flex-grow">
                                <h3 className="font-heading font-semibold text-secondary-900 mb-1 group-hover:text-primary-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-primary-600 text-sm font-medium mb-2">{cert.number}</p>
                                <p className="text-secondary-600 text-sm mb-2">{cert.description}</p>
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

                        {/* Certificate Image Placeholder */}
                        <div className="aspect-[4/3] bg-secondary-50 flex items-center justify-center">
                            {/* Placeholder - replace with actual image when available */}
                            <div className="text-center p-8">
                                <svg className="w-24 h-24 mx-auto text-secondary-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <p className="text-secondary-500 mb-2">Certificate Image</p>
                                <p className="text-secondary-400 text-sm">
                                    Actual certificate scan will be displayed here
                                </p>
                            </div>
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
