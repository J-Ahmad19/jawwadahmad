import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, FileText, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="bg-background min-h-screen font-sans text-white selection:bg-primary selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-background/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-bold font-mono tracking-tighter text-primary group-hover:text-white transition-colors">
              JA<span className="text-white group-hover:text-primary transition-colors">.</span>
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-gray-400 border-l border-white/20 pl-2">
              Jawwad Ahmad
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-gray-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/Jawwad_Ahmad_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold border border-primary/50 text-primary bg-primary/10 px-4 py-2 rounded-full hover:bg-primary hover:text-black transition-all shadow-[0_0_12px_rgba(0,240,255,0.25)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 text-sm font-mono uppercase tracking-wider text-gray-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-primary transition-colors py-1.5 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="/Jawwad_Ahmad_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-xs font-mono font-bold border border-primary text-primary bg-primary/10 py-3 rounded-xl hover:bg-primary hover:text-black transition-all text-center"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume (PDF)</span>
                </a>
                <div className="flex justify-center gap-6 pt-2 text-gray-400">
                  <a href="https://www.linkedin.com/in/jawwad-ahmad-126999312/" target="_blank" rel="noreferrer" className="hover:text-primary">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/J-Ahmad19" target="_blank" rel="noreferrer" className="hover:text-primary">
                    <FaGithub size={20} />
                  </a>
                  <a href="mailto:jawwadahmad568@gmail.com" className="hover:text-primary">
                    <Mail size={20} />
                  </a>
                  <a href="tel:+916204419477" className="hover:text-primary">
                    <Phone size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 bg-black/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="text-xl font-bold font-mono tracking-tighter text-primary mb-1">
              JAWWAD AHMAD
            </div>
            <p className="text-gray-400 text-xs font-mono">
              Software Development Engineer · Applied Intelligence & Edge AI · New Delhi, India
            </p>
          </div>

          <div className="flex items-center gap-5 text-gray-400">
            <a href="https://www.linkedin.com/in/jawwad-ahmad-126999312/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/J-Ahmad19" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="mailto:jawwadahmad568@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:+916204419477" className="hover:text-primary transition-colors">
              <Phone size={19} />
            </a>
          </div>

          <div className="text-gray-500 font-mono text-xs">
            <p>© {new Date().getFullYear()} Jawwad Ahmad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
