import React from 'react';
import { motion } from 'motion/react';

/* Footer Component */
function Footer() {
    return (
        <footer className="py-16 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative z-10">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-xl md:text-2xl font-sans tracking-[0.2em] uppercase font-light text-off-white group cursor-pointer">
                    ARUN P<span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">.</span>
                </div>

                <div className="flex items-center gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 font-semibold">
                    <motion.a whileHover={{ y: -2 }} href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-off-white transition-colors">Instagram</motion.a>
                    <motion.a whileHover={{ y: -2 }} href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-off-white transition-colors">LinkedIn</motion.a>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
                    © {new Date().getFullYear()} STUDIO EDITOR. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
