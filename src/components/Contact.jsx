import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 max-w-6xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let's Build Something <span className="text-primary">Incredible.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi,
          my inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>

            <div className="space-y-6">
              <a href="mailto:jawwadahmad568@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono mb-1">Email</p>
                  <p className="font-medium">jawwadahmad568@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-mono mb-1">Location</p>
                  <p className="font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-500 font-mono mb-4">Social Profiles</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/jawwad-ahmad-126999312/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/J-Ahmad19" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form UI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <form className="glass-panel p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400 pl-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-gray-400 pl-1">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 pl-1">Subject</label>
              <input
                type="text"
                placeholder="Job Opportunity"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-gray-400 pl-1">Message</label>
              <textarea
                rows="5"
                placeholder="Hello Jawwad, I'd like to discuss..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 w-full bg-primary text-black font-bold text-lg rounded-xl px-5 py-4 hover:bg-white transition-colors active:scale-[0.98]"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
