import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Mail, Heart, Code2, ArrowUp } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { itemVariants, containerVariants } from "../utils/variants";

const Footer = () => {
  const { theme } = useTheme();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll();
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sociaLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/lalman-dv",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIN",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/lalman-lalman-34490a163/",
      color: "hover:text-blue-400",
    },
    {
      name: "X (Twitter)",
      icon: FaXTwitter,
      url: "https://x.com/imchaudhary2",
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:lalman.dev7@gmail.com",
      color: "hover:text-red-300",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Animatd gradient line component
  const AnimatedGradientLine = () => (
    <div className="absolute top-0 left-0 w-full h-px overflow-hidden">
      <motion.div
        className={`h-px w-full bg-linear-to-r from-blue-500 to-purple-500`}
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "100%", opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-0 h-px bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 blur-sm`}
        animate={{
          x: ["-50%", " calc(100vw + 50%)"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6,
            ease: "linear",
            delay: 1,
          },
        }}
      />
    </div>
  );

  return (
    <footer
      ref={footerRef}
      className={`relative ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }overflow-hidden`}
    >
      {/* Animated gradient line */}
      <AnimatedGradientLine />
      {/* Background elements */}
      <motion.div
        style={{ y: scrollY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute bottom-10 left-1/4 w-full h-64 rounded-full blur-3xl opacity-5 bg-linear-to-r from-purple-500 via-cyan-400 to-blue-500" />
        <div
          className={`absolute top-10 right-1/3 w-full h-48 rounded-full blur-3xl opacity-5 bg-linear-to-r ${
            theme === "dark" ? "from-white" : "from-blue-500"
          } via-purple-500 to-pink-500`}
        />
      </motion.div>

      <div className="raltive z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content  */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center space-y-8"
          >
            {/* Logo  */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center space-x-2 text-2xl font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-blue-600"
                >
                  <Code2 size={28} />
                </motion.div>
                <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium ml-2">
                  Lalman
                </span>
              </motion.div>
              <motion.p
                variants={itemVariants}
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                } max-w-md mx-auto`}
              >
                Designing digital experiences with passion, precision, and a
                hint of magic.
              </motion.p>
            </motion.div>
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              {sociaLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-700/50 hover:bg-gray-600/50"
                      : "bg-gray-300/50 hover:bg-gray-400/50"
                  } ${social.color} backdrop-blur-sm `}
                  whileHover={{ scale: 1.2, y: -2, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Footer Bottom  */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-4"
            >
              <div
                className={`h-px w-26 ${
                  theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                } `}
              />
              <motion.div
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-300"
              >
                <Heart size={16} fill="currentColor" />
              </motion.div>
              <div
                className={`h-px w-26 ${
                  theme === "dark" ? "bg-gray-600" : "bg-gray-300"
                } `}
              />
            </motion.div>
            {/* Copyright */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                © {new Date().getFullYear()} Lalman.
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Crafted with React, TypeScript, Motion & Tailwind · Designed
                with vision
              </p>
            </motion.div>

            {/* Back to top Button  */}
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToTop}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                theme === "dark"
                  ? "bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white"
                  : "bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 hover:text-gray-900"
              } backdrop-blur-sm border ${
                  theme === "dark" ? "border-gray-700" : "border-gray-300"
                }`}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                  boxShadow:
                    theme === "dark"
                      ? "0 10px 25px rgba(59, 130 , 246, 0.15)"
                      : "0 10px 25px rgba(59, 130 , 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
