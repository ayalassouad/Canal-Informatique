import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Stats from "./components/Stats";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DevisModal from "./components/DevisModal";
import WhatsAppFab from "./components/WhatsAppFab";
import Chatbot from "./components/Chatbot";
import Toast from "./components/Toast";
import { t } from "./data/i18n";
import "./styles.css";

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("canal-language") || "fr");
  const [devisOpen, setDevisOpen] = useState(false);
  const [devisInitialService, setDevisInitialService] = useState("");
  const [toast, setToast] = useState(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    localStorage.setItem("canal-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleOpenDevis = (serviceName = "") => {
    setDevisInitialService(serviceName);
    setDevisOpen(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "products", "about", "faq", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header 
        onOpenDevis={() => handleOpenDevis()} 
        activeSection={activeSection}
        scrollTo={scrollTo}
        language={language}
        setLanguage={setLanguage}
      />

      <main>
        <Hero language={language} scrollTo={scrollTo} onOpenDevis={() => handleOpenDevis()} />
        <Services language={language} onOpenDevis={handleOpenDevis} />
        <Stats language={language} />
        <Products language={language} onOpenDevis={handleOpenDevis} />
        <About language={language} scrollTo={scrollTo} onOpenDevis={() => handleOpenDevis()} />
        <Testimonials language={language} />
        <FAQ language={language} />
        <Contact language={language} showToast={showToast} />
      </main>

      <Footer language={language} scrollTo={scrollTo} onOpenDevis={() => handleOpenDevis()} />

      <DevisModal
        isOpen={devisOpen}
        onClose={() => setDevisOpen(false)}
        initialService={devisInitialService}
        language={language}
        showToast={showToast}
      />

      <WhatsAppFab language={language} />
      <Chatbot language={language} />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
