import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NAV_ITEMS: string[] = ["Home", "Skills", "Work", "About", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        theme === "dark" ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        theme === "dark" ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          <Code2 size={24} className="text-blue-800" />
          <span className="text-lg ml-1 bg-linear-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
            Lalman
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <motion.button
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLocaleLowerCase())}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            </li>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </ul>
        {/* Mobile Menu Button */}
        <li className="md:hidden flex items-center space-x-4 ">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.a>
          <motion.button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </li>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              theme === "dark" ? "bg-gray-900" : " bg-white"
            } border ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <motion.a
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
