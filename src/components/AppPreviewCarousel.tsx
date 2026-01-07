import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AppPreviewCarouselProps {
    lightModeImages: string[];
    darkModeImages: string[];
    isWebsitePreview?: boolean;
}

export function AppPreviewCarousel({ lightModeImages, darkModeImages, isWebsitePreview = false }: AppPreviewCarouselProps) {
    // Combine light mode first, then dark mode
    const allImages = [...lightModeImages, ...darkModeImages];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastScrollTime = useRef<number>(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    // Auto-advance carousel
    useEffect(() => {
        if (isPaused || allImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % allImages.length);
        }, 2000); // 2 seconds

        return () => clearInterval(interval);
    }, [isPaused, allImages.length]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }, [allImages.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, [allImages.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToPrevious, goToNext]);

    // Mouse wheel scroll navigation (PC)
    const handleWheel = useCallback((e: React.WheelEvent) => {
        // Throttle scroll events to prevent rapid firing
        const now = Date.now();
        if (now - lastScrollTime.current < 300) return;

        // Use horizontal scroll (deltaX) primarily, fallback to vertical (deltaY)
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

        if (Math.abs(delta) > 10) {
            lastScrollTime.current = now;
            if (delta > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
            e.preventDefault();
        }
    }, [goToNext, goToPrevious]);

    // Touch handlers for mobile swipe
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = e.touches[0].clientX;
        setIsPaused(true);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    }, []);

    const handleTouchEnd = useCallback(() => {
        const swipeDistance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50; // Minimum swipe distance to trigger

        if (Math.abs(swipeDistance) > minSwipeDistance) {
            if (swipeDistance > 0) {
                // Swiped left - go to next
                goToNext();
            } else {
                // Swiped right - go to previous
                goToPrevious();
            }
        }
        setIsPaused(false);
    }, [goToNext, goToPrevious]);

    // Helper to get visible images for desktop view
    const getVisibleImages = () => {
        const visible = [];
        const range = 2; // Show 2 images on each side

        for (let i = -range; i <= range; i++) {
            const index = (currentIndex + i + allImages.length) % allImages.length;
            visible.push({
                src: allImages[index],
                offset: i,
                index
            });
        }

        return visible;
    };

    if (allImages.length === 0) return null;

    return (
        <div className="relative w-full">
            <div
                ref={containerRef}
                className="relative w-full cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                role="region"
                aria-label="App preview carousel - scroll or swipe to navigate"
            >
                {/* Desktop Layout - Center focused with blurred sides */}
                <div className={`hidden md:flex relative items-center justify-center overflow-hidden ${isWebsitePreview ? 'h-auto py-8' : 'h-[600px] px-16'}`}>
                    <div className={`flex items-center justify-center ${isWebsitePreview ? 'w-full max-w-6xl' : 'gap-4'}`}>
                        {getVisibleImages().map(({ src, offset, index }) => {
                            const isActive = offset === 0;
                            const distance = Math.abs(offset);

                            // Calculate styling based on offset
                            const scale = isWebsitePreview ? 1 : (isActive ? 1 : Math.max(0.5, 0.8 - (distance * 0.15)));
                            const opacity = isWebsitePreview ? 1 : (isActive ? 1 : Math.max(0.2, 0.4 - (distance * 0.1)));
                            const blur = isWebsitePreview ? 0 : (isActive ? 0 : Math.min(12, 6 + (distance * 3)));

                            return (
                                <motion.div
                                    key={index}
                                    className={`flex-shrink-0 ${isWebsitePreview ? 'w-full' : ''}`}
                                    initial={false}
                                    animate={{
                                        scale,
                                        opacity,
                                        filter: `blur(${blur}px)`,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeInOut'
                                    }}
                                    style={{
                                        pointerEvents: isActive ? 'auto' : 'none',
                                        zIndex: isActive ? 10 : 10 - distance,
                                    }}
                                >
                                    <div
                                        className={`overflow-hidden flex items-center justify-center ${isWebsitePreview
                                            ? 'rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
                                            : ''
                                            }`}
                                        style={isWebsitePreview ? {} : { maxWidth: '800px', maxHeight: '560px' }}
                                    >
                                        <img
                                            src={src}
                                            alt={`${isWebsitePreview ? 'Website' : 'App'} preview ${index + 1}`}
                                            className={`${isWebsitePreview ? 'w-full h-auto rounded-lg' : 'max-w-full max-h-full object-contain'}`}
                                            style={isWebsitePreview ? {} : { maxHeight: '560px' }}
                                            loading="lazy"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Scroll hint for desktop */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <span>←</span>
                        <span>Scroll to navigate</span>
                        <span>→</span>
                    </div>
                </div>

                {/* Mobile Layout - Single image with swipe */}
                <div
                    className="md:hidden relative h-[500px] flex items-center justify-center touch-pan-y"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="w-full max-w-[280px] mx-auto"
                        >
                            <div className="overflow-hidden aspect-[9/19.5]">
                                <ImageWithFallback
                                    src={allImages[currentIndex]}
                                    alt={`App preview ${currentIndex + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {allImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentIndex
                                ? 'w-8 bg-blue-500'
                                : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                            aria-current={index === currentIndex ? 'true' : 'false'}
                        />
                    ))}
                </div>

                {/* Image Counter */}
                <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                    {currentIndex + 1} / {allImages.length}
                </div>
            </div>
        </div>
    );
}
