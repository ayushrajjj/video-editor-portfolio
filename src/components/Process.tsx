import React from 'react';
import { motion } from 'motion/react';
import { Compass, Focus, Film, Send } from 'lucide-react';

const NEW_PROCESS_STEPS = [
    { icon: Compass, title: 'Discovery', description: 'Deep market analysis and brand positioning strategy.' },
    { icon: Focus, title: 'Creative Direction', description: 'Defining the visual language and narrative architecture.' },
    { icon: Film, title: 'Cinematic Editing', description: 'Precision cutting, elite sound design, and color grading.' },
    { icon: Send, title: 'Final Delivery', description: 'Deployment of high-conversion aesthetic assets.' },
];

/**
 * Process component outlines the studio's workflow step-by-step.
 */
export const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 md:py-48 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 md:mb-32 max-w-2xl"
                >
                    <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/50 mb-6 block font-medium flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-white/50"></span>
                        How We Work
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light text-off-white tracking-tight">
                        Our Proven <span className="italic text-gold">Process</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {NEW_PROCESS_STEPS.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="relative group pr-8"
                        >
                            {/* Top border indicator */}
                            <div className="h-[2px] w-full bg-white/5 mb-10 overflow-hidden">
                                <div className="h-full w-0 group-hover:w-full bg-emerald transition-all duration-700 ease-out" />
                            </div>

                            <div className="flex items-center justify-between mb-8">
                                <span className="text-5xl font-sans font-light text-white/5 group-hover:text-white/10 transition-colors duration-500 tracking-tighter">
                                    0{idx + 1}
                                </span>
                                <step.icon className="w-6 h-6 text-white/20 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl md:text-2xl font-sans font-medium text-off-white mb-4 tracking-tight group-hover:text-gold transition-colors duration-500">
                                {step.title}
                            </h3>
                            <p className="text-sm text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
