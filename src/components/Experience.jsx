import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    title: "FOSSEE Semester Internship (Extension) — OSDAG Software",
    company: "Indian Institute of Technology (IIT), Bombay",
    date: "Feb 2026 — Apr 2026",
    badge: "Merit Extension",
    credentialLink: "https://drive.google.com/file/d/1UGkPIOdKMHn4SpzaLvmRDxBPFZ3xA4c1/view?usp=sharing",
    details: [
      "Awarded a merit-based extension to lead the public-release integration of OsBridgeLCCA.",
      "Improved computational efficiency, data validation, and reliability of structural-design software modules."
    ]
  },
  {
    title: "FOSSEE Winter Internship — OSDAG Software Domain",
    company: "Indian Institute of Technology (IIT), Bombay",
    date: "Dec 2025 — Jan 2026",
    badge: "Software Engineering",
    credentialLink: "https://drive.google.com/file/d/1OTeQEnkwyBy2MQ5MlBo1sYPEp_7gG3PE/view?usp=sharing",
    details: [
      "Developed OsBridgeLCCA for life-cycle cost modeling and analysis of numerical structural-design data.",
      "Automated 2D CAD drawing generation using ezDXF and built visualization workflows with Matplotlib and xarray."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 max-w-5xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Professional Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-primary">/</span> Experience
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-mono">
          Engineering structural software, numerical systems, and production releases at premier institutions.
        </p>
      </motion.div>
      
      <div className="relative border-l-2 border-primary/20 ml-4 md:ml-10 space-y-16 pb-6">
        {/* Animated glowing vertical timeline line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-primary via-primary/70 to-transparent shadow-[0_0_10px_#00f0ff]"
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-14 group"
          >
            {/* Glowing Timeline Node */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_12px_#00f0ff]" />
            
            {/* Content Card */}
            <div className="glass-panel p-8 md:p-10 relative overflow-hidden group-hover:border-primary/40 transition-all duration-300">
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-primary font-mono text-sm font-semibold">{exp.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="bg-white/5 border border-white/10 text-gray-400 px-2.5 py-0.5 rounded-full text-xs font-mono">
                      {exp.badge}
                    </span>
                    {exp.credentialLink && (
                      <a
                        href={exp.credentialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full hover:bg-primary hover:text-black transition-colors"
                      >
                        <Award className="w-3 h-3" />
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-1 text-white tracking-tight group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <h4 className="text-base text-gray-400 mb-6 font-mono font-medium">
                  {exp.company}
                </h4>

                <ul className="space-y-3.5 text-gray-300 list-none">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="leading-relaxed flex items-start text-sm md:text-base">
                      <span className="text-primary mr-3 mt-1 font-bold">▹</span>
                      <span>{detail}</span>
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
