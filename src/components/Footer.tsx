import React from 'react';
import { motion } from 'motion/react';

/* Footer Component */
function Footer() {
    return (
        <footer className="py-16 px-6 md:px-12 bg-[#050505] border-t border-white/5 relative z-10">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center gap-10">

                <div className="text-xl md:text-2xl font-sans tracking-[0.2em] uppercase font-light text-off-white group cursor-pointer">
                    ARUN P<span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">.</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/30 font-semibold">
                    <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="https://www.behance.net/arunp40" target="_blank" rel="noreferrer" className="hover:text-off-white transition-colors px-2">Behance</motion.a>
                    <motion.a whileHover={{ y: -2, color: '#FFFFFF' }} href="https://www.linkedin.com/in/arun-p-a25126112?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-off-white transition-colors px-2">LinkedIn</motion.a>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-white/10 font-medium">
                    © {new Date().getFullYear()} STUDIO EDITOR. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
