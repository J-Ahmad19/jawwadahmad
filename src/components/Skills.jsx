import { motion } from 'framer-motion';
import { Terminal, Database, Wrench, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    skills: ["Python (Advanced)", "C++", "SQL (PostgreSQL)", "Java", "JavaScript"],
    colSpan: "md:col-span-1"
  },
  {
    title: "AI/ML & Applied Engineering",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["RAG", "Vector Databases", "LLM Fine-Tuning & Inference", "PyTorch", "Scikit-Learn", "Pandas", "NLP", "Semantic Search"],
    colSpan: "md:col-span-2"
  },
  {
    title: "Data Systems & Backend",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["SQL Optimization", "Relational Schema Design", "ETL Pipelines", "FastAPI", "Flask", "RESTful APIs"],
    colSpan: "md:col-span-2"
  },
  {
    title: "Tools & Infrastructure",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Git/GitHub", "Docker", "Linux", "Streamlit", "Big Data Processing (xarray)"],
    colSpan: "md:col-span-1"
  }
];

export default function Skills() {
  const allSkills = skillCategories.flatMap(c => c.skills);

  return (
    <section id="skills" className="py-32 overflow-hidden relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-center text-white px-4"
      >
        <span className="text-primary">/</span> Technical Skills
      </motion.h2>
      
      {/* Enhanced Marquee */}
      <div className="flex w-full overflow-hidden py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap pl-8 items-center"
        >
          {[...allSkills, ...allSkills].map((skill, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-transparent border-text font-bold text-3xl md:text-5xl uppercase tracking-wider opacity-30 hover:opacity-100 hover:text-primary hover:border-transparent transition-all duration-300" style={{ WebkitTextStroke: '1px #00f0ff' }}>
                {skill}
              </span>
              <span className="text-primary/30 text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bento Box Layout */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`glass-panel p-8 group hover:border-primary/50 transition-colors duration-300 ${category.colSpan} flex flex-col`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/10 hover:text-primary text-gray-300 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-200 cursor-default"
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
