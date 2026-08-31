import os

HTML_CONTENT = """<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canal Informatique - Expert IT</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        /* Chatbot specific styles */
        #chat-fab {
            position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px;
            background: var(--gradient-blue, #2563eb); border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            color: white; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
            cursor: pointer; z-index: 1000; transition: 0.3s;
        }
        #chat-fab:hover { transform: scale(1.1); }
        #chat-window {
            position: fixed; bottom: 100px; right: 30px; width: 350px; height: 450px;
            background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 1000; display: flex; flex-direction: column; overflow: hidden; transition: 0.3s;
        }
        #chat-window.hidden { display: none; }
        .chat-header {
            background: var(--gradient-blue, #2563eb); color: white; padding: 15px;
            display: flex; justify-content: space-between; align-items: center; font-weight: bold;
        }
        .chat-header button { background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem; }
        #chat-messages { flex: 1; padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; background: #f6f9fc; }
        .chat-message { max-width: 80%; padding: 10px 14px; border-radius: 12px; font-size: 0.9rem; }
        .user-message { background: #2563eb; color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
        .bot-message { background: #e2e8f0; color: #0f172a; align-self: flex-start; border-bottom-left-radius: 2px; }
        #chat-form { display: flex; padding: 10px; border-top: 1px solid #e2e8f0; background: white; }
        #chat-input { flex: 1; padding: 10px; border: 1px solid #e2e8f0; border-radius: 20px; outline: none; }
        #chat-form button { background: #2563eb; color: white; border: none; padding: 0 15px; margin-left: 10px; border-radius: 20px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="topbar">
        <div class="topbar-info">
            <span><i data-lucide="phone" style="width:14px;height:14px;"></i> +212 6 20 15 54 66</span>
            <span><i data-lucide="map-pin" style="width:14px;height:14px;"></i> Casablanca & Région Rabat-Salé-Kénitra, Maroc</span>
            <span><i data-lucide="clock" style="width:14px;height:14px;"></i> Lun - Ven: 08:30 - 19:00 | Sam: 09:00 - 13:00</span>
        </div>
        <div class="topbar-right">
            <span>Partenaire Informatique certifié depuis 1992</span>
        </div>
    </div>

    <!-- Header -->
    <header class="site-header">
        <div class="logo-btn">
            <span class="logo-badge">CI</span>
            <span class="logo-text">
                <b>CANAL</b><strong>INFORMATIQUE</strong>
                <small>Votre partenaire informatique</small>
            </span>
        </div>
        <nav class="nav-links">
            <a href="#home" class="nav-link active">Accueil</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#products" class="nav-link">Produits</a>
            <a href="#about" class="nav-link">À propos</a>
            <a href="#faq" class="nav-link">FAQ</a>
            <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <div class="nav-actions">
            <button class="btn btn-primary desktop-quote-btn btn-sm" onclick="alert('Devis disponible.')">
                <i data-lucide="file-text" style="width:16px;height:16px;"></i> Demander un devis
            </button>
        </div>
    </header>

    <main>
    <!-- Hero -->
    <section id="home" class="hero-section">
      <div class="hero-glow-orb"></div>
      <div class="hero-grid">
        <div class="hero-content">
          <div class="hero-badge-pill">
            <span class="pulse-dot"></span>
            <span>EXPERT IT AU MAROC DEPUIS 1992</span>
          </div>
          <h1 class="hero-title">CANAL <span>INFORMATIQUE</span></h1>
          <h2 class="hero-subtitle">Solutions IT & Maintenance <em>sur-mesure</em> pour votre entreprise</h2>
          <p class="hero-description">
            Vente de matériel informatique professionnel, installation réseau, maintenance préventive et support réactif. Nous sécurisons et optimisons vos systèmes pour une productivité sans interruption.
          </p>
          <div class="hero-cta-group">
            <a href="#contact" class="btn btn-primary">Simuler un devis <i data-lucide="file-text" style="width:18px;height:18px;"></i></a>
            <a href="#services" class="btn btn-secondary">Nos services <i data-lucide="arrow-right" style="width:18px;height:18px;"></i></a>
          </div>
          <div class="hero-features-list">
            <div class="hero-feature-item"><i data-lucide="check-circle-2" style="width:18px;height:18px;"></i> <span><b>30+ ans</b> d'expérience certifiée</span></div>
            <div class="hero-feature-item"><i data-lucide="check-circle-2" style="width:18px;height:18px;"></i> <span>Intervention sur site <b>en < 2h</b></span></div>
            <div class="hero-feature-item"><i data-lucide="check-circle-2" style="width:18px;height:18px;"></i> <span>Matériel garanti <b>100% constructeur</b></span></div>
            <div class="hero-feature-item"><i data-lucide="check-circle-2" style="width:18px;height:18px;"></i> <span>Support <b>téléphonique & télémaintenance</b></span></div>
          </div>
        </div>
        <div class="hero-visual-container">
          <div class="hero-glass-card">
            <div class="glass-card-header">
              <div class="dots-group">
                <span class="dot dot-red"></span><span class="dot dot-yellow"></span><span class="dot dot-green"></span>
              </div>
              <span class="tech-tag">INFRASTRUCTURE CANAL IT</span>
            </div>
            <div class="tech-showcase-grid">
              <div class="tech-tile"><i data-lucide="server" class="tech-tile-icon" style="width:28px;height:28px;"></i><h4>Serveurs & Cloud</h4><p>Virtualisation, stockage sécurisé NAS & sauvegardes automatiques.</p></div>
              <div class="tech-tile"><i data-lucide="zap" class="tech-tile-icon" style="width:28px;height:28px;"></i><h4>Réseaux Wi-Fi</h4><p>Switchs administrables, Wi-Fi maillé & pare-feu sécurisé.</p></div>
              <div class="tech-tile"><i data-lucide="shield-check" class="tech-tile-icon" style="width:28px;height:28px;"></i><h4>Contrats Maintenance</h4><p>Diagnostic préventif, nettoyage et assistance continue.</p></div>
              <div class="tech-tile"><i data-lucide="headphones" class="tech-tile-icon" style="width:28px;height:28px;"></i><h4>Support Hotline</h4><p>Prise en main immédiate à distance et assistance sur site.</p></div>
            </div>
          </div>
          <div class="floating-badge">
            <div class="floating-badge-icon"><i data-lucide="shield-check" style="width:24px;height:24px;"></i></div>
            <div><b>99.8% de Disponibilité</b><span>Partenaire IT de +1000 clients</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="section-padding bg-light">
      <div class="section-header-center">
        <span class="section-kicker">NOS EXPERTISES</span>
        <h2 class="section-title">Solutions & Services IT</h2>
        <p class="section-desc">Des prestations sur-mesure pour accompagner votre entreprise.</p>
        <div class="underline-center"></div>
      </div>
      <div class="service-grid">
        <div class="service-card">
          <div class="service-card-badge">Vente Matériel</div>
          <div class="service-icon-wrapper"><i data-lucide="monitor" style="width:24px;height:24px;"></i></div>
          <h3>Vente de matériel</h3>
          <p>Équipements informatiques professionnels sélectionnés parmi les grandes marques.</p>
          <ul class="service-features-mini">
            <li><i data-lucide="check" style="width:14px;height:14px;"></i> Garantie constructeur</li>
            <li><i data-lucide="check" style="width:14px;height:14px;"></i> Conseil sur-mesure</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-card-badge">Support</div>
          <div class="service-icon-wrapper"><i data-lucide="wrench" style="width:24px;height:24px;"></i></div>
          <h3>Maintenance & Contrat</h3>
          <p>Maintenance préventive et curative pour préserver la performance de votre parc.</p>
          <ul class="service-features-mini">
            <li><i data-lucide="check" style="width:14px;height:14px;"></i> Interventions sous 2h</li>
            <li><i data-lucide="check" style="width:14px;height:14px;"></i> Nettoyage matériel</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-card-badge">Infrastructure</div>
          <div class="service-icon-wrapper"><i data-lucide="network" style="width:24px;height:24px;"></i></div>
          <h3>Réseaux & Sécurité Wi-Fi</h3>
          <p>Conception, câblage et sécurisation de vos réseaux informatiques d'entreprise.</p>
          <ul class="service-features-mini">
            <li><i data-lucide="check" style="width:14px;height:14px;"></i> Câblage RJ45/Fibre</li>
            <li><i data-lucide="check" style="width:14px;height:14px;"></i> Pare-feu & VPN</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats-section">
      <div class="stats-grid">
          <div class="stat-item"><div class="stat-number">30+</div><div class="stat-label">Années d'Expérience</div><div class="stat-sub">Depuis 1992 au Maroc</div></div>
          <div class="stat-item"><div class="stat-number">1000+</div><div class="stat-label">Clients Satisfaits</div><div class="stat-sub">PME, PMO & Particuliers</div></div>
          <div class="stat-item"><div class="stat-number">99.8%</div><div class="stat-label">Taux de Satisfaction</div><div class="stat-sub">Qualité de service constante</div></div>
          <div class="stat-item"><div class="stat-number">< 2h</div><div class="stat-label">Temps de Réponse</div><div class="stat-sub">Intervention d'urgence réactive</div></div>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="section-padding bg-light" style="border-top: 1px solid var(--border-light)">
      <div class="section-header-center">
        <span class="section-kicker">EQUIPEMENT & MATÉRIEL PRO</span>
        <h2 class="section-title">Catalogue de Matériel Informatique</h2>
        <div class="underline-center"></div>
      </div>
      <div class="products-grid">
          <article class="product-card">
            <div class="product-header">
              <div class="product-icon-box"><i data-lucide="laptop" style="width:24px;height:24px;"></i></div>
              <span class="product-badge">En Stock</span>
            </div>
            <h3>PC Portable Pro</h3>
            <p class="product-specs">Intel Core i7 / 16 Go RAM / 512 Go SSD NVMe</p>
          </article>
          <article class="product-card">
            <div class="product-header">
              <div class="product-icon-box"><i data-lucide="cpu" style="width:24px;height:24px;"></i></div>
              <span class="product-badge">Populaire</span>
            </div>
            <h3>Station de Travail Bureau</h3>
            <p class="product-specs">Intel Core i5 / 16 Go RAM / 1 TB SSD / GPU</p>
          </article>
          <article class="product-card">
            <div class="product-header">
              <div class="product-icon-box"><i data-lucide="server" style="width:24px;height:24px;"></i></div>
              <span class="product-badge">Sur Commande</span>
            </div>
            <h3>Serveur Rack Entreprise</h3>
            <p class="product-specs">Intel Xeon / 32 Go RAM ECC / Double Alim</p>
          </article>
          <article class="product-card">
            <div class="product-header">
              <div class="product-icon-box"><i data-lucide="wifi" style="width:24px;height:24px;"></i></div>
              <span class="product-badge">Réseau</span>
            </div>
            <h3>Switch Administrable 24 Ports</h3>
            <p class="product-specs">Gigabit Ethernet / PoE+ 370W / SFP+ 10G</p>
          </article>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="section-padding bg-light">
      <div class="about-grid">
        <div class="about-content">
          <span class="section-kicker">À PROPOS DE CANAL INFORMATIQUE</span>
          <h2>30 Ans de Savoir-Faire & d'Engagement IT au Maroc</h2>
          <p>Fondée en <b>1992</b>, Canal Informatique s'est imposée comme un acteur de référence au Maroc dans la fourniture de matériel et la gestion de parcs.</p>
        </div>
      </div>
    </section>
    
    <!-- FAQ -->
    <section id="faq" class="section-padding bg-light">
      <div class="section-header-center">
        <span class="section-kicker">DES RÉPONSES À VOS QUESTIONS</span>
        <h2 class="section-title">Foire Aux Questions (FAQ)</h2>
        <div class="underline-center"></div>
      </div>
      <div class="faq-container">
          <div class="faq-item">
            <button class="faq-question">
              <span><i data-lucide="help-circle" style="width:20px;color:var(--primary);"></i> Le matériel vendu est-il garanti ?</span>
            </button>
            <div class="faq-answer"><p>Absolument. Tout notre matériel neuf bénéficie de la garantie constructeur officielle.</p></div>
          </div>
          <div class="faq-item">
            <button class="faq-question">
              <span><i data-lucide="help-circle" style="width:20px;color:var(--primary);"></i> Proposez-vous des contrats de maintenance ?</span>
            </button>
            <div class="faq-answer"><p>Oui ! Nous proposons des contrats annuels modulables comprenant des visites préventives régulières.</p></div>
          </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="contact" class="section-padding">
        <div class="section-header-center">
            <h2 class="section-title">Contactez-nous</h2>
            <div class="underline-center"></div>
        </div>
        <div style="max-width: 600px; margin: 0 auto; padding: 30px; background: white; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <form id="contact-form" style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" name="name" placeholder="Votre nom" required style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;">
                <input type="email" name="email" placeholder="Votre email" required style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;">
                <input type="text" name="phone" placeholder="Téléphone" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;">
                <input type="text" name="subject" placeholder="Sujet" required style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;">
                <textarea name="message" rows="5" placeholder="Votre message" required style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;"></textarea>
                <button type="submit" class="btn btn-primary" style="align-self: flex-start;">Envoyer le message</button>
            </form>
        </div>
    </section>
    </main>
    
    <!-- Footer -->
    <footer class="site-footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <b>CANAL</b> <strong>INFORMATIQUE</strong>
          <p>Votre partenaire informatique de confiance depuis 1992. Vente de matériel, installation réseau, maintenance.</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Canal Informatique. Tous droits réservés.</p>
      </div>
    </footer>

    <!-- Chatbot -->
    <div id="chat-fab"><i data-lucide="message-circle" style="width:24px;height:24px;"></i></div>
    
    <div id="chat-window" class="hidden">
        <div class="chat-header">
            <span>Assistant Canal IT</span>
            <button id="close-chat-btn">×</button>
        </div>
        <div id="chat-messages">
            <div class="chat-message bot-message">Bonjour ! Comment puis-je vous aider aujourd'hui ?</div>
        </div>
        <form id="chat-form">
            <input type="text" id="chat-input" placeholder="Écrivez un message..." autocomplete="off">
            <button type="submit">Envoyer</button>
        </form>
    </div>

    <script src="script.js"></script>
    <script>
      lucide.createIcons();
    </script>
</body>
</html>"""

with open("static/index.html", "w", encoding="utf-8") as f:
    f.write(HTML_CONTENT)
