import React, { useState } from 'react';
import { motion } from 'motion/react';
import VideoModal from './VideoModal';
import projectsData from '../data/videos.json';

const PROJECTS = projectsData;

/* SelectedWork Component */
function SelectedWork() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <section id="work" className="pt-32 pb-16 bg-black overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-sans font-bold tracking-[0.3em] text-white uppercase">
                        My Works
                    </h2>
                </motion.div>

                {/* Showreel Video Frame */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="group relative aspect-video w-full mb-12 overflow-hidden bg-[#050505] cursor-pointer shadow-lg"
                    onClick={() => setActiveVideo("https://youtu.be/8Kdl4fgfsas")}
                >
                    <img
                        src="/thumbnails/cult_fit2.jpeg"
                        alt="Beyond the edit showreel"
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                        referrerPolicy="no-referrer"
                    />

                    {/* Persistent Play Indicator */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                        <div className="w-16 h-16 bg-black/40 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center group-hover:bg-white/10 group-hover:border-white transition-all duration-300">
                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                        </div>
                    </div>

                    {/* Hover overlay text/darkening */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center pt-[6.5rem] z-20"
                    >
                        <span className="text-white text-xs tracking-[0.2em] font-medium uppercase font-sans">
                            Play Showreel
                        </span>
                    </motion.div>
                </motion.div>

                {/* Project Grid */}
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
                            <img
                                src={project.thumbnail}
                                alt={`${project.title} - ${project.category} Video Editor Portfolio`}
                                loading="lazy"
                                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-[1s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                                referrerPolicy="no-referrer"
                            />

                            {/* Persistent Play Indicator */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                                <div className="w-12 h-12 bg-black/40 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center group-hover:bg-white/10 group-hover:border-white transition-all duration-300">
                                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-1" />
                                </div>
                            </div>

                            {/* Hover overlay text/darkening */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center pt-[5.5rem] z-20"
                            >
                                <span className="text-white text-[10px] tracking-[0.2em] font-medium uppercase font-sans">
                                    Play Video
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
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
}

export default SelectedWork;
