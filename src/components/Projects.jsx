import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: "USBot",
    subtitle: "Edge AI & Low-Latency Inference Architecture",
    tags: ["Python", "PySide6", "Local LLMs (Ollama)", "Vector Stores", "FastAPI"],
    description: "Privacy-first Edge AI assistant executing zero-latency ML inference directly on-device, bypassing cloud bandwidth constraints. Architected high-precision RAG pipelines using local vector embeddings.",
    link: "https://drive.google.com/file/d/1wnVjn6MVgvAIXUG03DSlKGCPtOFjM9-n/view?usp=sharing"
  },
  {
    title: "Language Agnostic Smart Search Chatbot",
    subtitle: "Agentic RAG",
    tags: ["Streamlit", "Google GenAI", "Vector Databases", "Groq LPU", "NLP"],
    description: "Ultra-low latency multi-language conversational search engine utilizing Groq LPU inference and cross-lingual semantic retrieval for unstructured data catalogs.",
    link: "https://langagnosticbott.streamlit.app/"
  },
  {
    title: "Health Schemes Monitor",
    subtitle: "Enterprise Database",
    tags: ["Flask", "PostgreSQL", "SQL", "Data Analytics", "ETL"],
    description: "Highly normalized PostgreSQL relational database securely managing 5,000+ complex records with 99.9% data integrity and a real-time SQL Analytics Dashboard.",
    link: "https://hospital-1r2w.onrender.com/"
  }
];

function ProjectCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-panel p-8 relative flex flex-col h-full cursor-pointer hover:border-primary/50 transition-colors block"
    >
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <h4 className="text-primary font-mono text-sm mb-4">{project.subtitle}</h4>
        <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/10 text-gray-200 px-3 py-1 rounded-full text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center text-white"><span className="text-primary">/</span> Key Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
        {projects.map((proj, idx) => (
          <div key={idx} className="h-full" style={{ perspective: "1000px" }}>
            <ProjectCard project={proj} />
          </div>
        ))}
      </div>
    </section>
  );
}
