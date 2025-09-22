import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Briefcase, Smartphone, Clock, MapPin } from "lucide-react";
import "react-vertical-timeline-component/style.min.css";

// TypeScript interface for experience data
interface ExperienceData {
  title: string;
  company_name: string;
  icon: React.ElementType;
  iconBg: string;
  date: string;
  location?: string;
  points: string[];
}

// Experience Data
const experiences: ExperienceData[] = [
  {
    title: "MERN Stack Intern",
    company_name: "Stridemax India Pvt. Ltd",
    icon: Briefcase,
    iconBg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    date: "March 2025 - june 2025",
    location: "Remote",
    points: [
      "Developed a full-featured Inventory Management System using the MERN stack.",
      "Built CRUD operations for products with JWT-based authentication.",
      "Currently working on a real-time chat application using Socket.IO and MongoDB.",
      "Followed best practices for scalable code and clean UI/UX implementation.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "KRB Finearch Pvt. Ltd.",
    icon: Smartphone,
    iconBg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    date: "July 2023 - Jan 2024",
    location: "Hybrid",
    points: [
      "Worked on a Medicare mobile application using React Native.",
      "Focused on building clean and user-friendly UI components.",
      "Collaborated with the backend developer to integrate RESTful APIs.",
      "Tested and debugged layouts across multiple screen sizes and devices.",
    ],
  },
];

const cardVariant = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: index * 0.2 },
  },
});

// Experience Card Component
const ExperienceCard: React.FC<{
  experience: ExperienceData;
  index: number;
}> = ({ experience, index }) => {
  const IconComponent = experience.icon;

  return (
    

    <motion.div
      variants={cardVariant(index)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <VerticalTimelineElement
        contentStyle={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          color: "#374151",
          borderRadius: "24px",
          padding: "24px",
          border: "1px solid rgba(229, 231, 235, 0.3)",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgba(255, 255, 255, 0.95)",
        }}
        date={
          <motion.div
            className="flex flex-col items-start space-y-2 px-3 py-2 sm:px-4 sm:py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-indigo-500" />
              <span className="text-xs sm:text-sm">{experience.date}</span>
            </div>
            {experience.location && (
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="w-3 h-3" />
                <span>{experience.location}</span>
              </div>
            )}
          </motion.div> as unknown as string
        } 
        iconStyle={{
          background: experience.iconBg,
          border: "4px solid white",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
          width: "60px",
          height: "60px",
        }}
        icon={
          <motion.div
            className="flex justify-center items-center w-full h-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <IconComponent size={24} className="text-white drop-shadow-sm" />
          </motion.div>
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="dark:text-white"
        >
          <div className="mb-4 sm:mb-6">
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2"
              whileHover={{ color: "#6366f1" }}
            >
              {experience.title}
            </motion.h3>
            <motion.p
              className="text-indigo-600 dark:text-indigo-400 text-sm sm:text-base lg:text-lg font-semibold flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
            >
              <span>@</span>
              <span>{experience.company_name}</span>
            </motion.p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {experience.points.map((point: string, pointIndex: number) => (
              <motion.div
                key={`experience-point-${pointIndex}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: pointIndex * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 group"
              >
                <motion.div
                  className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mt-2 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                />
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </VerticalTimelineElement>
    </motion.div>

  );
};

// Main Experience Component
const Experience: React.FC = () => {
  return (
    <section
      id="Experience"
      className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
            <span className="text-sm sm:text-base text-indigo-700 dark:text-indigo-300 font-medium">
              Professional Journey
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-900 dark:from-white dark:via-indigo-300 dark:to-purple-300 bg-clip-text text-transparent mb-4 sm:mb-6">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            My professional journey through various roles, from mobile
            development to full-stack engineering. Each experience has shaped my
            expertise and passion for building exceptional digital solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Custom styles for dark mode timeline */}
          <style>{`
            .vertical-timeline::before {
              background: linear-gradient(
                to bottom,
                #6366f1,
                #8b5cf6,
                #a855f7
              ) !important;
            }
            .dark .vertical-timeline-element-content {
              background: rgba(31, 41, 55, 0.95) !important;
              color: #f9fafb !important;
              border: 1px solid rgba(75, 85, 99, 0.3) !important;
            }
            .dark .vertical-timeline-element-content-arrow {
              border-right: 7px solid rgba(31, 41, 55, 0.95) !important;
            }
            @media (max-width: 1170px) {
              .vertical-timeline-element-date {
                display: block !important;
                float: none !important;
                color: #6b7280 !important;
                margin-top: 1rem !important;
                position: relative !important;
                padding: 0 !important;
              }
              .dark .vertical-timeline-element-date {
                color: #9ca3af !important;
              }
            }
          `}</style>

          <VerticalTimeline lineColor="linear-gradient(to bottom, #6366f1, #8b5cf6, #a855f7)">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
