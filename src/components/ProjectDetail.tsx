import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { AppPreviewCarousel } from './AppPreviewCarousel';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    tags: string[];
    color: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    gallery?: string[];
    appPreviews?: {
      lightMode: string[];
      darkMode: string[];
    };
    videoPreview?: string;
    websiteUrl?: string;
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => {
        setShowComingSoon(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

  const handleStoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Coming Soon Popup */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl flex items-center justify-center"
              style={{ width: '160px', height: '120px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                Coming Soon
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl mb-4 text-gray-900 dark:text-white">About This Project</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Challenge */}
            {project.challenge && (
              <div className="mb-12 p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">The Challenge</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="mb-12 p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">The Solution</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <div className="mb-12 p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">Key Results</h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm">
                        ✓
                      </span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* App/Website Previews */}
            {project.appPreviews && (
              <div className="mb-12">
                <h3 className="text-2xl mb-2 text-gray-900 dark:text-white">{project.websiteUrl ? 'Website Previews' : 'App Previews'}</h3>
                {/* Swipe hint for mobile */}
                <div className="md:hidden flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <span>← Swipe to navigate →</span>
                </div>
                <AppPreviewCarousel
                  lightModeImages={project.appPreviews.lightMode}
                  darkModeImages={project.appPreviews.darkMode}
                  isWebsitePreview={!!project.websiteUrl}
                />
              </div>
            )}

            {/* App Video Preview */}
            {project.videoPreview && (
              <div className="mb-12">
                <h3 className="text-2xl mb-6 text-gray-900 dark:text-white">App Video Preview</h3>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-black">
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                    <iframe
                      src={`${project.videoPreview}?playsinline=0&title=0&byline=0&portrait=0`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      allowFullScreen
                      webkitallowfullscreen="true"
                      mozallowfullscreen="true"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                      }}
                      title="App Preview Video"
                    />
                  </div>
                </div>
              </div>
            )}
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 mt-12">
              {/* Play Store Button - Only show for apps */}
              {!project.websiteUrl && (
                <motion.a
                  href="#"
                  onClick={handleStoreClick}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center gap-4">
                    <Download className="w-8 h-8" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-medium opacity-90">GET IT ON</span>
                      <span className="text-xl font-bold">Google Play</span>
                    </div>
                  </div>
                </motion.a>
              )}

              {/* App Store Button - Only show for apps */}
              {!project.websiteUrl && (
                <motion.a
                  href="#"
                  onClick={handleStoreClick}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-4 px-8 py-4 bg-black text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center gap-4">
                    <Download className="w-8 h-8" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-medium opacity-90">Download on the</span>
                      <span className="text-xl font-bold">App Store</span>
                    </div>
                  </div>
                </motion.a>
              )}

              {/* Visit Website Button */}
              {project.websiteUrl && (
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-center gap-4">
                    <ExternalLink className="w-8 h-8" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-medium opacity-90">VISIT THE</span>
                      <span className="text-xl font-bold">Website</span>
                    </div>
                  </div>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top */}
      <div className="py-12 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
