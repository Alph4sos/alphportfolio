import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Target, Heart, Lightbulb, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const values = [
    { icon: Lightbulb, label: 'Creativity', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, label: 'Consistency', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, label: 'Curiosity', color: 'from-pink-500 to-red-500' },
    { icon: TrendingUp, label: 'Growth', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <ImageWithFallback
                  src="/me/me.jpg"
                  alt="Alphonsus Momodu"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300">
                I'm <strong className="text-gray-900 dark:text-white">Alphonsus Momodu</strong>, a multidisciplinary creative professional with a passion for visual storytelling and digital innovation.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                My journey began with design, crafting visuals that speak, and evolved into building full digital products that scale. Over the years, I've grown from being a graphic designer into a brand designer, motion graphics artist, UI/UX designer, full-stack developer, videographer, and entrepreneur.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Today, I merge creativity with technology to help brands stand out and connect deeply with their audience. Whether it's a logo, website, app, or video, I approach every project with the same purpose: to create designs that inspire and solutions that work.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-900/30">
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To empower businesses and creatives with design-driven, tech-enabled solutions that elevate their vision.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl mb-8 text-center text-gray-900 dark:text-white">Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="group relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all hover:shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
                <div className="relative text-center">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${value.color} mb-3`}>
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-900 dark:text-white">{value.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
