import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Kainan Holdings | Licensed Recruitment Agency Malaysia",
    description: "Kainan Holdings - Your trusted JTKSM licensed recruitment partner in Malaysia. We provide manpower supply, executive search, HR services, and PVIP authorization for manufacturing, construction, hospitality, and more.",
    keywords: "recruitment agency Malaysia, manpower supply, foreign worker recruitment, JTKSM license, executive search, HR services, PVIP Malaysia, staffing solutions",
    authors: [{ name: "Kainan Holdings" }],
    openGraph: {
        title: "Kainan Holdings | Licensed Recruitment Agency Malaysia",
        description: "Connecting the Right People for Outstanding Efficiency. Licensed recruitment partner for local and foreign workforce solutions.",
        type: "website",
        locale: "en_MY",
        siteName: "Kainan Holdings",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
