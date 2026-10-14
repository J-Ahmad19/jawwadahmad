import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Mail, ArrowRight, Phone, MapPin, FileText, BookOpen } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Scene from './Scene';

const sentence = "Hi, I'm Jawwad Ahmad";
const letters = sentence.split("");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content overlay */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pointer-events-none">

        {/* Kinetic Text Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg text-white flex flex-wrap justify-center overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {letters.map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-primary font-mono mb-6 uppercase tracking-widest drop-shadow-md font-semibold"
        >
          Software Development Engineer | Applied Intelligence & Edge AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          className="text-gray-300 max-w-2xl text-base sm:text-lg mb-8 leading-relaxed bg-black/40 p-5 rounded-2xl backdrop-blur-md border border-white/10"
        >
          B.Tech in Computer Science Engineering (Data Science) — Honours in Applied Intelligence at <strong className="text-white">Jamia Millia Islamia</strong>. Software Engineer & Researcher at <strong className="text-white">IIT Bombay (OSDAG)</strong>. Building high-throughput full-stack platforms, low-latency edge AI inference, and intelligent distributed data architectures.
        </motion.p>

        {/* Quick Contact Chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8 pointer-events-auto text-xs font-mono text-gray-400"
        >
          <a href="tel:+916204419477" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>+91 6204419477</span>
          </a>
          <a href="mailto:jawwadahmad568@gmail.com" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/40 hover:text-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-primary" />
            <span>jawwadahmad568@gmail.com</span>
          </a>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>New Delhi, India</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-primary text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#publications"
            className="flex items-center gap-2 border border-primary/50 bg-primary/10 text-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            <BookOpen size={16} />
            <span>Springer Paper</span>
          </a>

          <a
            href="/Jawwad_Ahmad_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/resume flex items-center gap-2 border border-primary/40 bg-primary/10 text-primary px-7 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            <FileText size={16} className="group-hover/resume:scale-110 transition-transform" />
            <span>Resume (PDF)</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9, ease: "easeOut" }}
          className="flex gap-6 mt-10 pointer-events-auto"
        >
          <a
            href="https://www.linkedin.com/in/jawwad-ahmad-126999312/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://github.com/J-Ahmad19"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="mailto:jawwadahmad568@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
          >
            <Mail size={26} />
          </a>
          <a
            href="tel:+916204419477"
            aria-label="Phone"
            className="text-gray-400 hover:text-primary transition-colors hover:scale-110"
          >
            <Phone size={24} />
          </a>
        </motion.div>
      </div>

      {/* Gradient overlay for bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </section>
  );
}
