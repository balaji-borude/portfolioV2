import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-dark-bg dark:via-gray-900 dark:to-dark-surface relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 dark:from-emerald-600/10 dark:to-teal-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-violet-400/10 to-purple-400/10 dark:from-violet-600/5 dark:to-purple-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full mb-6 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3 animate-pulse" />
                <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                  Available for work
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl  font-bold text-gray-900 dark:text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <motion.span
                className="relative inline-block p-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Balaji
                <motion.div
                  className="absolute -bottom-2 left-0  right-0 h-1  bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer passionate about creating{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                beautiful
              </span>
              ,{" "}
              <span className="text-teal-600 dark:text-teal-400 font-medium">
                functional
              </span>{" "}
              web experiences that make a difference.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Primary Button - View My Work */}
              <motion.button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-2xl font-semibold shadow-2xl shadow-emerald-500/25 transition-all duration-500 text-lg overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.button>

              {/* Secondary Button - View Resume */}
              <motion.a
                href="https://drive.google.com/file/d/1q8fs0zAneqTYkF-RlnJB7088J4c02qg1/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-white/90 dark:bg-gray-800/90 
               text-gray-800 dark:text-gray-100 
               rounded-2xl font-semibold text-lg 
               backdrop-blur-sm border-2 border-gray-300/50 dark:border-gray-600/50
               shadow-xl hover:shadow-2xl
               transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/90 to-teal-500/90 
                    rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 -z-0"
                />

                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 
                    rounded-2xl blur-xl opacity-0 group-hover:opacity-50 
                    transition-opacity duration-500 -z-10"
                />

                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Resume
                  <svg
                    className="w-4 h-4 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </motion.a>

              {/* Outline Button - Get In Touch */}
              <motion.button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative px-10 py-4 
               border-2 border-emerald-500 dark:border-emerald-400
               text-emerald-600 dark:text-emerald-400 
               hover:bg-emerald-500 hover:text-white 
               dark:hover:bg-emerald-400 dark:hover:text-gray-900
               rounded-2xl font-semibold 
               transition-all duration-500 text-lg 
               backdrop-blur-sm overflow-hidden
               shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-400/10 
                    rounded-2xl blur-xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500"
                />

                <span className="relative z-10 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get In Touch
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center space-x-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                {
                  Icon: Github,
                  href: "https://github.com/balaji-borude",
                  label: "GitHub",
                  color: "from-gray-600 to-gray-800",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/balaji-borude/",
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  Icon: Mail,
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=balajiborude2503@gmail.com&su=Hello&body=Hi%20Balaji,",
                  label: "Email",
                  color: "from-red-500 to-red-700",
                },
              ].map(({ Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl shadow-xl text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
                  />
                  <Icon
                    size={24}
                    className="relative z-10 group-hover:text-white transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-3 text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 group"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ChevronDown size={28} className="relative z-10" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
