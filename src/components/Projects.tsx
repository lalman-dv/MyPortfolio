import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Zap, Users } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS } from "../utils/data";
import ProjectCard from "./ProjectCard";
import { containerVariants, itemVariants } from "../utils/variants";

const Projects = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`py-24 px-6 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Backgroung Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            theme === "dark" ? " bg-blue-500" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            theme === "dark" ? " bg-purple-500" : "bg-purple-300"
          }`}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10 ">
        {/* Sect0in Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest mb-4 ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Notable Work
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="
        text-3xl md:text-5xl font-light mb-6"
          >
            Showcased
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium ml-2">
              Projects
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of modern web applications that demonstrate my ability to
            deliver clean, responsive designs and solve complex problems with
            practical, effective solutions.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              theme={theme}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
