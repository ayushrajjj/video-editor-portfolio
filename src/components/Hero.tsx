import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';

/**
 * Hero section component showcasing the studio's primary value proposition
 * with a luxury cinematic aesthetic.
 */
export const Hero: React.FC = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-black">
            {/* Ambient Animated Background */}
            <div className="absolute inset-0 z-0 bg-luxury-black overflow-hidden">
                {/* Cinematic Video Background Base */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <iframe
                        src="https://www.youtube.com/embed/8Kdl4fgfsas?autoplay=1&mute=1&loop=1&playlist=8Kdl4fgfsas&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                        title="Showreel Hero Video"
                        className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40 mix-blend-luminosity"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>

                {/* Glowing Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                        x: [0, 40, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-gold/20 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, -30, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[0%] right-[10%] w-[60vw] h-[60vw] bg-emerald/20 rounded-full blur-[150px] mix-blend-screen"
                />

                {/* Gradients & Grain Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/90 z-10" />
                <div className="absolute inset-0 bg-grain z-20 opacity-50" />
            </div>

            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center w-full"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="inline-block text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/50 mb-8 font-medium w-full max-w-2xl break-words"
                >
                    Commercial Films • Brand Storytelling • Premium Edits
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-sans font-light leading-[1.1] md:leading-[1.1] mb-12 tracking-tight w-full max-w-3xl lg:max-w-5xl pr-4"
                >
                    Crafting Cinematic Stories as a <br className="hidden sm:block" />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-off-white to-gold/70 pr-2 pb-2">Freelance Video Editor</span>.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <motion.a
                        href="#work"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-10 py-5 bg-off-white text-[#0B0B0B] text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        View Our Work <Play size={14} fill="currentColor" aria-hidden="true" />
                    </motion.a>

                    <motion.a
                        href="#contact"
                        aria-label="Contact Arun P to collaborate on a video project"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group px-10 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-off-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all duration-300 hover:border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    >
                        Let's Collaborate
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-gold/0 via-gold/50 to-gold/0" />
            </motion.div>
        </section>
    );
};
