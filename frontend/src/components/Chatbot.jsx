import { useState } from "react";
import { MessageSquareText, SendHorizonal, X, Bot, User } from "lucide-react";

const API_URL = window.location.hostname === "localhost"
  ? "http://localhost:5000"
  : "https://canal-informatique-backend.onrender.com";

const quickActions = [
  "Devis",
  "Maintenance",
  "Réseau Wi‑Fi",
  "Contact"
];

const defaultMessages = [
  {
    sender: "bot",
    text: "Bonjour ! Je suis l’assistant de Canal Informatique. Je peux vous aider sur les services, le devis et le contact."
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(defaultMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (value) => {
    const trimmed = String(value || "").trim();
    if (!trimmed || loading) return;

    setMessages((current) => [...current, { sender: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed })
      });

      const data = await response.json();
      const reply = data?.reply || "Je n’ai pas pu récupérer la réponse. Merci de réessayer.";

      setMessages((current) => [...current, { sender: "bot", text: reply }]);
    } catch (error) {
      console.error("Chatbot request failed:", error);
      setMessages((current) => [
        ...current,
        { sender: "bot", text: "Une erreur est survenue. Merci de réessayer dans quelques instants." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    await handleSend(input);
  };

  return (
    <>
      <button
        type="button"
        className="chatbot-fab"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Ouvrir le chatbot"
        title="Assistant Canal Informatique"
      >
        {isOpen ? <X size={24} /> : <MessageSquareText size={26} />}
      </button>

      {isOpen && (
        <div className="chatbot-panel" role="dialog" aria-label="Chatbot Canal Informatique">
          <div className="chatbot-header">
            <div className="chatbot-title-wrap">
              <div className="chatbot-avatar">
                <Bot size={18} />
              </div>
              <div>
                <strong>Assistant CI</strong>
                <small>En ligne</small>
              </div>
            </div>
            <button type="button" className="chatbot-close" onClick={() => setIsOpen(false)} aria-label="Fermer le chatbot">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-body">
            {messages.map((message, index) => (
              <div key={`${message.sender}-${index}`} className={`chatbot-message ${message.sender}`}>
                <span className="chatbot-icon">
                  {message.sender === "bot" ? <Bot size={14} /> : <User size={14} />}
                </span>
                <p>{message.text}</p>
              </div>
            ))}

            {loading && (
              <div className="chatbot-message bot">
                <span className="chatbot-icon">
                  <Bot size={14} />
                </span>
                <p>Je réfléchis à votre demande…</p>
              </div>
            )}

            <div className="chatbot-quick-actions">
              {quickActions.map((action) => (
                <button key={action} type="button" onClick={() => handleSend(action)}>
                  {action}
                </button>
              ))}
            </div>
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Écrivez votre message..."
              aria-label="Message du chatbot"
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Envoyer le message">
              <SendHorizonal size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
