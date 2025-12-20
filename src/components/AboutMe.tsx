import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { JOURNEY_STEPS, PASSION } from "../utils/data";

import {
  containerVariants,
  itemVariants,
  timelineVariants,
  stepVariants,
} from "../utils/variants";

const AboutMe = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
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
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest mb-6 ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium ml-2">
              Me
            </span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* My Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-6">
                My
                <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium ml-2">
                  Goal
                </span>
              </h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Technology, to me, is a bridge between people and solutions. My
                passion lies in designing digital experiences that go beyond
                utility, making them delightful, meaningful, and accessible to
                all.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Beyond coding, I'm passionate about experimenting with emerging
                frameworks and supporting open-source communities. The constant
                evolution of web technologies inspires me to create digital
                experiences that are both meaningful and innovative.
              </p>
            </motion.div>

            {/* What i love making */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-medium mb-6">
                <div className="grid gap-4">
                  {PASSION.map((passion) => (
                    <motion.div
                      key={passion.title}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className={`flex items-center space-x-4 p-4 rounded-xl ${
                        theme === "dark"
                          ? "bg-gray-800/30 hover:bg-gray-800/50"
                          : "bg-gray-50/50 hover:bg-gray-100/50"
                      } transition-all duration-300`}
                    >
                      <div
                        className={`p-3 rounded-lg ${
                          theme === "dark" ? "bg-gray-700" : "bg-white"
                        }`}
                      >
                        <passion.icon size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">{passion.title}</h4>
                        <p
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {passion.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </h3>
            </motion.div>

            {/* signature */}
            <motion.div variants={itemVariants} className="text-center mt-15">
              <div
                className={`text-sm mb-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Made with vision and purpose by
              </div>
              <div className="text-xl bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium ">
                Lalman
              </div>
            </motion.div>
          </motion.div>

          {/* Developer Journey Timeline */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={timelineVariants}
            className="relative "
          >
            <h3 className="text-2xl font-medium my-8 ml-8 text-center lg:text-left">
              My developer Journey
            </h3>
            {/* Timeline  */}
            <div
              className={`absolute left-8 top-16 bottom-0 w-px ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              }`}
            />
            <div className="space-y-8">
              {JOURNEY_STEPS.map((step) => (
                <motion.div
                  key={step.year}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className="relative flex items-start space-x-6 group"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon size={24} className="text-white" />
                  </div>
                  {/* content*/}
                  <div
                    className={`grow p-6 rounded-xl border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                        : "bg-white border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                    }
                  backdrop-blur-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium">{step.title}</h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      } mb-3`}
                    >
                      {step.company}
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-6"
          >
            <p
              className={`text-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to bring your vision to reality?
            </p>
            <motion.button
              onClick={() =>
                (window.location.href = "mailto:lalman.dev7@gmail.com")
              }
              type="button"
              aria-label="Start collaboration"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-cyan-400 via-blue-600 to-purple-600 text-white hover:from-cyan-500 hover:to-purple-500 px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
            >
              Let's build something great together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
