import { motion } from 'framer-motion';
import { Trophy, Code2, Award, Zap, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    badge: "Merit Distinction",
    title: "IIT Bombay Research Extension",
    highlight: "Merit-Based Semester Extension",
    description: "Awarded a semester extension at the Indian Institute of Technology (IIT), Bombay, recognizing outstanding technical execution, optimization, and leadership on the public release of the OSDAG software suite.",
    metric: "Merit-Based",
    metricLabel: "Selection Criteria"
  },
  {
    icon: <Trophy className="w-6 h-6 text-amber-400" />,
    badge: "Hackathon Finalist",
    title: "Odoo Hackathon Finalist (2026)",
    highlight: "Ranked 479 / 25,000+ Applicants",
    description: "Secured top standing among 25,000+ engineering applicants across India, architecting scalable solutions under intense time constraints and competing in national-level technical finals.",
    metric: "Top 1.9%",
    metricLabel: "National Rank"
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    badge: "Problem Solving",
    title: "Competitive Programming",
    highlight: "100+ LeetCode Problems Solved",
    description: "Demonstrated strong algorithmic foundations with 100+ solved problems on LeetCode spanning Dynamic Programming, Graph Traversal, Binary Search, Trees, and Complex Data Structures.",
    metric: "100+",
    metricLabel: "Problems Solved"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-4 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Honors & Milestones</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-primary">/</span> Achievements
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-mono">
          Milestones achieved in competitive coding, system-level research, and hackathons.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-panel p-8 relative flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-mono text-primary font-semibold mt-1">
                  {item.highlight}
                </p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between mt-auto">
              <div>
                <div className="text-2xl font-bold text-white font-mono group-hover:text-primary transition-colors">
                  {item.metric}
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  {item.metricLabel}
                </div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
