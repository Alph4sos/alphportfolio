import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Motion Graphics Designer',
      company: 'Eklipse Technologies Limited',
      period: '2021 – 2023',
      description: 'Produced engaging motion graphics and animated content for promotional campaigns. Specialized in After Effects animations, video editing, and creative storytelling.',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Graphic & Website Designer',
      company: 'Elites Holdings Limited',
      period: '2023 – 2025',
      description: 'Creating visual identities, marketing materials, and web experiences for diverse clients. Responsible for brand development, website design, and digital asset creation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Founder & CTO',
      company: 'FlexiRyde Technologies Limited',
      period: '2024 – Present',
      description: 'Leading the technical vision and product development of a luxury chauffeur service platform. Overseeing Flutter app development, Firebase infrastructure, and team management.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="experience" ref={ref} className="relative py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
            Professional <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
            >
              <div className="flex items-start gap-4 md:gap-0">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-white dark:ring-gray-950`} />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} flex-1`}>
                  <div className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all hover:shadow-2xl">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-px bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl`} />

                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${exp.color} mb-4`}>
                        <Briefcase className="w-5 h-5 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl mb-1 text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>

                      {/* Company */}
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                        {exp.company}
                      </p>

                      {/* Period */}
                      <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
