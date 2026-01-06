import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const projects = [
    {
      slug: 'flexiryde-technologies',
      title: 'FlexiRyde App',
      description: 'Luxury chauffeur app built with Flutter and Firebase',
      image: '/flexiryde/others/flexiryde_header.png',
      tags: ['Flutter', 'Firebase', 'Mobile App', 'UI/UX'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      slug: 'vixa-emergency-safety-app',
      title: 'Vixa Emergency Safety App',
      description: 'An emergency safety mobile app that allows users to quickly alert trusted contacts during critical situations.',
      image: '/vixa/others/vixa_header.png',
      tags: ['Flutter', 'Firebase', 'Supabase', 'OneSignal', 'Twilio', 'Resend', 'Mobile App', 'Emergency Safety'],
      color: 'from-orange-500 to-red-500'
    },
    {
      slug: 'kovest-app',
      title: 'Kovest App',
      description: 'A smart savings and investment app built for the new generation.',
      image: '/kovest/others/kovest_header.png',
      tags: ['Flutter', 'Fintech', 'Mobile App', 'UI/UX'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      slug: 'whot-island-game',
      title: 'Whot Island Game',
      description: 'A mobile card game inspired by the classic Whot game.',
      image: '/whot_island/others/whot_island_header.png',
      tags: ['Flutter', 'Dart', 'Unity', 'Mobile Game', 'Card Game', 'Game Design'],
      color: 'from-green-500 to-teal-500'
    },
    {
      slug: 'elites-realty-website',
      title: 'Elites Realty Website',
      description: 'Modern real estate website for premium property showcase',
      image: '/elites_realty_website/others/elites_realty_header.png',
      tags: ['Web Design', 'Real Estate', 'UI/UX', 'Responsive'],
      color: 'from-amber-500 to-orange-500'
    },
    {
      slug: 'iexcel-foods-website',
      title: 'iExcel Foods Website',
      description: 'Food services, catering and welfare solutions platform',
      image: '/iexcel_foods/others/iExcel_Foods_header.png',
      tags: ['Web Design', 'Food Services', 'UI/UX', 'E-commerce'],
      color: 'from-green-600 to-emerald-500'
    },
    {
      slug: 'flexiryde-website',
      title: 'FlexiRyde Website',
      description: 'Premium chauffeur service booking platform website',
      image: '/flexiryde/others/flexiryde_website_header.png',
      tags: ['Web Design', 'Transportation', 'React', 'UI/UX'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      slug: 'collins-portfolio-website',
      title: 'Mr. Collins Portfolio Website',
      description: 'Professional portfolio website for creative professional',
      image: '/collins/others/collins_website_header.png',
      tags: ['Web Design', 'Portfolio', 'Next.js', 'UI/UX'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
            Featured <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-60 transition-opacity`} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
                      >
                        {tag}
                      </span>
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