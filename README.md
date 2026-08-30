# Canal Informatique — Site web complet

Stack :
- Frontend : React + Vite + CSS
- Backend : Node.js + Express
- Contact : API REST, stockage des demandes dans `backend/data/contacts.json`
- Option e-mail : Nodemailer

## Installation

### 1. Backend
```bash
cd backend
npm install
npm run dev
```

Le backend démarre sur `http://localhost:5000`.

### 2. Frontend
Ouvre un deuxième terminal :
```bash
cd frontend
npm install
npm run dev
```

Le site démarre généralement sur `http://localhost:5173`.

## Production
Frontend :
```bash
cd frontend
npm run build
```

Backend :
```bash
cd backend
npm start
```

## Configuration e-mail (optionnelle)
Copie `.env.example` vers `.env` et configure SMTP.

Sans SMTP, les demandes de contact sont sauvegardées dans :
`backend/data/contacts.json`
