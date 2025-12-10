import { useState, useRef, type FormEvent } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Send } from "lucide-react";
import { CONTACT_INFO, SOCIAL_LINKS } from "../utils/data";
import { containerVariants, itemVariants } from "../utils/variants";
import TextInput from "./TextInput";
import SuccessModel from "./SuccessModel";

type FormKeys = "name" | "email" | "message";

interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactSection = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const handleInputChange = (key: FormKeys, value: string) => {
    setFormData({ ...formData, [key]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    //simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    //Auto Hide success modal after 3 sec
    setTimeout(() => setShowSuccess(false), 3000);
  };
  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 transition-colors duration-500 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Element */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full opacity-5 ${
            theme === "dark" ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 h-80 w-80 rounded-full blur-3xl opacity-5 ${
            theme === "dark" ? "bg-purple-500" : "bg-purple-400"
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
            className={`text-sm uppercase tracking-widest ${
              theme === "dark" ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Let's connect
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get in{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Touch
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I'm always open to discuss new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            using the form below or through my social media channels.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <TextInput
                    theme={theme}
                    value={formData.name}
                    handleInputChange={(text: string) =>
                      handleInputChange("name", text)
                    }
                    label="Your Name"
                  />
                  <TextInput
                    theme={theme}
                    value={formData.email}
                    handleInputChange={(text: string) =>
                      handleInputChange("email", text)
                    }
                    label="Email Address"
                  />
                </div>
                <TextInput
                  theme={theme}
                  value={formData.message}
                  textarea
                  handleInputChange={(text: string) =>
                    handleInputChange("message", text)
                  }
                  label="Your Message"
                />

                <motion.button
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700  disabled:from-blue-400 disabled:to-purple-400  text-white py-4 rounded-xl uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2  "
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Info & Social Links */}

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Contact information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <motion.div
                    key={info.label}
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
                      <info.icon size={20} className="text-blue-500" />
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-500" : "text-gray-600"
                      }`}
                    >
                      {info.label}
                    </div>
                    <div className="font-medium">{info.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                        : "bg-white/80 border-gray-200 hover:border-gray-300"
                    } ${social.bgColor} ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${
                theme === "dark"
                  ? "bg-green-500/10 border-green-500/20"
                  : "bg-green-50 border-green-200"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-500">
                  Available for Work
                </span>
              </div>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm currently available for freelance project and full-time
                opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`max-w-2xl max-auto p-8 rounded-2xl text-sm border ${
              theme === "dark"
                ? "tbg-gray-800 border-gray-700"
                : "bg-gray-50/50 border-gray-200"
            }`}
          >
            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
            <p
              className={`mb-6 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sometime a conversation is worth a thousand messages . Feel free
              to reach out via email or social media to schedule a call. I'm
              happy to discuss your project needs and how I can help.
            </p>
            <motion.button
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white`}
            >
              Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <SuccessModel
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        theme={theme}
      />
    </section>
  );
};
export default ContactSection;
