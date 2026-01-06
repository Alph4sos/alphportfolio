import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';
import { VideoLightbox } from './VideoLightbox';

export function Portfolio() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('Graphic Design');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);

  const tabs = ['Graphic Design', 'Social Media Design', 'Motion Graphics', /* 'Photography', 'Videography', */ 'UI/UX Design'];

  const portfolioItems = {
    'Graphic Design': [
      {
        image: '/graphic_design/1.jpeg'
      },
      {
        image: '/graphic_design/2.jpeg'
      },
      {
        image: '/graphic_design/3.jpeg'
      },
      {
        image: '/graphic_design/4.jpeg'
      },
      {
        image: '/graphic_design/5.jpeg'
      },
      {
        image: '/graphic_design/6.jpeg'
      },
      {
        image: '/graphic_design/7.jpeg'
      },
      {
        image: '/graphic_design/8.jpeg'
      },
      {
        image: '/graphic_design/9.png'
      },
      {
        image: '/graphic_design/10.png'
      },
      {
        image: '/graphic_design/11.png'
      }
    ],
    'Social Media Design': [
      { image: '/social_medIa_design/1a.jpeg' },
      { image: '/social_medIa_design/2a.jpeg' },
      { image: '/social_medIa_design/3a.jpeg' },
      { image: '/social_medIa_design/4a.jpeg' },
      { image: '/social_medIa_design/5a.jpeg' },
      { image: '/social_medIa_design/20a.jpeg' },
      { image: '/social_medIa_design/7a.jpeg' },
      { image: '/social_medIa_design/8a.jpeg' },
      { image: '/social_medIa_design/9a.jpeg' },
      { image: '/social_medIa_design/10a.jpeg' },
      { image: '/social_medIa_design/11a.jpeg' },
      { image: '/social_medIa_design/12a.jpeg' },
      { image: '/social_medIa_design/13a.jpeg' },
      { image: '/social_medIa_design/14a.jpeg' },
      { image: '/social_medIa_design/15a.jpeg' },
      { image: '/social_medIa_design/16a.jpeg' },
      { image: '/social_medIa_design/17a.jpeg' },
      { image: '/social_medIa_design/18a.jpeg' },
      { image: '/social_medIa_design/19a.jpeg' },
      { image: '/social_medIa_design/26a.png' },
      { image: '/social_medIa_design/21a.png' },
      { image: '/social_medIa_design/22a.png' },
      { image: '/social_medIa_design/23a.png' },
      { image: '/social_medIa_design/24a.png' },
      { image: '/social_medIa_design/25a.png' },
      { image: '/social_medIa_design/6a.jpeg' }
    ],
    'Motion Graphics': [
      {
        video: '/2d_animation/1b.mp4',
        type: 'video'
      },
      {
        video: '/2d_animation/2b.mp4',
        type: 'video'
      }
    ],
    /* 'Photography': [
      {
        title: 'Corporate Headshots',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Portrait'
      },
      {
        title: 'Product Photography - Tech',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Product'
      },
      {
        title: 'Event Coverage - Conference',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Event'
      },
      {
        title: 'Architectural Photography',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Architecture'
      },
      {
        title: 'Food Photography - Restaurant',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Food'
      },
      {
        title: 'Lifestyle Photography',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        category: 'Lifestyle'
      }
    ], */
    /* 'Videography': [
      {
        video: '/videography/1c.mp4',
        type: 'video'
      },
      {
        video: '/videography/2c.mp4',
        type: 'video'
      }
    ], */
    'UI/UX Design': [
      {
        title: 'Whot Island Game UI/UX Design',
        subtitle: 'Complete mobile game interface design in Figma',
        image: '/uiux_design/thumbnails/1a.png',
        link: 'https://www.figma.com/design/J0036YI3Y7MVRRELzzQWgW/Whotty-Game?node-id=0-1&t=6k89dGRZCYEk65eP-1',
        type: 'figma'
      }
    ]
  };

  return (
    <section id="portfolio" ref={ref} className="relative py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12" />

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full transition-all ${activeTab === tab
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems[activeTab as keyof typeof portfolioItems].map((item, index) => (
            <motion.div
              key={'image' in item ? item.image : 'video' in item ? item.video : index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => {
                if ('link' in item && item.type === 'figma') {
                  window.open(item.link, '_blank');
                } else if ('video' in item) {
                  setLightboxVideo(item.video);
                } else if ('image' in item) {
                  setLightboxImage(item.image);
                }
              }}
            >
              <div className="relative overflow-hidden">
                {'video' in item ? (
                  <video
                    src={item.video}
                    preload="metadata"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    muted
                  />
                ) : 'type' in item && item.type === 'figma' ? (
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={'title' in item ? item.title : 'Portfolio image'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-opacity" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      {'subtitle' in item && (
                        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm">
                          {item.subtitle}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                          Figma
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
                          UI/UX Design
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ImageWithFallback
                    src={item.image}
                    alt={'title' in item ? item.title : 'Portfolio image'}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {'title' in item && !('type' in item && item.type === 'figma') && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-purple-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl mb-2">{item.title}</h3>
                      {'category' in item && (
                        <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{item.category}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        imageSrc={lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      {/* Video Lightbox */}
      <VideoLightbox
        videoSrc={lightboxVideo}
        onClose={() => setLightboxVideo(null)}
      />
    </section>
  );
}
