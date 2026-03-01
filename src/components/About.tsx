import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/**
 * About section: Dramatic, high-end editorial layout tailored for luxury Indian studio.
 */
export const About: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yPara = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section id="about" className="py-32 md:py-48 px-6 md:px-12 bg-luxury-black overflow-hidden relative">

            {/* Ambient Depth Backgrounds */}
            <div className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* Massive Typography Background Header */}
                <motion.div
                    style={{ y: yText }}
                    className="text-[12vw] font-sans font-black uppercase text-white/[0.02] leading-none tracking-tighter whitespace-nowrap hidden md:block absolute top-[-10%] left-[-5%] -z-10 pointer-events-none"
                >
                    EDITOR ATELIER
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">

                    {/* Editorial Parallax Image Column */}
                    <div className="w-full lg:w-5/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="aspect-[3/4] overflow-hidden bg-[#050505] relative z-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5"
                        >
                            <motion.img
                                style={{ y: yPara }}
                                src="https://images.unsplash.com/photo-1540316279186-b4fe1300958e?q=80&w=1964&auto=format&fit=crop"
                                alt="Creative Director"
                                className="w-full h-[120%] object-cover scale-105 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out absolute -top-[10%]"
                                referrerPolicy="no-referrer"
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80 pointer-events-none" />
                        </motion.div>

                        {/* Geometric Floating Accents */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-10 -right-10 w-[80%] h-[80%] border border-gold/20 z-10 -rotate-3"
                        />
                        <div className="absolute top-10 -left-10 w-24 h-24 border border-white/10 z-30 mix-blend-overlay rotate-12" />
                    </div>

                    {/* Highly Crafted Typographic Right Column */}
                    <div className="w-full lg:w-7/12 relative z-30 pb-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="pl-0 lg:pl-12 border-l-0 lg:border-l border-white/10"
                        >
                            <span className="text-[10px] md:text-sm uppercase tracking-[0.4em] text-gold mb-6 md:mb-10 font-medium flex items-center gap-3">
                                <span className="w-12 h-[1px] bg-gold/50"></span>
                                The Studio
                            </span>

                            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-light leading-[1.05] text-off-white tracking-tight mb-10">
                                Redefining Visual Narratives in <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-off-white to-gold/70">India & Beyond.</span>
                            </h2>

                            <div className="space-y-8 text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-2xl text-justify">
                                <p>
                                    Editor is an exclusive post-production atelier dedicated to the art of high-end commercial editing and narrative film. We transform raw sequence into cinematic prestige.
                                </p>
                                <p className="text-white/80 font-normal italic border-l-2 border-gold/50 pl-6 my-10 py-2">
                                    "Every frame must possess gravity. It’s not about stringing clips together—it’s about weaving an undeniable emotional architecture."
                                </p>
                            </div>

                            {/* Elevated Metrics Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="grid grid-cols-2 gap-10 mt-16 pt-12 border-t border-white/10"
                            >
                                <div className="group">
                                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/30 font-semibold mb-2 group-hover:text-gold transition-colors">Legacy of Craft</div>
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-off-white tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">10+ <span className="text-2xl text-white/50">Years</span></div>
                                </div>
                                <div className="group">
                                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/30 font-semibold mb-2 group-hover:text-gold transition-colors">Global Reach</div>
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-off-white tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">Top <span className="text-2xl text-white/50">Tier</span></div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
