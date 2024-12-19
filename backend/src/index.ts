import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// TypeScript interface for form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// POST endpoint to handle contact form submission
app.post('/api/contact', async (req: Request<{}, {}, ContactFormData>, res: Response): Promise<void> => {
  const {name, email, message} = req.body;

  // Validation
  if (!name || !email || !message) {
    res.status(400).json({success: false, message: 'All fields are required'});
    return;
  }

  try {
    // Sending email
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send the message' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
