import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/balaji-borude', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/balaji-borude/', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-slate-900 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h3 
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Balaji Borude
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-300 font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="group relative p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-500 shadow-2xl"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <Icon size={28} className="relative z-10 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-12"
          >
            <motion.div 
              className="text-gray-400 flex items-center justify-center space-x-2 text-lg"
              whileHover={{ scale: 1.02 }}
            >
              <span>© 2025 Balaji Borude. Made with </span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotateY: [0, 180, 360]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Heart size={20} className="text-red-500" fill="currentColor" />
                <motion.div
                  className="absolute inset-0 text-red-500 blur-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart size={20} fill="currentColor" />
                </motion.div>
              </motion.div>
              {/* <span>and React</span> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}