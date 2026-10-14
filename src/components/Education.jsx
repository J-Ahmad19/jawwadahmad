import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

const educationData = [
  {
    institution: "Jamia Millia Islamia",
    location: "New Delhi, India",
    degree: "B.Tech in Computer Science Engineering (Data Science) — Honours in Applied Intelligence",
    period: "2024 — Present",
    scoreBadge: "Overall CGPA: 8.67",
    subScore: "4th Semester SGPA: 8.80",
    details: [
      "Rigorous coursework in Data Structures, Advanced Algorithms, Database Engineering, and Machine Learning.",
      "Specialized honours track in Applied Intelligence focusing on deep neural architectures, edge computing, and statistical data pipelines.",
      "Active researcher and builder applying computational intelligence across open-source and enterprise projects."
    ]
  },
  {
    institution: "St. Michael's High School",
    location: "Patna, Bihar, India",
    degree: "Senior Secondary (XII), CBSE — Science",
    period: "2023",
    scoreBadge: "Percentage: 95.00%",
    subScore: "CBSE Board Science Stream",
    details: [
      "Secured an outstanding 95.00% in the CBSE Class XII Senior Secondary Board Examination.",
      "Strong foundational training in Mathematics, Physics, Chemistry, and Computer Science with top academic distinction."
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-4 max-w-6xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-primary">/</span> Education
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-mono">
          Rigorous academic training in Computer Science, Data Science, and Applied Intelligence.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-panel p-8 md:p-9 relative flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
          >
            {/* Top decorative accent */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="bg-primary/10 border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-mono font-bold">
                  {edu.scoreBadge}
                </span>
                {edu.subScore && (
                  <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                    {edu.subScore}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                {edu.institution}
              </h3>
              <p className="text-primary/90 font-mono text-sm leading-snug">
                {edu.degree}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 pt-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {edu.location}
                </span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-2.5 text-sm text-gray-300 mt-auto">
              {edu.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 leading-relaxed">
                  <Sparkles className="w-3.5 h-3.5 text-primary shrink-0 mt-1" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
