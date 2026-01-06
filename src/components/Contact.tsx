import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'momodualp@gmail.com',
      href: 'mailto:momodualp@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Whatsapp',
      value: '0907 996 2862',
      href: 'https://wa.me/09079962862',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'alphonsus-momodu',
      href: 'https://linkedin.com/in/alphonsus-momodu',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully!', {
      description: 'Thank you for reaching out. I\'ll get back to you soon.'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-500/5 to-purple-500/5' : 'from-purple-500/5 to-pink-500/5'
              } dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl`}
            style={{
              left: `${20 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
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
            Let's <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl mb-4 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all hover:shadow-xl"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${contact.color}`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                      <p className="text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${contact.color}`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                      <p className="text-gray-900 dark:text-white">{contact.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => window.open('mailto:momodualp@gmail.com', '_blank')}
                    >
                      Hire Me
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
