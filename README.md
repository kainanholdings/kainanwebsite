# Kainan Holdings Website

A professional recruitment agency website built with Next.js 14, React 18, and Tailwind CSS.

## About

Kainan Holdings (Agensi Pekerjaan Kainan Sdn Bhd) is a licensed recruitment agency in Malaysia providing workforce solutions for various industries including manufacturing, construction, hospitality, and more.

## Features

- **7 Pages**: Homepage, About, Services, PVIP, Industries, Certificates, Contact
- **Responsive Design**: Mobile-first approach with full tablet and desktop support
- **Static Site Generation**: Optimized for fast loading with Next.js static export
- **Contact Form**: Integrated form with API route ready for email service integration
- **Certificate Gallery**: Lightbox component for viewing compliance documents
- **Modern UI**: Glassmorphism, animations, and premium design aesthetics

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── pvip/             # PVIP programme page
│   ├── industries/       # Industries page
│   ├── certificates/     # Certificates page
│   ├── contact/          # Contact page
│   └── api/contact/      # Contact form API
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer
│   ├── ServiceCard.tsx   # Service card component
│   ├── IndustryCard.tsx  # Industry card component
│   ├── TrustBadge.tsx    # License badge component
│   ├── CertificateGallery.tsx  # Certificate lightbox
│   ├── ContactForm.tsx   # Contact form
│   └── GoogleMap.tsx     # Map embed
└── public/
    └── images/
        ├── certificates/ # Certificate scans
        └── industries/   # Industry icons
```

## Configuration

### Email Service Integration

The contact form API route (`src/app/api/contact/route.ts`) is ready for integration with email services like SendGrid, Resend, or Nodemailer. Uncomment the example code and add your API keys.

### Adding Certificate Images

1. Place scanned certificate images in `public/images/certificates/`
2. Name files: `cert-jtksm.jpg`, `cert-ssm.jpg`, `cert-rba.jpg`, `cert-pvip.jpg`
3. Ensure images are high resolution but optimized (ideally under 500KB each)

## Branding

The site uses Kainan's corporate colors:
- **Primary (Red)**: #C41E3A
- **Secondary (Black)**: #1A1A1A
- **Accent (Gold)**: #D4AF37

## License

© 2024 Agensi Pekerjaan Kainan Sdn Bhd. All rights reserved.

## Contact

- **HQ**: +603-3359 1128
- **Penang**: +604-575 2424
- **Email**: agensipekerjaankainan@gmail.com
