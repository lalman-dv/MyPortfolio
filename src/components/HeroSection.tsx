import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "./../context/ThemeContext";
import PROFILE_PIC from "/src/assets/profilePIc.jpeg";
import {
  containerVariants,
  imageVariants,
  itemVariants,
  textVariants,
} from "../utils/variants";

const HeroSection = () => {
  const { theme } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-300"
            }`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${
              theme === "dark" ? "bg-purple-500" : "bg-purple-300"
            }`}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile Image - Mobile */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                    }}
                    className={`z-10 absolute w-full h-32 rounded-2xl overflow-hidden border-4 ${
                      theme === "dark" ? "border-gray-800" : " border-gray-300"
                    } shadow-2xl`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="Profile_pic"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Decorative Rings */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute -inset-5 rounded-2xl border ${
                      theme === "dark"
                        ? "border-blue-600/40"
                        : "text-pink-400/40"
                    }`}
                  />
                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute -inset-5 rounded-2xl border ${
                      theme === "dark"
                        ? "border-pink-400/40"
                        : "text-blue-600/40"
                    }`}
                  />
                </div>
              </motion.div>
              {/* Content - Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Frontend Engineer
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Crafting digital
                </span>
                <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium ml-2">
                  experience
                </span>
                <br />
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  that inspire & engage
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I design and build modern , responsive web applications that
                blends clean aesthetics with seamless user experiences.
              </motion.p>
              {/* CTA Buttons - for mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-linear-to-r from-blue-400 to-pink-400 hover:bg-blue-400 hover:from-blue-500 hover:to-pink-500 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection("contact")}
                  className={`px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 border ${
                    theme === "dark"
                      ? "border-gray-700 hover:border-gray-500 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social Links - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  { icon: FiGithub, href: "#" },
                  { icon: FiLinkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
              {/* Tech Stack - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
              >
                <span
                  className={
                    theme === "dark" ? "text-gray-600" : "text-gray-500"
                  }
                >
                  React
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-700" : "text-gray-400"
                  }
                >
                  .
                </span>

                <span
                  className={
                    theme === "dark" ? "text-gray-600" : "text-gray-500"
                  }
                >
                  NextJS
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-700" : "text-gray-400"
                  }
                >
                  .
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-600" : "text-gray-500"
                  }
                >
                  TypeScript
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-700" : "text-gray-400"
                  }
                >
                  .
                </span>
                <span
                  className={
                    theme === "dark" ? "text-gray-600" : "text-gray-500"
                  }
                >
                  Motion
                </span>
              </motion.div>
            </motion.div>
          </div>
          {/* Desktop Layout- Split */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                } mb-6`}
              >
                {" "}
                Frontend Engineer
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light leading-tight"
              >
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Crafting digital
                </span>
                <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-medium ml-2">
                  experience
                </span>
                <br />
                <span
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  that inspire & engage
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={`text-xl mb-12 font-light leading-relaxed max-w-lg  ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I design and build modern , responsive web applications that
                blends clean aesthetics with seamless user experiences.
              </motion.p>
              {/* CTA Buttons - for desktop  */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-linear-to-r from-blue-400 to-pink-400 hover:bg-blue-400 hover:from-blue-500 hover:to-pink-500 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => scrollToSection("contact")}
                  className={`px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 border ${
                    theme === "dark"
                      ? "border-gray-700 hover:border-gray-500 text-gray-300"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
              {/* Social Links - desktop */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[
                  { icon: FiGithub, href: "#" },
                  { icon: FiLinkedin, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white hover:bg-gray-800"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side -Profile Image */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Tech Stack Desktop */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-8 text-sm uppercase tracking-widest absolute -top-20 -left-21"
                >
                  <span
                    className={
                      theme === "dark" ? "text-gray-600" : "text-gray-500"
                    }
                  >
                    React
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-700" : "text-gray-400"
                    }
                  >
                    .
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-600" : "text-gray-500"
                    }
                  >
                    NextJS
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-700" : "text-gray-400"
                    }
                  >
                    .
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-600" : "text-gray-500"
                    }
                  >
                    TypeScript
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-700" : "text-gray-400"
                    }
                  >
                    .
                  </span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-600" : "text-gray-500"
                    }
                  >
                    Motion
                  </span>
                </motion.div>
                <div className="relative mr-12">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className={` relative z-10 w-80 h-96 rounded-3xl overflow-hidden border-4 ${
                      theme === "dark"
                        ? "border-gray-600"
                        : " border-gray-500/50"
                    } shadow-2xl`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="Profile_pic"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Decorative elments */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute -inset-5 rounded-3xl border ${
                      theme === "dark"
                        ? "border-blue-500/50"
                        : "text-pink-400/90"
                    }`}
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`absolute -inset-5 rounded-4xl border ${
                      theme === "dark"
                        ? "border-pink-500/30"
                        : "text-blue-400/50"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown
              size={20}
              className={theme === "dark" ? "text-gray-600" : "text-gray-400"}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
