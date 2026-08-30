import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

let _resend = null;
function getResend() {
  if (!_resend) {
    if (!process.env.RESEND_API_KEY) {
      console.error("⚠️  RESEND_API_KEY env var is not set — emails disabled");
      return null;
    }
    _resend = new Resend(process.env.RESEND_API_KEY);
  }
  return _resend;
}
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data");
const contactsFile = path.join(dataDir, "contacts.json");
const devisFile = path.join(dataDir, "devis.json");

// The verified Resend sender domain (always works without domain verification)
const FROM_ADDRESS = "Canal Informatique <onboarding@resend.dev>";
// Where all form notifications land
const TO_ADDRESS = process.env.TARGET_EMAIL || "lassouadaya313@gmail.com";

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({
  origin: function(origin, callback) {
    const allowed = [
      "http://localhost:5173",
      "https://canal-informatique-1.onrender.com",
      ...(process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(",") : [])
    ];
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS: " + origin));
    }
  },
  credentials: true
}));
app.use(express.json({ limit: "1mb" }));

// ── Helpers ─────────────────────────────────────────────────────────────────
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

function sendEmail({ subject, html, replyTo }) {
  const client = getResend();
  if (!client) return;
  client.emails
    .send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      reply_to: replyTo || undefined,
      subject,
      html,
    })
    .then((r) => console.log("✅ Email sent to", TO_ADDRESS, r))
    .catch((e) => console.error("❌ Resend error:", e?.message || e));
}

// ── Health Check ─────────────────────────────────────────────────────────────
app.get("/api/health", (_, res) => {
  res.json({
    success: true,
    service: "Canal Informatique API",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// ── Contact Form ─────────────────────────────────────────────────────────────
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

    // Respond immediately
    res.status(201).json({
      success: true,
      message: "Votre demande a bien été envoyée. Notre équipe vous contactera sous 24h."
    });

    // Fire email in background
    sendEmail({
      subject: `[Contact Website] ${contact.subject}`,
      replyTo: contact.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #162337; border: 1px solid #dde4ef; border-radius: 8px;">
          <h2 style="color: #256bd3; border-bottom: 2px solid #256bd3; padding-bottom: 10px;">📬 Nouvelle demande de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Nom:</td><td style="padding: 8px;">${contact.name}</td></tr>
            <tr style="background:#f5f8fc;"><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${contact.email}">${contact.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Téléphone:</td><td style="padding: 8px;">${contact.phone || "Non renseigné"}</td></tr>
            <tr style="background:#f5f8fc;"><td style="padding: 8px; font-weight: bold;">Sujet:</td><td style="padding: 8px;">${contact.subject}</td></tr>
          </table>
          <h3 style="color: #256bd3; margin-top: 20px;">Message:</h3>
          <p style="white-space: pre-wrap; background: #f5f8fc; padding: 14px; border-radius: 6px; line-height: 1.6;">${contact.message}</p>
          <p style="color: #888; font-size: 12px; margin-top: 20px;">Envoyé depuis canal-informatique.onrender.com · ${new Date().toLocaleString("fr-FR")}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur interne est survenue. Veuillez réessayer plus tard."
    });
  }
});

// ── Devis Form ───────────────────────────────────────────────────────────────
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

    // Respond immediately
    res.status(201).json({
      success: true,
      message: "Votre demande de devis a été enregistrée avec succès. Un conseiller vous contactera sous 2h."
    });

    // Fire email in background
    sendEmail({
      subject: `[Demande Devis] ${devisRequest.serviceType} — ${devisRequest.name}`,
      replyTo: devisRequest.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #162337; border: 1px solid #dde4ef; border-radius: 8px;">
          <h2 style="color: #256bd3; border-bottom: 2px solid #256bd3; padding-bottom: 10px;">🖥️ Nouvelle demande de devis</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${devisRequest.serviceType}</td></tr>
            <tr style="background:#f5f8fc;"><td style="padding: 8px; font-weight: bold;">Taille de parc:</td><td style="padding: 8px;">${devisRequest.size}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Urgence:</td><td style="padding: 8px;">${devisRequest.urgency}</td></tr>
          </table>
          <h3 style="color: #256bd3; margin-top: 20px;">Coordonnées client:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Nom:</td><td style="padding: 8px;">${devisRequest.name}</td></tr>
            <tr style="background:#f5f8fc;"><td style="padding: 8px; font-weight: bold;">Entreprise:</td><td style="padding: 8px;">${devisRequest.company || "Particulier / N.A."}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${devisRequest.email}">${devisRequest.email}</a></td></tr>
            <tr style="background:#f5f8fc;"><td style="padding: 8px; font-weight: bold;">Téléphone:</td><td style="padding: 8px;">${devisRequest.phone}</td></tr>
          </table>
          ${devisRequest.details ? `<h3 style="color: #256bd3; margin-top: 20px;">Détails:</h3><p style="white-space: pre-wrap; background: #f5f8fc; padding: 14px; border-radius: 6px;">${devisRequest.details}</p>` : ""}
          <p style="color: #888; font-size: 12px; margin-top: 20px;">Envoyé depuis canal-informatique.onrender.com · ${new Date().toLocaleString("fr-FR")}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Devis error:", error);
    res.status(500).json({
      success: false,
      message: "Une erreur est survenue lors de l'enregistrement de votre demande de devis."
    });
  }
});

// ── Admin Endpoints ───────────────────────────────────────────────────────────
app.get("/api/contacts", async (_, res) => {
  try {
    const data = await fs.readFile(contactsFile, "utf8");
    res.json({ success: true, contacts: JSON.parse(data) });
  } catch {
    res.json({ success: true, contacts: [] });
  }
});

app.get("/api/devis", async (_, res) => {
  try {
    const data = await fs.readFile(devisFile, "utf8");
    res.json({ success: true, devis: JSON.parse(data) });
  } catch {
    res.json({ success: true, devis: [] });
  }
});

// ── 404 ───────────────────────────────────────────────────────────────────────
app.use((_, res) => res.status(404).json({ success: false, message: "Route introuvable." }));

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Canal Informatique API running on http://localhost:${PORT}`);
  console.log(`  → Emails will be sent TO: ${TO_ADDRESS}`);
  console.log(`  → Emails sent FROM: ${FROM_ADDRESS}`);
});
