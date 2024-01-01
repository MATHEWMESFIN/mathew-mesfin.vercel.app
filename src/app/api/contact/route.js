import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { email, subject , message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            }
        });

        const mailOptions = {
            from: process.env.FROM_EMAIL_ADDRESS,
            to: process.env.EMAIL_ADDRESS,
            subject: subject,
            html: `
                <h2>From: ${email}</h2>
                <h3>Subject: ${subject}</h3>
                <h3>${message}</h3>
            `
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, {status: 200});
    } catch (error) {
        return NextResponse.json({ message: "Email failed to send" }, {status: 500});
    }
}