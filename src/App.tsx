import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <AboutMe />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
