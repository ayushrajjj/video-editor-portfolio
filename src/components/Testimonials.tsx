import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
// Testimonials data defined directly to ensure sync
const TESTIMONIALS = [
    {
        id: '1',
        name: 'Soubarna K.',
        role: 'Managed Arun directly',
        company: 'LinkedIn Recommendation',
        content: 'Extremely diligent and responsible individual, willing to innovate and adhere to changing working dynamics. A team player and can effectively accomplish any video editing challenges.',
    },
    {
        id: '2',
        name: 'Baidik Deb',
        role: 'Executive Producer | Creative Planning Manager | Dad',
        company: 'Vedic Films (Arun\'s mentor)',
        content: 'Arun was the senior editor at Vedic Films and I am extremely happy with his efforts and creativity and dedication to the job.',
    },
    {
        id: '3',
        name: 'Tom Benny',
        role: 'A salesman that loves his product.',
        company: 'Arun\'s client',
        content: 'Arun is a master of his craft. Working with him, is always a pleasure.',
    },
    {
        id: '4',
        name: 'Pamela Gupta',
        role: 'Brand Services Director at MullenLowe Lintas Group',
        company: 'Arun was Pamela\'s client',
        content: 'Skilled professional with passion and expertise in delivering work within stringent timelines.',
    },
];

/**
 * Testimonials component displays minimal, elegant client feedback.
 */
export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 md:py-48 px-6 md:px-12 bg-[#0B0B0B] relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-emerald/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1000px] mx-auto w-full relative z-10">
                <div className="flex justify-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-medium">Testimonials</span>
                </div>

                <div className="relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, x: -100, scale: 0.95, filter: 'blur(10px)' }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-start text-center pt-4"
                        >
                            <p className="text-2xl md:text-3xl lg:text-4xl font-sans font-light leading-snug tracking-tight text-off-white mb-8 max-w-4xl">
                                "{TESTIMONIALS[currentIndex].content}"
                            </p>

                            <div className="flex flex-col items-center justify-center space-y-2 mt-auto pb-8 md:pb-12">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-semibold">
                                    {TESTIMONIALS[currentIndex].name}
                                </span>
                                <span className="text-[10px] text-white/40 font-light">
                                    {TESTIMONIALS[currentIndex].role}
                                </span>
                                {TESTIMONIALS[currentIndex].company && (
                                    <span className="text-[9px] text-white/20 font-light italic">
                                        {TESTIMONIALS[currentIndex].company}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12 md:mt-16">
                    {TESTIMONIALS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-[2px] transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-gold' : 'w-4 bg-white/10 hover:bg-white/30'
                                }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
