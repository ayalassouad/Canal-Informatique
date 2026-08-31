document.addEventListener("DOMContentLoaded", () => {
    // Header Scroll
    const header = document.querySelector(".site-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Chatbot Toggle
    const chatBtn = document.getElementById("chat-fab");
    const chatWindow = document.getElementById("chat-window");
    const closeChatBtn = document.getElementById("close-chat-btn");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    if (chatBtn && chatWindow) {
        chatBtn.addEventListener("click", () => {
            chatWindow.classList.toggle("hidden");
        });
        
        closeChatBtn.addEventListener("click", () => {
            chatWindow.classList.add("hidden");
        });

        chatForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (!message) return;

            // Add user message
            addChatMessage(message, "user");
            chatInput.value = "";

            // Call backend API
            try {
                const res = await fetch("/api/chat", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message })
                });
                const data = await res.json();
                if (data.success) {
                    addChatMessage(data.reply, "bot");
                }
            } catch (err) {
                console.error("Chat error:", err);
                addChatMessage("Une erreur s'est produite.", "bot");
            }
        });
    }

    function addChatMessage(text, sender) {
        const div = document.createElement("div");
        div.className = `chat-message ${sender}-message`;
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Forms submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                alert(result.message);
                if (result.success) contactForm.reset();
            } catch (err) {
                alert("Erreur d'envoi");
            }
        });
    }
});


function openDevisModal() {
    document.getElementById("devis-modal").style.display = "flex";
}

function closeDevisModal() {
    document.getElementById("devis-modal").style.display = "none";
}

async function submitDevisForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    try {
        const res = await fetch("/api/devis", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert(result.message);
        if (result.success) {
            form.reset();
            closeDevisModal();
        }
    } catch (err) {
        alert("Erreur d'envoi");
    }
}

