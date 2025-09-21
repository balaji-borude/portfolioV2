import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Globe,  Shield } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-emerald-400 to-teal-600',
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'from-violet-400 to-purple-600',
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform'],
    color: 'from-rose-400 to-pink-600',
  },
  {
    title: 'DevOps & Tools',
    icon: Shield,
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux'],
    color: 'from-orange-400 to-red-600',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-dark-bg dark:via-gray-900 dark:to-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
            <span className="text-emerald-700 dark:text-emerald-300 font-medium">Technical Skills</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-900 dark:from-white dark:via-emerald-300 dark:to-teal-300 bg-clip-text text-transparent mb-6">
            What I Work With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I love working with cutting-edge technologies to build exceptional digital experiences. 
            Here are the tools and frameworks I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" 
                   style={{backgroundImage: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`}}
              />
              <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 h-full">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 group/skill"
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors font-medium">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}