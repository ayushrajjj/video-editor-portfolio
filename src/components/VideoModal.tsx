import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

/**
 * Reusable modal component to display playing videos with a cinematic backdrop blur.
 */
export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    // Prevent scrolling when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Optional ESC key to close
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') onClose();
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('keydown', handleEsc);
            };
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-xl p-4 md:p-12"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 mix-blend-difference"
                    >
                        <X size={32} />
                    </button>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-7xl aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-white/5"
                        onClick={(e) => e.stopPropagation()} // Prevent clicking video from closing modal
                    >
                        <video
                            src={videoUrl}
                            autoPlay
                            controls
                            className="w-full h-full object-cover"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
