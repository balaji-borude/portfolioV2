import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
<motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl border-b border-gray-200/30 dark:border-dark-border/30 shadow-lg"
>
  <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="font-bold text-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
      >
        Portfolio
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 ${
              activeSection === item.href
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-gray-700 dark:text-gray-300'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
            {activeSection === item.href && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                layoutId="activeIndicator"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </motion.button>
        ))}

        {/* Theme Toggle */}
        <motion.button
          onClick={toggleTheme}
          className="p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-surface dark:to-gray-800 text-gray-700 dark:text-gray-300 hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden flex items-center space-x-3">
        <motion.button
          onClick={toggleTheme}
          className="p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-surface dark:to-gray-800 text-gray-700 dark:text-gray-300"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-surface dark:to-gray-800 text-gray-700 dark:text-gray-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <motion.div
      initial={false}
      animate={isOpen ? { height: 'auto', opacity: 1, scale: 1 } : { height: 0, opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="md:hidden overflow-hidden w-full"
    >
      <div className="py-6 space-y-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`block w-full text-left px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-300 ${
              activeSection === item.href
                ? 'bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-600 dark:text-emerald-400 shadow-lg'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-dark-surface dark:hover:to-gray-800'
            }`}
            whileHover={{ x: 12, scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  </nav>
</motion.header>

  );
}