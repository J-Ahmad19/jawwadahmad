import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 px-4 max-w-6xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Let's Build Something <span className="text-primary">Exceptional.</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-mono">
          Available for Software Development Engineer (SDE) roles, AI/ML engineering, and research collaborations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass-panel p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Direct Channels</h3>

            <div className="space-y-5">
              <a 
                href="mailto:jawwadahmad568@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 text-primary transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-0.5">Email</p>
                  <p className="font-medium text-sm break-all">jawwadahmad568@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+916204419477" 
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 text-primary transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-0.5">Phone / WhatsApp</p>
                  <p className="font-medium text-sm">+91 6204419477</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 text-primary transition-colors shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-0.5">Location</p>
                  <p className="font-medium text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 font-mono mb-3 uppercase tracking-wider">Social Networks</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/jawwad-ahmad-126999312/" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all text-gray-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/J-Ahmad19" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all text-gray-300"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Message Form UI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <form className="glass-panel p-8 space-y-5" onSubmit={handleSubmit}>
            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto animate-bounce" />
                <h4 className="text-xl font-bold text-white">Message Prepared!</h4>
                <p className="text-gray-400 text-sm">
                  Thank you! You can also reach out directly at{' '}
                  <a href="mailto:jawwadahmad568@gmail.com" className="text-primary underline">
                    jawwadahmad568@gmail.com
                  </a>.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 pl-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 text-sm transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 pl-1">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400 pl-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="SDE Opportunity / Technical Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-400 pl-1">Message</label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Jawwad, I came across your portfolio and would like to connect regarding..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:bg-white/10 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2.5 w-full bg-primary text-black font-bold text-base rounded-xl px-5 py-3.5 hover:bg-white transition-all active:scale-[0.98] shadow-[0_0_15px_rgba(0,240,255,0.25)]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
