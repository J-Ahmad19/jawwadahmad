import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Mail, Download, ArrowRight } from 'lucide-react';
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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg text-white flex flex-wrap justify-center overflow-hidden"
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
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-primary font-mono mb-6 uppercase tracking-widest drop-shadow-md"
        >
          AI/ML Engineer | Edge AI & Data Science
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="text-gray-300 max-w-2xl text-lg md:text-xl mb-10 leading-relaxed bg-black/30 p-4 rounded-xl backdrop-blur-sm"
        >
          A 4th-semester Data Science undergraduate engineering low-latency inference architectures, 
          RAG systems, and robust backend data pipelines.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
        >
          <a href="#projects" className="group flex items-center gap-2 bg-primary text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all hover:scale-105 active:scale-95">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/jawwad_cv_grid.pdf" download className="flex items-center gap-2 border border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/10 transition-all hover:scale-105 active:scale-95">
            Download Resume
            <Download size={18} />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1, ease: "easeOut" }}
          className="flex gap-6 mt-12 pointer-events-auto"
        >
          <a href="https://www.linkedin.com/in/jawwad-ahmad-126999312/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/J-Ahmad19" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="mailto:jawwadahmad568@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
      
      {/* Gradient overlay for bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0 pointer-events-none" />
    </section>
  );
}
