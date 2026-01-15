import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    service: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactFormData = await request.json();

        // Validate required fields
        if (!data.name || !data.email || !data.service || !data.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // In production, you would integrate with an email service here
        // Examples: SendGrid, Resend, Nodemailer, etc.
        //
        // Example with Resend:
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({
        //   from: 'website@kainan.com',
        //   to: 'agensipekerjaankainan@gmail.com',
        //   subject: `New Inquiry: ${data.service}`,
        //   html: `
        //     <h2>New Contact Form Submission</h2>
        //     <p><strong>Name:</strong> ${data.name}</p>
        //     <p><strong>Email:</strong> ${data.email}</p>
        //     <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        //     <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        //     <p><strong>Service Interest:</strong> ${data.service}</p>
        //     <p><strong>Message:</strong></p>
        //     <p>${data.message}</p>
        //   `,
        // });

        // For now, log the submission (remove in production)
        console.log("Contact form submission:", {
            name: data.name,
            email: data.email,
            company: data.company,
            phone: data.phone,
            service: data.service,
            message: data.message,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
