import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that follows best practices and industry standards.",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Crafting beautiful, intuitive interfaces that provide exceptional user experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Building fast, optimized applications that deliver results and exceed expectations.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br  from-emerald-50 via-white to-teal-50 dark:from-dark-bg dark:via-gray-900 dark:to-dark-surface"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-y-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 overflow-y-hidden"
        >
          <motion.div
            className="inline-flex items-center overflow-y-hidden px-6 py-3 bg-gradient-to-r from-rose-100 to-orange-100 dark:from-rose-900/30 dark:to-orange-900/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Palette className="w-5 h-5 text-rose-600 dark:text-rose-400 mr-2" />
            <span className="text-rose-700 dark:text-rose-300 font-medium">
              About Me
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-rose-800 to-orange-900 dark:from-white dark:via-rose-300 dark:to-orange-300 bg-clip-text text-transparent mb-6">
            Passionate Developer
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer eager to create digital solutions that bring design and functionality together. I love turning ideas into clean, user-friendly applications that make an impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700" />
              <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-200/50 dark:border-gray-700/50 relative">
                <motion.div
                  className="w-40 h-40 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl mx-auto mb-8 flex items-center justify-center text-white text-5xl font-bold shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent" />
                  <span className="relative z-10">B</span>
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  Balaji Borude
                </motion.h3>

                
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-center text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Full Stack Developer based in Pune, India. I love turning
                  complex problems into simple, beautiful solutions.
                </motion.p>

                {/* Resume Button */}
                <div className="text-center">
                  <a
                    href="/BalajiResume.pdf" // added portfolio on public folder
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-medium shadow-lg hover:shadow-xl transition duration-300"
                  >
                    View My Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-orange-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
                <div className="flex items-start space-x-6 p-8 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center text-white shadow-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon size={28} />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
// put your resume file in the public folder