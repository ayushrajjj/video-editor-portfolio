import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

/**
 * Navigation bar component with smooth scroll links and a mobile menu.
 * Updated for luxury cinematic aesthetic.
 */
export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-b from-[#0B0B0B]/90 to-transparent backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl md:text-2xl font-sans tracking-[0.3em] uppercase font-light text-off-white"
            >
                Editor<span className="text-gold">.</span>
            </motion.div>

            <div className="hidden md:flex space-x-12 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-white/50">
                {['Work', 'Process', 'Contact'].map((item) => (
                    <motion.a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative hover:text-off-white transition-colors group py-2"
                    >
                        {item}
                        {/* Subtle underline hover effect */}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300 ease-out" />
                    </motion.a>
                ))}
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white/70 hover:text-gold transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 w-full bg-[#0B0B0B]/95 p-12 flex flex-col space-y-8 md:hidden border-b border-white/5 backdrop-blur-xl"
                >
                    {['Work', 'Process', 'Contact'].map((item, idx) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-3xl font-sans font-light tracking-tight text-white/60 hover:text-gold transition-colors flex items-center gap-4"
                        >
                            <span className="text-xs text-white/40 tracking-widest uppercase">0{idx + 1}</span>
                            {item}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};
