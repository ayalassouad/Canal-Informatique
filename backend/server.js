import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data");
const contactsFile = path.join(dataDir, "contacts.json");
const devisFile = path.join(dataDir, "devis.json");

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(",") : true
}));
app.use(express.json({ limit: "1mb" }));

// Helper to write JSON data safely
async function appendJsonData(filePath, newItem) {
  await fs.mkdir(dataDir, { recursive: true });
  let items = [];
  try {
    const raw = await fs.readFile(filePath, "utf8");
    items = JSON.parse(raw);
    if (!Array.isArray(items)) items = [];
  } catch {
    items = [];
  }
  items.unshift(newItem);
  await fs.writeFile(filePath, JSON.stringify(items, null, 2), "utf8");
  return items;
}

// Health Check Endpoint
app.get("/api/health", (_, res) => {
  res.json({
    success: true,
    service: "Canal Informatique API",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// Contact Form Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone = "", subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Veuillez remplir tous les champs obligatoires (Nom, Email, Sujet, Message)."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Adresse email invalide." });
    }

    const contact = {
      id: "cnt_" + Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    await appendJsonData(contactsFile, contact);

    // Email notification if SMTP configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        });

        await transporter.sendMail({
          from: `"Canal Informatique Site" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL,
          replyTo: contact.email,
          subject: `[Contact Website] ${contact.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #162337;">
              <h2 style="color: #256bd3;">Nouvelle demande de contact web</h2>
              <p><strong>Nom:</strong> ${contact.name}</p>
              <p><strong>Email:</strong> ${contact.email}</p>
              <p><strong>Téléphone:</strong> ${contact.phone || "Non renseigné"}</p>
              <p><strong>Sujet:</strong> ${contact.subject}</p>
              <hr style="border: 0; border-top: 1px solid #ddd;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; background: #f5f8fc; padding: 14px; border-radius: 6px;">${contact.message}</p>
            </div>
          `
        });
      } catch (mailErr) {
        console.error("Nodemailer error (contact):", mailErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Votre demande a bien été envoyée. Notre équipe vous contactera sous 24h."
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur interne est survenue. Veuillez réessayer plus tard."
    });
  }
});

// Devis Request Endpoint
app.post("/api/devis", async (req, res) => {
  try {
    const { serviceType, size, urgency, name, email, phone, company = "", details = "" } = req.body;

    if (!name?.trim() || !email?.trim() || !phone?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Veuillez remplir vos coordonnées (Nom, Email et Téléphone)."
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Adresse email invalide." });
    }

    const devisRequest = {
      id: "dvs_" + Date.now().toString(),
      serviceType: serviceType || "Non précisé",
      size: size || "Non précisé",
      urgency: urgency || "standard",
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      company: company.trim(),
      details: details.trim(),
      createdAt: new Date().toISOString()
    };

    await appendJsonData(devisFile, devisRequest);

    // Email notification if SMTP configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_EMAIL) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        });

        await transporter.sendMail({
          from: `"Canal Informatique Site" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_EMAIL,
          replyTo: devisRequest.email,
          subject: `[Demande Devis] ${devisRequest.serviceType} - ${devisRequest.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #162337;">
              <h2 style="color: #256bd3;">Nouvelle Simulation de Devis Informatique</h2>
              <p><strong>Service demandé:</strong> ${devisRequest.serviceType}</p>
              <p><strong>Taille de parc:</strong> ${devisRequest.size}</p>
              <p><strong>Urgence:</strong> ${devisRequest.urgency}</p>
              <hr style="border: 0; border-top: 1px solid #ddd;" />
              <p><strong>Nom Client:</strong> ${devisRequest.name}</p>
              <p><strong>Entreprise:</strong> ${devisRequest.company || "Particulier/N.A."}</p>
              <p><strong>Email:</strong> ${devisRequest.email}</p>
              <p><strong>Téléphone:</strong> ${devisRequest.phone}</p>
              <p><strong>Détails:</strong> ${devisRequest.details || "Aucune précision"}</p>
            </div>
          `
        });
      } catch (mailErr) {
        console.error("Nodemailer error (devis):", mailErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès. Un conseiller vous contactera sous 2h."
    });
  } catch (error) {
    console.error("Devis error:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de l'enregistrement de votre demande de devis."
    });
  }
});

// Endpoint GET Contacts (Admin)
app.get("/api/contacts", async (_, res) => {
  try {
    const data = await fs.readFile(contactsFile, "utf8");
    res.json({ success: true, contacts: JSON.parse(data) });
  } catch {
    res.json({ success: true, contacts: [] });
  }
});

// Endpoint GET Devis (Admin)
app.get("/api/devis", async (_, res) => {
  try {
    const data = await fs.readFile(devisFile, "utf8");
    res.json({ success: true, devis: JSON.parse(data) });
  } catch {
    res.json({ success: true, devis: [] });
  }
});

// 404 Handler
app.use((_, res) => res.status(404).json({ success: false, message: "Route introuvable." }));

app.listen(PORT, () => {
  console.log(`Canal Informatique API running on http://localhost:${PORT}`);
});
