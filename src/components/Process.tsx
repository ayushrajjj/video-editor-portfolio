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
        <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-luxury-black relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[40vw] h-[40vw] bg-gold/5 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-[-10%] w-[30vw] h-[30vw] bg-white/5 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center text-center mb-20 md:mb-24"
                >
                    <span className="text-[10px] md:text-sm uppercase tracking-[0.6em] text-gold mb-6 font-semibold">The Methodology</span>
                    <h2 className="text-4xl md:text-6xl font-sans font-light text-off-white tracking-tighter leading-none mb-10">
                        How We Forge <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-off-white to-gold/70">Cinematic Gravity.</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-gold/30" />
                </motion.div>

                {/* Timeline Content */}
                <div className="relative">
                    {/* Vertical Connecting Line (Centered) */}
                    <div className="space-y-16 md:space-y-24">
                        {NEW_PROCESS_STEPS.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.1 }}
                                className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative"
                            >
                                {/* Pillar Index */}
                                <div className="flex flex-col items-center z-20">
                                    <div className="w-10 h-10 bg-[#0B0B0B] border border-gold/30 rounded-full flex items-center justify-center text-[10px] font-semibold text-gold shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        0{idx + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2 block font-medium">{step.tagline}</span>
                                    <h3 className="text-2xl md:text-3xl font-sans font-light text-off-white mb-3 tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/50 leading-relaxed font-light max-w-2xl">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
