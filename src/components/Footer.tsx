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

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 font-semibold">
                    <motion.a whileHover={{ y: -2 }} href="https://www.behance.net/arunp40" target="_blank" rel="noreferrer" className="hover:text-off-white transition-colors">Behance</motion.a>
                    <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/arun-p-a25126112?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-off-white transition-colors">LinkedIn</motion.a>
                    <span className="hidden md:inline w-[1px] h-3 bg-white/10" />
                    <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-off-white transition-colors opacity-60">Privacy Policy</motion.a>
                    <motion.a whileHover={{ y: -2 }} href="#" className="hover:text-off-white transition-colors opacity-60">Terms</motion.a>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
                    © {new Date().getFullYear()} STUDIO EDITOR. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
