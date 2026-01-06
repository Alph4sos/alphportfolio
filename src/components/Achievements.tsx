import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Award, Rocket, Users, Sparkles } from 'lucide-react';

export function Achievements() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      icon: Award,
      number: '100+',
      label: 'Visual Projects',
      description: 'Completed across various industries',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Rocket,
      number: '1',
      label: 'Tech Startup',
      description: 'Built and led from idea to live product',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Creatives Mentored',
      description: 'Via Nexalph Academy',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Sparkles,
      number: 'AI',
      label: 'Innovation',
      description: 'Produced AI-generated cinematic projects',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="achievements" ref={ref} className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
            Key <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Milestones that define my journey as a creative and entrepreneur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all hover:shadow-2xl text-center overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-px bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-4 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: 'spring' }}
                    className="text-5xl mb-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent"
                  >
                    {achievement.number}
                  </motion.div>

                  {/* Label */}
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    {achievement.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-100 dark:border-blue-900/30"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl mb-4 text-gray-900 dark:text-white">
              Making an Impact
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From mentoring aspiring creatives to building products that solve real problems,
              every project is an opportunity to create meaningful change and push the boundaries
              of what's possible at the intersection of design and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
