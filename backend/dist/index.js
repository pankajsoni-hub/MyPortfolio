"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// Email transporter setup
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    auth: {
        user: "psoni96640@gmail.com",
        pass: "ynor fmhw hgib wwxm",
    },
});
// POST endpoint to handle contact form submission
app.post("/api/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message } = req.body;
    console.log("Received request:", { name, email, message });
    // Validation
    if (!name || !email || !message) {
        console.error("Validation failed: Missing fields");
        res
            .status(400)
            .json({ success: false, message: "All fields are required" });
        return;
    }
    try {
        yield transporter.sendMail({
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
            .json({ success: true, message: "Message sent successfully" });
    }
    catch (error) {
        console.error("Error sending email:", error);
        res
            .status(500)
            .json({ success: false, message: "Failed to send the message" });
    }
}));
// Export the handler function for Vercel
exports.default = (req, res) => {
    app(req, res);
};
