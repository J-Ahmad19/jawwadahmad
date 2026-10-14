import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Layers, ChevronDown, ChevronUp } from 'lucide-react';

const featuredProjects = [
  {
    title: "myMachino — Construction Equipment Marketplace",
    category: "Full-Stack Web Marketplace",
    liveUrl: "https://www.mymachino.com/",
    linkLabel: "Live Marketplace",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Zod", "Tailwind CSS"],
    bullets: [
      "Built and deployed a mobile-first equipment marketplace connecting customers with construction and commercial equipment service providers.",
      "Developed customer requirement workflows capturing equipment, location, quantity, date, duration, operator requirements, and budget.",
      "Designed an admin-driven lead management and provider database with status tracking, equipment availability, search/filtering, and provider assignment.",
      "Implemented the core customer → lead → provider → booking workflow with structured validation and responsive UI."
    ]
  },
  {
    title: "LedgerPilotAI — AI Finance Controller",
    category: "Enterprise Financial Systems",
    liveUrl: "https://drive.google.com/file/d/1wTz3JluzF5_6dXWHo0veBROMaEg67QJC/view?usp=sharing",
    linkLabel: "View System Architecture",
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "NeonDB", "Drizzle ORM"],
    bullets: [
      "Built a production-oriented financial reconciliation platform processing payment and ledger records using exact matching, fuzzy scoring, and AI-assisted matching.",
      "Implemented audit trails, human-in-the-loop review, and natural-language queries for explainable cash-position analysis."
    ]
  },
  {
    title: "USBot — Offline Edge AI & Efficient Inference",
    category: "Edge Computing & Local RAG",
    liveUrl: "https://drive.google.com/file/d/1wnVjn6MVgvAIXUG03DSlKGCPtOFjM9-n/view?usp=sharing",
    linkLabel: "View Project Demo",
    tags: ["Python", "PySide6", "Ollama", "FastAPI", "Vector Stores"],
    bullets: [
      "Engineered a privacy-centric offline AI assistant for local inference targeting latency, bandwidth, and privacy constraints.",
      "Optimized local inference pipelines for model-state management and low-latency interactions on consumer hardware.",
      "Implemented local RAG with embeddings and semantic search for on-device document intelligence."
    ]
  }
];

const additionalProjects = [
  {
    title: "Language Agnostic Smart Search Chatbot",
    category: "Agentic RAG Engine",
    liveUrl: "https://langagnosticbott.streamlit.app/",
    linkLabel: "Live Web App",
    tags: ["Streamlit", "Google GenAI", "Vector Databases", "Groq LPU", "NLP"],
    bullets: [
      "Ultra-low latency multi-language conversational search engine utilizing Groq LPU inference and cross-lingual semantic retrieval for unstructured data catalogs."
    ]
  },
  {
    title: "Health Schemes Monitor",
    category: "Enterprise Analytics Database",
    liveUrl: "https://hospital-1r2w.onrender.com/",
    linkLabel: "Live System",
    tags: ["Flask", "PostgreSQL", "SQL", "Data Analytics", "ETL"],
    bullets: [
      "Highly normalized PostgreSQL relational database securely managing 5,000+ complex healthcare records with real-time SQL analytics."
    ]
  }
];

function ProjectCard({ project, isFeatured = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel p-7 md:p-9 relative flex flex-col h-full border border-white/10 hover:border-primary/50 transition-all duration-300 group ${
        isFeatured ? "bg-white/[0.04]" : "bg-white/[0.02]"
      }`}
    >
      <div style={{ transform: "translateZ(20px)" }} className="flex flex-col h-full">
        {/* Top bar with category & link */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-primary transition-colors bg-white/5 border border-white/10 hover:border-primary/40 px-3 py-1 rounded-full"
          >
            <span>{project.linkLabel}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>

        {/* Bullets */}
        <ul className="space-y-2.5 text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {project.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2.5">
              <span className="text-primary mt-1 shrink-0">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 mt-auto">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/5 hover:bg-primary/10 hover:text-primary text-gray-300 border border-white/10 px-2.5 py-1 rounded-md text-xs font-mono transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section id="projects" className="py-28 px-4 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Production & Systems Engineering</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-primary">/</span> Software Engineering Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-mono">
          Full-stack platforms, financial reconciliation controllers, and offline edge intelligence architectures.
        </p>
      </motion.div>

      {/* Flagship Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" style={{ perspective: "1000px" }}>
        {featuredProjects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="h-full"
          >
            <ProjectCard project={proj} isFeatured={true} />
          </motion.div>
        ))}
      </div>

      {/* Toggle for Additional Notable Projects */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowAdditional(!showAdditional)}
          className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-primary transition-colors border border-white/10 hover:border-primary/40 bg-white/5 px-6 py-2.5 rounded-full"
        >
          <span>{showAdditional ? "Hide Additional Projects" : "View Additional Projects (2)"}</span>
          {showAdditional ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {showAdditional && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
          style={{ perspective: "1000px" }}
        >
          {additionalProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} isFeatured={false} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
