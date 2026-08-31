import os
import time
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
import resend
from models import db, Contact, Devis

load_dotenv()

app = Flask(__name__, static_folder='static')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

if os.getenv('RESEND_API_KEY'):
    resend.api_key = os.getenv('RESEND_API_KEY')

FROM_ADDRESS = "Canal Informatique <onboarding@resend.dev>"
TO_ADDRESS = os.getenv('TARGET_EMAIL', 'lassouadaya313@gmail.com')

with app.app_context():
    db.create_all()

# --- Helpers ---
def send_email(subject, html, reply_to=None):
    if not resend.api_key:
        print("Resend client not configured")
        return
    try:
        resend.Emails.send({
            "from": FROM_ADDRESS,
            "to": TO_ADDRESS,
            "reply_to": reply_to,
            "subject": subject,
            "html": html
        })
        print(f"Email sent to {TO_ADDRESS}")
    except Exception as e:
        print(f"Failed to send email: {e}")

# --- Static File Serving ---
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

# --- API Endpoints ---
@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({
        "success": True,
        "service": "Canal Informatique API",
        "status": "healthy"
    })

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    phone = data.get('phone', '').strip()
    subject = data.get('subject', '').strip()
    message = data.get('message', '').strip()

    if not name or not email or not subject or not message:
        return jsonify({"success": False, "message": "Veuillez remplir tous les champs obligatoires."}), 400

    new_contact = Contact(
        id=f"cnt_{int(time.time() * 1000)}",
        name=name,
        email=email.lower(),
        phone=phone,
        subject=subject,
        message=message
    )
    db.session.add(new_contact)
    db.session.commit()

    # Send Email
    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
        <h2 style="color: #256bd3;">Nouvelle demande de contact</h2>
        <p><strong>Nom:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Téléphone:</strong> {phone}</p>
        <p><strong>Sujet:</strong> {subject}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f5f8fc; padding: 14px; border-radius: 6px;">{message}</p>
    </div>
    """
    send_email(f"[Contact Website] {subject}", html_content, reply_to=email)

    return jsonify({"success": True, "message": "Votre demande a bien été envoyée."}), 201

@app.route('/api/devis', methods=['POST'])
def devis():
    data = request.json
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    phone = data.get('phone', '').strip()

    if not name or not email or not phone:
        return jsonify({"success": False, "message": "Veuillez remplir vos coordonnées."}), 400

    new_devis = Devis(
        id=f"dvs_{int(time.time() * 1000)}",
        service_type=data.get('serviceType', 'Non précisé'),
        size=data.get('size', 'Non précisé'),
        urgency=data.get('urgency', 'standard'),
        name=name,
        email=email.lower(),
        phone=phone,
        company=data.get('company', '').strip(),
        details=data.get('details', '').strip()
    )
    db.session.add(new_devis)
    db.session.commit()
    
    html_content = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px;">
        <h2 style="color: #256bd3;">Nouvelle demande de devis</h2>
        <p><strong>Service:</strong> {new_devis.service_type}</p>
        <p><strong>Nom:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
    </div>
    """
    send_email(f"[Demande Devis] {new_devis.service_type} - {name}", html_content, reply_to=email)

    return jsonify({"success": True, "message": "Votre demande de devis a été enregistrée."}), 201

# --- Chatbot Endpoint ---
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '').lower()
    
    # Simple rule-based logic
    reply = "Bonjour ! Comment puis-je vous aider ? Je peux vous renseigner sur nos services, nos tarifs, ou nos coordonnées."
    
    if "service" in user_message or "prestation" in user_message:
        reply = "Nous proposons des services de maintenance informatique, d'installation réseau, de récupération de données et d'assistance aux entreprises."
    elif "prix" in user_message or "tarif" in user_message or "devis" in user_message:
        reply = "Nos tarifs dépendent de vos besoins. Je vous invite à cliquer sur le bouton 'Demander un devis' en haut de la page pour obtenir une estimation personnalisée !"
    elif "contact" in user_message or "téléphone" in user_message or "appeler" in user_message:
        reply = "Vous pouvez nous contacter au 01 23 45 67 89 ou par email via notre formulaire de contact."
    elif "bonjour" in user_message or "salut" in user_message:
        reply = "Bonjour ! Je suis l'assistant virtuel de Canal Informatique. Que puis-je faire pour vous ?"
    
    return jsonify({"success": True, "reply": reply})

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
