import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/mock';
import { VideoModal } from './VideoModal';

/**
 * SelectedWork component displays a grid of featured projects in a large poster style.
 */
export const SelectedWork: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    return (
        <section id="work" className="py-32 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Minimal Centered Header matching Editors Kitchen */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-[0.3em] text-white uppercase">
                        Brand Films
                    </h2>
                </motion.div>

                {/* 3-Column Widescreen Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                            className="group relative aspect-video overflow-hidden bg-[#050505] cursor-pointer shadow-lg"
                            onClick={() => setActiveVideo(project.videoUrl)}
                        >
                            {/* Base Image */}
                            <img
                                src={project.thumbnail}
                                alt="Portfolio Item"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                                referrerPolicy="no-referrer"
                            />

                            {/* Minimal Black Dimming Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center pt-2"
                            >
                                {/* Simple White Play Icon */}
                                <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-4 opacity-90 hover:opacity-100 transition-opacity">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                </div>

                                {/* Utility Text */}
                                <span className="text-white text-[10px] tracking-[0.2em] font-medium uppercase font-sans">
                                    Play Video
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Minimal Load More Button */}
                <div className="mt-20 flex justify-center">
                    <motion.a
                        href="https://vimeo.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/60 hover:text-white text-sm font-serif italic border-b border-white/20 pb-1 transition-colors"
                    >
                        Load More
                    </motion.a>
                </div>
            </div>

            {/* Video Player Modal */}
            <VideoModal
                isOpen={!!activeVideo}
                onClose={() => setActiveVideo(null)}
                videoUrl={activeVideo || ''}
            />
        </section>
    );
};
