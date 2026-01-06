import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Palette, Code, Video, Users } from 'lucide-react';

export function Skills() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: Palette,
      title: 'Design & Branding',
      color: 'from-pink-500 to-rose-500',
      skills: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Canva', 'Figma']
    },
    {
      icon: Code,
      title: 'Development & Technology',
      color: 'from-blue-500 to-cyan-500',
      skills: ['Flutter (Dart)', 'Firebase', 'WordPress', 'HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      icon: Video,
      title: 'Media & Production',
      color: 'from-purple-500 to-indigo-500',
      skills: ['Motion Graphics', '2D Animation', 'Videography', 'Video Editing']
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: 'from-green-500 to-emerald-500',
      skills: ['Creative Direction', 'Project Management', 'Leadership', 'Continuous Learning']
    }
  ];

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
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
            Skills & <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Tools</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all hover:shadow-2xl overflow-hidden">
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} mb-6 shadow-lg`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 + skillIndex * 0.05 }}
                        className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
