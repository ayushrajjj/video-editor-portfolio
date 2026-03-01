import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

/**
 * Contact component focusing on high-ticket conversions and premium communication.
 */
export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-[#111111] border-none relative overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 mb-6 block font-medium flex items-center justify-center gap-3">
                        <span className="w-8 h-[1px] bg-white/50"></span>
                        Currently Accepting <span className="w-2 h-2 rounded-full bg-white/50 shadow-[0_0_10px_#FFF]"></span> New Projects
                    </span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light leading-[1.05] text-off-white mb-16 tracking-tight">
                        Let's Create Something <br />
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gold to-white/70">Extraordinary Together.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center mt-10"
                >
                    {/* Email Button */}
                    <a href="mailto:studio@editor.com" className="w-full sm:w-auto">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-4 py-5 px-10 bg-[#1A1A1A] border border-white/10 hover:border-gold/30 hover:bg-[#222] transition-colors rounded-sm group shadow-[0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                        >
                            <Mail className="w-5 h-5 text-white/50 group-hover:text-gold transition-colors" />
                            <div className="flex flex-col items-start text-left">
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Direct Inquiry</span>
                                <span className="text-sm font-medium text-off-white group-hover:text-gold transition-colors">studio@editor.com</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 ml-4 text-white/20 group-hover:text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </motion.div>
                    </a>

                    <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-4 py-5 px-10 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors rounded-sm group shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            <MessageCircle className="w-5 h-5 text-white/50 group-hover:text-gold transition-colors" />
                            <div className="flex flex-col items-start text-left">
                                <span className="text-[10px] uppercase tracking-widest text-white/40">Direct Conversation</span>
                                <span className="text-sm font-medium text-off-white group-hover:text-gold transition-colors">Chat on WhatsApp</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 ml-4 text-white/30 group-hover:text-gold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </motion.div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};
