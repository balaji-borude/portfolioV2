import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Star } from "lucide-react";
import StudyNotion from "../assets/StudyNotion.png";
import college from "../assets/college.png"

// array banavla 
const projects = [
  {
    title: "Ed-tech Platform (Study Notion) ",
    description:
      "StudyNotion: Full-stack EdTech platform with Razorpay payments, student dashboard for course access, and instructor dashboard for managing courses.",
    image: StudyNotion,
    tags: ["React", "Node.js", "MongoDb", "Razorpay"],
    featured: true,
    github: "https://github.com/balaji-borude/Ed-Tech-platform.git",
    live: "https://studynotion-nine-gilt.vercel.app/",
  },
  {
    title: "College Searching Application",
    description:
      "Collaborative project management tool with real-time updates, file sharing, and team communication.",
    image:college,
    tags: ["Express.js", "Python(flaskApi)", "Reat", "Tailwind"],
    featured: false,
    github: "https://github.com/SohamS11/CollegeProject.git",
    live: "#",
  },
  {
    title: "Reels Pro Application",
    description:
      "This application made by using Next.js and typescript , it having scrolling reels like functionality",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Postgres", "Typescript", "Prisma"],
    featured: false,
    github: "https://github.com/balaji-borude/Reels_Pro.git",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-white via-emerald-50 to-slate-100 dark:from-dark-surface dark:via-dark-bg dark:to-gray-900 overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2" />
            <span className="text-violet-700 dark:text-violet-300 font-medium">
              Featured Work
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-violet-800 to-purple-900 dark:from-white dark:via-violet-300 dark:to-purple-300 bg-clip-text text-transparent mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, from full-stack applications to
            creative experiments. Each project represents a unique challenge and
            learning opportunity.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Project */}
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-8 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 -z-10" />
                <div className="bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Star className="w-4 h-4" />
                        <span>Featured</span>
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <motion.a
                        href={project.live}
                        target="_blank"
                  rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                  rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl font-medium transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          {/* Other Projects */}
          <div className="lg:col-span-4 space-y-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 -z-10" />
                  <div className="bg-white/90 dark:bg-dark-surface/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-3">
<motion.a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
>
  <ExternalLink className="w-5 h-5" />
  <span>Live Demo</span>
</motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 rounded-lg text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
