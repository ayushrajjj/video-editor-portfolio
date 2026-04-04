import React from 'react';
import { motion } from 'motion/react';
import { Compass, Focus, Film, Send, LucideIcon } from 'lucide-react';

interface ProcessStep {
    icon: LucideIcon;
    title: string;
    description: string;
    tagline: string;
}

const NEW_PROCESS_STEPS: ProcessStep[] = [
    {
        icon: Compass,
        title: 'Strategic Discovery',
        description: 'We begin by deconstructing your brand architecture and audience psychology to define a high-impact narrative strategy.',
        tagline: 'PHASE 01: INTENT'
    },
    {
        icon: Focus,
        title: 'Creative Direction',
        description: 'Sculpting the visual rhythm, pacing, and aesthetic tone that will define your story across every frame.',
        tagline: 'PHASE 02: SCULPT'
    },
    {
        icon: Film,
        title: 'Master Edit',
        description: 'Precision-cutting integrated with elite color science and spatial sound design for an immersive experience.',
        tagline: 'PHASE 03: CRAFT'
    },
    {
        icon: Send,
        title: 'Exhibition Ready',
        description: 'Final refinement and delivery of premium cinematic assets optimized for global digital landscapes.',
        tagline: 'PHASE 04: SCALE'
    },
];

export const Process: React.FC = () => {
    return (
        <section id="process" className="py-32 md:py-64 px-6 md:px-12 bg-luxury-black relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-gold/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] left-[-10%] w-[30vw] h-[30vw] bg-white/5 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center mb-32 md:mb-48"
                >
                    <span className="text-[10px] md:text-sm uppercase tracking-[0.6em] text-gold mb-8 font-semibold">The Methodology</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-off-white tracking-tighter leading-none mb-12">
                        How We Forge <br />
                        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-off-white to-gold/70">Cinematic Gravity.</span>
                    </h2>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-gold/50 to-transparent" />
                </motion.div>

                {/* Timeline Content */}
                <div className="relative">
                    {/* Vertical Connecting Line (Centered) */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold/40 via-white/10 to-transparent hidden md:block" />

                    <div className="space-y-32 md:space-y-64">
                        {NEW_PROCESS_STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1.2, delay: 0.1 }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 relative`}
                            >
                                {/* Center Pillar Index */}
                                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 flex flex-col items-center z-20">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-[#0B0B0B] border border-gold/30 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold text-gold shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:scale-110 transition-transform duration-500">
                                        0{idx + 1}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                    >
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4 block font-medium">{step.tagline}</span>
                                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-sans font-light text-off-white mb-6 tracking-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/50 leading-relaxed font-light max-w-md mx-auto md:mx-0 inline-block">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Visual Side (Empty space or Icon/Atmosphere) */}
                                <div className="hidden md:block md:w-5/12">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 0.3, scale: 1 }}
                                        viewport={{ once: true }}
                                        className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <step.icon size={120} strokeWidth={1} className="text-white/10" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
