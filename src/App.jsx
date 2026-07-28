import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen font-sans text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-bold font-mono tracking-tighter text-primary">JA.</div>
        <div className="hidden md:flex gap-6 text-sm font-mono uppercase tracking-widest text-gray-400">
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-500 font-mono text-sm">
        <p>© {new Date().getFullYear()} Jawwad Ahmad. Built with React, Three.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
