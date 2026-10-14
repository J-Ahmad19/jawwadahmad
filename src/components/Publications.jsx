import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText, CheckCircle2, Award } from 'lucide-react';

export default function Publications() {
  return (
    <section id="publications" className="py-28 px-4 max-w-6xl mx-auto relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>Research & Academic Contributions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          <span className="text-primary">/</span> Publications
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-mono">
          Peer-reviewed research focusing on OS-inspired retrieval architectures and offline LLM inference.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="glass-panel p-8 md:p-10 relative overflow-hidden group hover:border-primary/40 transition-all duration-300 z-10"
      >
        {/* Subtle accent border at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-mono font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Accepted for Publication
              </span>
              <span className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-mono">
                Springer LNNS
              </span>
              <span className="bg-purple-500/10 border border-purple-500/30 text-purple-400 px-3 py-1 rounded-full text-xs font-mono">
                Scopus Indexed
              </span>
              <span className="bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full text-xs font-mono">
                NGCCOM 2026
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug group-hover:text-primary transition-colors">
              An Efficient OS-Inspired Retrieval-Centric Approach for Offline LLM Inference on Resource-Constrained Edge Devices
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Accepted at the <strong className="text-white">Springer International Conference on Next Generation Communication and Computing (NGCCOM 2026)</strong>.
              To be officially published in <strong className="text-white">Springer Lecture Notes in Networks and Systems (LNNS)</strong>, Scopus Indexed.
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
              <div className="text-xs uppercase tracking-wider text-primary font-mono font-semibold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Key Focus & Architecture
              </div>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                Presents an operating-system-inspired retrieval pipeline designed specifically for offline, privacy-first edge devices. Bypasses prohibitive GPU memory limits and network latencies by leveraging tiered local caching, dense retrieval, and state-efficient inference loops on consumer hardware.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[210px] pt-2">
            <a
              href="https://drive.google.com/file/d/18Cp0gcdrohIS5nkdK-gj4O9Gvvpd_eeD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 bg-primary text-black px-5 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <FileText className="w-4 h-4" />
              <span>Read Full Paper</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://drive.google.com/file/d/11g1S_UYeKh5OBk94zgQvJIrXoaWeVCVp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-gray-200 px-5 py-3 rounded-xl font-medium text-sm hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Award className="w-4 h-4 text-primary" />
              <span>Acceptance Letter</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
