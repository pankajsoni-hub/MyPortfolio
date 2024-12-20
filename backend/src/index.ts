import {VercelRequest, VercelResponse} from "@vercel/node";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, {Request, Response} from "express";
import nodemailer from "nodemailer";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "psoni96640@gmail.com",
    pass: "ynor fmhw hgib wwxm",
  },
});

// TypeScript interface for form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// POST endpoint to handle contact form submission
app.post(
  "/api/contact",
  async (
    req: Request<{}, {}, ContactFormData>,
    res: Response
  ): Promise<void> => {
    const {name, email, message} = req.body;

    console.log("Received request:", {name, email, message});

    // Validation
    if (!name || !email || !message) {
      console.error("Validation failed: Missing fields");
      res
        .status(400)
        .json({success: false, message: "All fields are required"});
      return;
    }

    try {
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to: "psoni96640@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      });

      console.log("Email sent successfully");
      res
        .status(200)
        .json({success: true, message: "Message sent successfully"});
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({success: false, message: "Failed to send the message"});
    }
  }
);

// Export the handler function for Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
