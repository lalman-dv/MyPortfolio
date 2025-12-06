import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SKILL_CATEGORY, TECH_STACK } from "../utils/data";
import {
  containerVariants,
  itemVariants,
  textVariants,
} from "../utils/variants";
const Skills = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skillBarVariants: Variants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };
  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Elements */}

      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-300"
          }`}
        />
      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}

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
            Skills and Learning
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            My Toolkit &
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium ml-2">
              Technologies
            </span>
          </motion.h2>
          <motion.p
            variants={textVariants}
            className={`text-lg max-w-2xl mx-auto font-light ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            As an aspiring frontend engineer, I’ve built a strong foundation in
            modern web technologies. My focus is on creating responsive,
            user‑friendly applications while continuously learning and expanding
            my skillset to grow into a professional developer.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          {SKILL_CATEGORY.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                  : "bg-white/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              {/* Category Header */}

              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl mr-4 ${
                    theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                  }`}
                >
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{category.title}</h3>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600 "
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span
                        className={`text-xs ${
                          theme === "dark" ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                        className={`h-full rounded-full relative ${skill.color}`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
              
            </motion.div>
          ))}
          
        </motion.div>

        

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-medium mb-4"
          >
            Also Working With
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.span
                key={tech.name}
                whileHover={{ y: -2, scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border transition-all duration-200 ${
                  theme === "dark"
                    ? " bg-gray-900 border-gray-700 hover:border-gray-500"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-500"
                }`}
              >
                {tech.icon && <tech.icon className={tech.color} size={18} />}
                {tech.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
