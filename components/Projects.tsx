"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeInOut } from "framer-motion";
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    id: 1,
    title: "Cyber Threat Intelligence Platform",
    description: "A full-stack, real-time system that detects cyber threats, scams, and fake links through AI models and user reports. Features include document/image scam detection, global threat heatmaps, real-time alerting, and a personalized dashboard.",
    image: "/cybersecurity-professional-work.jpg",
    tech: ["FastAPI", "React", "MongoDB", "AI/ML", "Blockchain", "Cloud Hosting"],
    github: "https://github.com/shahinakt/threatfusion_ai",
    demo: "https://cyber-threat-demo.vercel.app",
    category: "Cybersecurity"
  },
  {
    id: 2,
    title: "Early Disease Predictor System",
    description: "An AI-driven healthcare tool that predicts early symptoms of diseases based on user input. Uses ML classification on patient data and symptom patterns for prediction and prevention suggestions.",
    image: "/face-recognition-personal-identification-collage.jpg",
    tech: ["Python", "Sklearn", "Pandas", "FastAPI", "React"],
    github: "https://github.com/shahinakt/Early_disease_predictor",
    demo: "https://early-disease-predictor.vercel.app",
    category: "Healthcare"
  },
  {
    id: 3,
    title: "Blockchain-Based Voice Login System",
    description: "A biometric login system where users authenticate using their voice. Extracted voiceprints are hashed and stored securely on the Ethereum blockchain, ensuring tamper-proof authentication.",
    image: "/10131.jpg",
    tech: ["Librosa", "MFCC", "Deep Learning", "Solidity", "Ethereum", "FastAPI", "React"],
    github: "https://github.com/shahinakt/Blockchain_based_voice_login",
    demo: "https://voice-login-demo.vercel.app",
    category: "Blockchain"
  },
  {
    id: 4,
    title: "AI-Based CCTV Abuse Detection System",
    description: "AI surveillance system that analyzes live or recorded CCTV feeds to detect violence, thefts, falls, or crowd surges in real time. Sends automated alerts to authorities via a dashboard.",
    image: "/cctv-security-technology-with-lock-icon-digital-remix.jpg",
    tech: ["YOLOv8", "MediaPipe", "OpenCV", "FastAPI", "React"],
    github: "https://github.com/shahinakt/AI_based_cctv_abuse_detection",
    demo: "https://ai-cctv.vercel.app",
    category: "Computer Vision"
  },
  {
    id: 5,
    title: "Missing Person and Identity Finder",
    description: "Privacy-focused tool where users upload a selfie or enter their name to check where it appears online. Uses face recognition + web scraping to detect impersonation or identity misuse across platforms.",
    image: "/4151253.jpg",
    tech: ["DeepFace", "spaCy", "Transformers", "Puppeteer", "SerpAPI", "FastAPI", "React", "MongoDB"],
    github: "https://github.com/shahinakt/missing_person_and_identity_finder",
    demo: "https://identity-finder.vercel.app",
    category: "OSINT/Privacy"
  },
  {
    id: 6,
    title: "ML Image Classifier",
    description: "Deep learning model for image classification with real-time prediction capabilities and model performance analytics.",
    image: "/images.jpg",
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    github: "https://github.com/shahinakt/ML_image_classifier",
    demo: "https://ml-classifier-demo.streamlit.app",
    category: "AI/ML"
  },
  {
    id: 7,
    title: "ML Object Identification System",
    description: "A machine learning model trained to identify and label multiple real-world objects in images or video streams using real-time processing and bounding boxes.",
    image: "/close-up-woman-working-digital-monitors.jpg",
    tech: ["Python", "TensorFlow", "YOLOv5", "OpenCV", "Streamlit"],
    github: "https://github.com/shahinakt/ML_object_identification_system",
    demo: "https://object-id-demo.streamlit.app",
    category: "Computer Vision"
  },
  {
    id: 8,
    title: "Auto Call Rejector with Smart Response",
    description: "AI-powered mobile automation system that screens calls and auto-responds with 'The number you are dialing is currently unavailable' to blacklisted or low-priority numbers.",
    image: "/woman-using-mobile-while-car.jpg",
    tech: ["Flutter", "Firebase", "ML Kit", "Android"],
    github: "https://github.com/shahinakt/Auto_call_rejector_with_smart_response",
    demo: "https://callblocker-demo.vercel.app",
    category: "Mobile Development"
  },
  {
    id: 9,
    title: "Google Maps Advanced Timeline Tracker",
    description: "Augments Google Maps timeline with AI-based location summaries, activity tracking, and visual analytics.",
    image: "/2535487.jpg",
    tech: ["Google Maps API", "React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/shahinakt/Google_map_advanced_version",
    demo: "https://smartmaps.vercel.app",
    category: "Productivity"
  },
  {
    id: 10,
    title: "AI Project Builder",
    description: "No-code platform that auto-generates project ideas and structures based on selected technologies or domains using OpenAI.",
    image: "/person-working-html-computer.jpg",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Tailwind", "Vercel"],
    github: "https://github.com/shahinakt/AI_project_builder",
    demo: "https://projectbuilder.vercel.app",
    category: "Full Stack"
  },
  {
    id: 11,
    title: "AI Resume ATS Checker",
    description: "Resume analyzer that checks for ATS compatibility, highlights gaps, and recommends role-specific improvements.",
    image: "/resume-apply-work-form-concept.jpg",
    tech: ["Python", "NLP", "Spacy", "Streamlit", "PDF Parsing"],
    github: "https://github.com/shahinakt/AI_resume_ATS_checker",
    demo: "https://ats-checker.streamlit.app",
    category: "Career Tools"
  },
  {
    id: 12,
    title: "Smart Document Converter",
    description: "Converts PDFs, DOCX, TXT, RTF, ODT, and Markdown with preserved formatting. Supports batch and auto summarization.",
    image: "/2916138.jpg",
    tech: ["Python", "pypandoc", "PyPDF2", "Streamlit"],
    github: "https://github.com/shahinakt/smart_document_convertor",
    demo: "https://smart-doc-converter.streamlit.app",
    category: "Productivity"
  },
  {
    id: 13,
    title: "Image to Text Generator",
    description: "Extracts and cleans text from images using OCR and NLP. Supports multiple languages and summary view.",
    image: "/2947690.jpg",
    tech: ["Python", "Tesseract", "EasyOCR", "Streamlit"],
    github: "https://github.com/shahinakt/Image_to_text_generator",
    demo: "https://img-text-ai.streamlit.app",
    category: "AI/ML"
  },
  {
    id: 14,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with Next.js and Tailwind CSS. Features animations, dark mode, project filtering, and mobile-friendly design.",
    image: "/Screenshot 2025-08-07 193506.png",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/shahinakt/personal_portfolio_website",
    demo: "https://www.shahinasareen.tech",
    category: "Web Development"
  }
];

const categories = ["All", "Full Stack", "Web Development", "AI/ML", "Cybersecurity", "Blockchain", "Computer Vision", "Healthcare", "OSINT/Privacy", "Productivity", "Career Tools", "Mobile Development"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: easeInOut
    }
  }
};

const filterVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.05
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut
    }
  }
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 lg:py-20 min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 lg:mb-4">Featured Projects</h2>
          <motion.p 
            variants={titleVariants}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            A showcase of my work across different domains and technologies
          </motion.p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={filterVariants}
          className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8 lg:mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="px-4 lg:px-6 py-2 transition-all duration-300 text-xs lg:text-sm rounded-full"
                size="sm"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid - Mobile: 1, Tablet: 2, Desktop: 3 */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeCategory}-${project.id}`}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/30 hover:border-border/60 rounded-xl">
                  
                  {/* Image with Overlay Content */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Title and Tech Tags Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      
                      {/* Title */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="mb-3"
                      >
                        <h3 className="text-lg lg:text-xl font-semibold text-white leading-tight">
                          {project.title}
                        </h3>
                      </motion.div>
                      
                      {/* Tech Tags below Title */}
                      <motion.div 
                        className="flex flex-wrap gap-1.5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                      >
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + techIndex * 0.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                        {project.tech.length > 3 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-white/20 backdrop-blur-sm text-white border-white/30"
                            >
                              +{project.tech.length - 3}
                            </Badge>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Content - Description */}
                  <CardContent className="p-5">
                    <motion.p 
                      className="text-sm text-muted-foreground leading-relaxed line-clamp-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      {project.description}
                    </motion.p>
                  </CardContent>
                  
                  {/* Footer - Action Buttons */}
                  <CardFooter className="p-5 pt-0 flex gap-3">
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full transition-all duration-300 hover:bg-accent/50 rounded-lg"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    
                    <motion.div 
                      className="flex-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                    >
                      <Button
                        size="sm"
                        className="w-full transition-all duration-300 rounded-lg"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
