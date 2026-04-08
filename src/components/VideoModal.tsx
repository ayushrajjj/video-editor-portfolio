import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

/* Parses and returns a valid YouTube embed URL. */
function getYoutubeEmbedUrl(url) {
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') {
            return `https://www.youtube.com/embed${urlObj.pathname}?autoplay=1`;
        }
        if (urlObj.hostname.includes('youtube.com')) {
            if (urlObj.pathname.startsWith('/shorts/')) {
                const videoId = urlObj.pathname.split('/')[2];
                if (videoId) {
                    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                }
            } else {
                const videoId = urlObj.searchParams.get('v');
                if (videoId) {
                    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                }
            }
        }
    } catch (e) {
        // Fallback for flat IDs or malformed URLs
    }
    // Attempt to handle raw IDs like dQw4w9WgXcQ
    if (!url.includes('/') && !url.includes(':') && url.length > 5) {
        return `https://www.youtube.com/embed/${url}?autoplay=1`;
    }
    return url;
};

/* Detect if the URL is a YouTube Short */
function isYoutubeShort(url: string): boolean {
    try {
        const urlObj = new URL(url);
        return urlObj.pathname.startsWith('/shorts/');
    } catch {
        return false;
    }
}

/* VideoModal Component */
function VideoModal(props) {
    const isOpen = props.isOpen;
    const onClose = props.onClose;
    const videoUrl = props.videoUrl;
    const short = isYoutubeShort(videoUrl || '');

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden';
            // Optional ESC key to close
            const handleEsc = function (e) {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', handleEsc);
            return function cleanup() {
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
                    {/* Close Action */}
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
                        className={short
                            ? "relative bg-black rounded-sm overflow-hidden shadow-2xl border border-white/5 h-[85vh] aspect-[9/16]"
                            : "relative w-full max-w-7xl aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-white/5"
                        }
                        onClick={function (e) { e.stopPropagation(); }}
                    >
                        <iframe
                            src={getYoutubeEmbedUrl(videoUrl)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full object-cover border-0"
                            title="YouTube video player"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default VideoModal;
