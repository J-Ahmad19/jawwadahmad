import { motion } from 'framer-motion';

const experiences = [
  {
    title: "FOSSEE Semester Internship (Extension) — OSDAG Software Domain",
    company: "IIT Bombay",
    date: "Feb 2026 – May 2026",
    details: [
      "Spearheaded public release and automated CI/CD for OsBridgeLCCA.",
      "Refactored core Python numerical computation architectures to boost efficiency by 30%.",
      "Architected data sanitization and exception protocols, decreasing crash rates by 25%."
    ]
  },
  {
    title: "FOSSEE Winter Internship — OSDAG Software Domain",
    company: "IIT Bombay",
    date: "Dec 2025 – Jan 2026",
    details: [
      "Engineered predictive cost-modeling prototype processing 10,000+ multi-dimensional parameters.",
      "Built scalable ETL pipelines reducing manual analytical processing time by 40%.",
      "Developed automated precision 2D CAD generation pipelines via ezDXF."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 max-w-5xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-20 text-center text-white"
      >
        <span className="text-primary">/</span> Experience
      </motion.h2>
      
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-10 space-y-20 pb-10">
        {/* Animated glowing line that travels down */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary to-transparent shadow-[0_0_10px_#00f0ff]"
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-10 md:pl-16 group"
          >
            {/* Glowing Node */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_#00f0ff]" />
            
            {/* Content Card */}
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden group-hover:border-primary/40 transition-colors duration-300">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-primary font-mono text-sm block mb-3 font-semibold">{exp.date}</span>
                <h3 className="text-2xl font-bold mb-1 text-white tracking-tight">{exp.title}</h3>
                <h4 className="text-lg text-gray-400 mb-6 font-mono">{exp.company}</h4>
                <ul className="space-y-3 text-gray-300 list-none">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed flex items-start">
                      <span className="text-primary mr-2 mt-1">▹</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
