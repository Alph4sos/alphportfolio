import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';

interface VideoLightboxProps {
    videoSrc: string | null;
    onClose: () => void;
}

export function VideoLightbox({ videoSrc, onClose }: VideoLightboxProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Close on ESC key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (videoSrc) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when lightbox is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [videoSrc, onClose]);

    // Auto-play and pause video on open/close
    useEffect(() => {
        if (videoRef.current) {
            if (videoSrc) {
                videoRef.current.play().catch(() => {
                    // Auto-play might be blocked, user can click play
                    setIsPlaying(false);
                });
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [videoSrc]);

    const handleClose = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {videoSrc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                    onClick={handleClose}
                >
                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                        aria-label="Close video lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Video */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-full max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            controls
                            className="max-w-full max-h-[90vh] object-contain"
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
