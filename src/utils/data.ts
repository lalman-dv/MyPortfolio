import {
  Code2,
  GraduationCap,
  Briefcase,
  Heart,
  Coffee,
  BookOpen,
  Mail,
  MapPin,
  Phone,
  Server,
  Wrench,
  Users,
  User,
  Rocket,
  ChevronsLeftRightEllipsis,
} from "lucide-react";

import project1 from "../assets/hackernews.png";
import project3 from "../assets/interviewapp.png";
import project2 from "../assets/resumeBuilder.png";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { VscRocket } from "react-icons/vsc";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";

// -------------------- Interfaces --------------------

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tag: string[];
  liveUrl: string;
  gitHubUrl: string;
  category: string;
  featured?: boolean;
  image: string;
}

export interface TechItem {
  name: string;
  icon?: IconType | LucideIcon;
  color: string;
}

export interface JourneyStep {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Passion {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SocialLinks {
  name: string;
  icon: IconType;
  url: string;
  color: string;
  bgColor: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}
// -------------------- Data --------------------

export const SKILL_CATEGORY: SkillCategory[] = [
  {
    title: "Front-end",
    icon: Code2,
    description: "Crafting beautiful, responsive interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-600" },
      { name: "TypeScript", level: 85, color: "bg-blue-700" },
      { name: "NextJS", level: 90, color: "bg-gray-500" },
      { name: "TailwindCSS", level: 92, color: "bg-cyan-600" },
      { name: "FramerMotion", level: 82, color: "bg-red-600" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description:
      "While my primary focus is frontend, I’m also exploring backend tools to understand full‑stack development",
    skills: [
      { name: "Node.js", level: 70, color: "bg-green-600" },
      { name: "Express.js", level: 55, color: "bg-gray-700" },
      { name: "MongoDB", level: 60, color: "bg-green-800" },
      { name: "Firebase", level: 50, color: "bg-yellow-500" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    description: "Working with modern development and collaboration tools",
    skills: [
      { name: "Git", level: 85, color: "bg-orange-600" },
      { name: "GitHub", level: 88, color: "bg-gray-800" },
      { name: "VS Code", level: 90, color: "bg-blue-500" },
      { name: "Figma", level: 75, color: "bg-pink-500" },
      { name: "Notion", level: 70, color: "bg-gray-500" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    description: "Personal qualities that support teamwork and growth",
    skills: [
      { name: "Problem Solving", level: 85, color: "bg-indigo-600" },
      { name: "Communication", level: 80, color: "bg-purple-500" },
      { name: "Adaptability", level: 78, color: "bg-teal-500" },
      { name: "Collaboration", level: 82, color: "bg-pink-400" },
      { name: "Continuous Learning", level: 90, color: "bg-green-500" },
    ],
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },

  { name: "Vite", icon: VscRocket, color: "text-purple-500" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "HackerNews Portal",
    image: project1,
    description:
      "A modern HackerNews web built with React, TailwindCSS, and Framer Motion for dynamic UI.",
    tag: ["React", "TailwindCSS", "FramerMotion", "HackerNews API"],
    liveUrl: "#",
    gitHubUrl: "#",
    category: "FrontEnd",
    featured: true,
  },
  {
    id: 2,
    title: "AI Resume Studio",
    image: project2,
    description:
      "An all-in-one AI-powered platform to create professional resumes and instantly rate them against industry standards.",
    tag: ["React", "TailwindCSS", "TypeScript", "FramerMotion", "OpenAI API"],
    liveUrl: "#",
    gitHubUrl: "#",
    category: "AI Tools",
    featured: true,
  },
  {
    id: 3,
    title: "AI Interview Prep",
    image: project3,
    description:
      "An intelligent app that helps users practice interviews with AI-generated questions, feedback, and performance insights.",
    tag: ["React", "TailwindCSS", "TypeScript", "FramerMotion", "OpenAI API"],
    liveUrl: "#",
    gitHubUrl: "#",
    category: "AI Tools",
    featured: true,
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    year: "early 2025",
    title: "Started exploring coding journey",
    company: "self-taught",
    description:
      "Began experimenting with HTML out of curiosity and quickly discovered a passion for building on the web, inspiring a decision to pursue coding full-time.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "mid 2025",
    title: "Frontend development journey",
    company: "self-taught",
    description:
      "Started Transitioning into structured learning with React, TypeScript, and TailwindCSS, focusing on creating responsive interfaces and modern web applications.",
    icon: GraduationCap,
    color: "bg-pink-500",
  },
  {
    year: "late 2025",
    title: "Making projects",
    company: "community",
    description:
      "Started making projects and gaining experience in code, issue tracking, and  problem-solving.",
    icon: ChevronsLeftRightEllipsis,
    color: "bg-purple-500",
  },
  {
    year: "late 2025",
    title: "Portfolio & Personal Branding",
    company: "self-taught",
    description:
      "Built and refined a personal portfolio from scratch, emphasizing accessibility, recruiter appeal, and cohesive branding with custom thumbnails, gradients, and a unique 'L' logo.",
    icon: User,
    color: "bg-blue-500",
  },
  {
    year: "future",
    title: "Professional Opportunities",
    company: "aspiring",
    description:
      "Looking forward to apply my skills in real-world projects, joining a team where I can grow as a frontend developer, and continue crafting meaningful digital experiences.",
    icon: Rocket,
    color: "bg-yellow-500",
  },
];

export const PASSION: Passion[] = [
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Designing clean, intuitive interfaces that delight users and enhance usability.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description:
      "Transforming complex challenges into simple, elegant, and practical solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Exploring new technologies and best practices to stay adaptable and innovative.",
  },
];

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/lalman-dv",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/lalman-lalman-34490a163/",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-100",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/imchaudhary2",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-100",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:lalman.dev7@gmail.com",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-100",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Uttar Pradesh, INDIA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lalman.dev7@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8858274145",
  },
];
