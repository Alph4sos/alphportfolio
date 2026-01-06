import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa';

export function Footer() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:momodualp@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/alphonsus-momodu', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/alphonsusceo', label: 'X (Twitter)' },
    { icon: Instagram, href: 'https://www.instagram.com/alphonsusceo/', label: 'Instagram' },
    { icon: FaPinterest, href: 'https://www.pinterest.com/alph4sos/_created/', label: 'Pinterest' }
  ];

  return (
    <footer className="relative py-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Alphonsus Momodu
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-sm text-center"
          >
            © {new Date().getFullYear()} Alphonsus Momodu. All rights reserved.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 dark:text-gray-500 text-sm text-center max-w-md"
          >
            Designing the future, one pixel at a time.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
