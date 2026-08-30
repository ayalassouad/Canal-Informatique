import { CheckCircle2, AlertCircle, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  return (
    <div className="toast-container">
      <div className={`toast ${toast.type}`}>
        {toast.type === "success" ? (
          <CheckCircle2 size={20} style={{ color: "var(--emerald)" }} />
        ) : (
          <AlertCircle size={20} style={{ color: "#ef4444" }} />
        )}
        <span>{toast.message}</span>
        <button onClick={onClose} style={{ marginLeft: "auto", color: "var(--text-muted)" }}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
