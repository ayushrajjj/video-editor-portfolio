import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

/* About Component */
function About() {
    const { scrollYProgress } = useScroll();
    const yPara = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 120]); // Faster parallax for bg text

    return (
        <section id="about" className="py-20 md:py-32 lg:py-48 px-4 sm:px-6 md:px-12 bg-luxury-black overflow-hidden relative">

            {/* Background elements */}
            <div className="absolute top-1/4 left-[-10%] w-[50vw] h-[50vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-[-10%] w-[40vw] h-[40vw] bg-white/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-[1600px] mx-auto relative z-10">

                {/* Large Background Text */}
                <motion.div
                    style={{ y: yText, willChange: 'transform' }}
                    className="text-[12vw] font-sans font-black uppercase text-white/[0.02] leading-none tracking-tighter whitespace-nowrap hidden md:block absolute top-[-10%] left-[-5%] -z-10 pointer-events-none"
                >
                    ARUN P ATELIER
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">

                    {/* Left Column */}
                    <div className="w-full lg:w-5/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="aspect-[3/4] overflow-hidden bg-[#050505] relative z-20 shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5"
                        >
                            <motion.img
                                style={{ y: yPara, willChange: 'transform' }}
                                src="https://images.unsplash.com/photo-1540316279186-b4fe1300958e?q=80&w=1964&auto=format&fit=crop"
                                alt="Creative Director"
                                className="w-full h-[120%] object-cover scale-105 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-out absolute -top-[10%]"
                                referrerPolicy="no-referrer"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80 pointer-events-none" />
                        </motion.div>

                        {/* Floating Accents */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-10 -right-10 w-[80%] h-[80%] border border-gold/20 z-10 -rotate-3"
                        />
                        <div className="absolute top-10 -left-10 w-24 h-24 border border-white/10 z-30 mix-blend-overlay rotate-12" />
                    </div>

                    {/* Right Column */}
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

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-light leading-[1.05] text-off-white tracking-tight mb-8 md:mb-10 overflow-hidden">
                                {"Redefining Visual Narratives in ".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.01, ease: [0.33, 1, 0.68, 1] }}
                                        className="inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-off-white to-gold/70 inline-block overflow-hidden">
                                    {"India & Beyond.".split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ y: "100%" }}
                                            whileInView={{ y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.3 + i * 0.015, ease: [0.33, 1, 0.68, 1] }}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </span>
                            </h2>

                            <div className="space-y-6 md:space-y-8 text-sm sm:text-base md:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-2xl text-justify">
                                <motion.p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.04 } }
                                    }}
                                >
                                    {"ARUN P is an exclusive post-production atelier dedicated to the art of high-end commercial editing and narrative film. We transform raw sequence into cinematic prestige.".split(" ").map((word, i) => (
                                        <motion.span
                                            key={i}
                                            variants={{
                                                hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
                                                visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                                            }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="inline-block mr-1.5"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                                    transition={{ duration: 1.2, delay: 0.8 }}
                                    className="text-white/80 font-normal italic border-l-2 border-gold/50 pl-6 my-10 py-2"
                                >
                                    "Every frame must possess gravity. It’s not about stringing clips together—it’s about weaving an undeniable emotional architecture."
                                </motion.p>
                            </div>

                            {/* Metrics */}
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

                            {/* Client Section */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                                className="mt-16 pt-12 border-t border-white/5"
                            >
                                <div className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-medium mb-8">Trusted By Global Brands</div>
                                <div className="flex flex-wrap gap-x-12 gap-y-6 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    {['VOGUE', 'CULT.FIT', 'BMW', 'HYUNDAI', 'RELIANCE'].map((client) => (
                                        <span key={client} className="text-lg md:text-xl font-sans tracking-tighter font-bold text-white/60 hover:text-white transition-colors cursor-default">
                                            {client}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;
