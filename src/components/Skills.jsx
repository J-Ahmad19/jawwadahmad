import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Search, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5 text-primary" />,
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
    colSpan: "md:col-span-1"
  },
  {
    title: "Software Development",
    icon: <Code className="w-5 h-5 text-primary" />,
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Tailwind CSS"
    ],
    colSpan: "md:col-span-2"
  },
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    skills: [
      "RAG",
      "Vector Databases",
      "Local LLM Inference",
      "LangChain",
      "LangGraph",
      "Ollama",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Scikit-learn"
    ],
    colSpan: "md:col-span-2"
  },
  {
    title: "Information Retrieval",
    icon: <Search className="w-5 h-5 text-primary" />,
    skills: [
      "Dense Retrieval",
      "BM25",
      "Reciprocal Rank Fusion (RRF)",
      "Reranking",
      "ColBERTv2",
      "FAISS",
      "Embeddings",
      "Context Expansion"
    ],
    colSpan: "md:col-span-1"
  },
  {
    title: "Systems & Tools",
    icon: <Wrench className="w-5 h-5 text-primary" />,
    skills: [
      "KV-Cache Optimization",
      "SQL Optimization",
      "Schema Design",
      "Git/GitHub",
      "Docker",
      "Linux",
      "Figma",
      "Streamlit",
      "Matplotlib",
      "NeonDB"
    ],
    colSpan: "md:col-span-3"
  }
];

export default function Skills() {
  const allSkills = skillCategories.flatMap(c => c.skills);

  return (
    <section id="skills" className="py-28 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <Database className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-primary">/</span> Technical Skills
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-mono">
          Languages, frameworks, systems optimizations, information retrieval, and machine learning pipelines.
        </p>
      </motion.div>
      
      {/* Dynamic Marquee Stream */}
      <div className="flex w-full overflow-hidden py-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap pl-8 items-center"
        >
          {[...allSkills, ...allSkills].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span
                className="font-bold text-2xl md:text-4xl uppercase tracking-wider text-white/20 hover:text-primary transition-colors cursor-default"
                style={{ WebkitTextStroke: '1px rgba(0, 240, 255, 0.4)' }}
              >
                {skill}
              </span>
              <span className="text-primary/40 text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`glass-panel p-7 md:p-8 group hover:border-primary/50 transition-colors duration-300 ${category.colSpan} flex flex-col`}
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 text-primary transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 hover:text-primary text-gray-300 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-mono transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
