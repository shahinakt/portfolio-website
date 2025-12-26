"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './ui/dialog';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  preview?: string;
  video?: string;
  category: string[] | string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Threat Intelligence With Chatbot Integration",
    description: "A full-stack, real-time system that detects cyber threats, scams, and fake links through AI models and user reports. Features include document/image scam detection, global threat heatmaps, real-time alerting, and a personalized dashboard.",
    image: "/cybersecurity-professional-work.jpg",
    tech: ["FastAPI", "React", "MongoDB", "AI/ML", "Blockchain", "Cloud Hosting"],
  github: "https://github.com/shahinakt/cyber_threat_intelligence",
  demo: "cyber_threat_intel.mp4",
  category: ["Full Stack", "AI/ML", "Cybersecurity", "Blockchain"]
  },
  {
    id: 2,
  title: "Disease Predictor with Chatbot Integration",
  description: "An AI-driven healthcare tool that predicts symptoms of diseases based on user input. Uses ML classification on patient data and symptom patterns for prediction and prevention suggestions.",
  image: "/face-recognition-personal-identification-collage.jpg",
  tech: ["Python", "Sklearn", "Pandas", "FastAPI", "React"],
  github: "https://github.com/shahinakt/Early_disease_predictor",
  demo: "early_disease_predictor.mp4",
    category: ["Full Stack", "AI/ML", "Healthcare"]
  },
  {
    id: 3,
    title: "AI-Based CCTV Multi Detection System",
    description: "AI surveillance system that analyzes live or recorded CCTV feeds to detect violence, thefts, falls, or Accidents in real time. Sends automated alerts to authorities via a dashboard and mobile app.",
    image: "/cctv-security-technology-with-lock-icon-digital-remix.jpg",
    tech: ["YOLOv8", "MediaPipe", "OpenCV", "FastAPI", "React", "Firebase", "AWS", "React Native"],
    github: "https://github.com/shahinakt/AI_based_cctv_multi_detection",
    demo: "cctv.mp4",
    category: ["Full Stack", "AI/ML", "Computer Vision", "Mobile Development", "Cybersecurity", "Blockchain"]
  },
  {
    id: 4,
    title: "Name Face Identity Finder",
    description: "A sophisticated full-stack application that enables users to search for digital footprints and public information using either a person's name or facial recognition technology. Built with modern web technologies and AI-powered face detection capabilities.",
    image: "/4151253.jpg",
    tech: ["FastAPI", "DeepFace", "TensorFlow", "OpenCV", "spaCy", "Transformers", "BeautifulSoup4", "Pillow", "Next.js", "Tailwind CSS"],
    github: "https://github.com/shahinakt/Name_face_identity_finder",
    demo: "ídentityy.mp4",
    category: ["OSINT/Privacy", "AI/ML", "Computer Vision"]
  },
  {
    id: 5,
    title: "ML Plant Image Classifier",
    description: "Plant Identifier is a machine learning-powered web app that identifies plants from uploaded images using TensorFlow.js + MobileNet. It provides real-time classification with confidence scores, supports dark mode, and features a responsive, fast-loading design built with React, Vite, and Tailwind CSS.",
    image: "/images.jpg",
    tech: ["React", "Vite", "TensorFlow.js", "MobileNet", "JavaScript"],
  github: "https://github.com/shahinakt/ML_plant_image_classifier",
  demo: "/plant.mp4",
  category: ["AI/ML", "Web Development"]
  },
  
  {
    id: 6,
    title: "Auto Call Rejector with Smart Response",
    description: "Native Android app that automatically screens and rejects calls from blacklisted or low-priority numbers, using Kotlin, Jetpack Compose, and Room (SQLite) for data storage.",
    image: "/woman-using-mobile-while-car.jpg",
    tech: ["Kotlin", "Android Studio", "Jetpack Compose", "Room (SQLite)", "Android"],
    github: "https://github.com/shahinakt/Auto_call_rejector_with_smart_response",
    demo: "acr.mp4",
    category: ["Mobile Development"]
  },
  
  {
    id: 7,
    title: "AI Project Builder",
    description: "No-code platform that auto-generates project ideas and structures based on selected technologies or domains using OpenAI.",
    image: "/person-working-html-computer.jpg",
    tech: ["Next.js", "React", "OpenAI API", "Tailwind"],
  github: "https://github.com/shahinakt/AI_project_builder",
  demo: "/pr.mp4",
  category: ["Web Development", "AI/ML"]

  },
  {
    id: 8,
    title: "AI Resume ATS Checker",
    description: "Resume analyzer that checks for ATS compatibility, highlights gaps, and recommends role-specific improvements.",
    image: "/resume-apply-work-form-concept.jpg",
    tech: ["Python", "FastAPI", "NLP", "spaCy", "Streamlit", "PyMuPDF", "PDF Parsing", "React", "Vite", "Tailwind CSS", "Framer Motion", "OpenAI API"],
  github: "https://github.com/shahinakt/AI_resume_ATS_checker",
  demo: "/ats.mp4",
  category: ["Web Development", "AI/ML", "Career Tools"]
  },
  {
    id: 9,
    title: "Smart Document Converter",
    description: "Converts PDFs, DOCX, TXT, RTF, ODT, and Markdown with preserved formatting. Supports batch and auto summarization.",
    image: "/2916138.jpg",
    tech: ["Python", "pypandoc", "PyPDF2", "Streamlit"],
  github: "https://github.com/shahinakt/universal_file_convertor_pro",
  demo: "/doc.mp4",
  category: ["Web Development", "Productivity"]
  },
  {
    id: 10,
    title: "Image to Text Generator",
    description: "Extracts and cleans text from images using OCR and NLP with GPU acceleration. Supports multiple languages and summary view.",
    image: "/2947690.jpg",
    tech: ["FastAPI", "Python", "EasyOCR", "Transformers", "PyTorch", "Pillow", "React", "JavaScript", "CSS3", "jsPDF"],
  github: "https://github.com/shahinakt/Image_to_text_generator",
  demo: "/img.mp4",
  category: ["AI/ML", "Web Development", "Computer Vision"]
  },
  {
    id: 11,
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
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    transition: {
      duration: 0.3
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
      duration: 0.6
    }
  }
};

export function Projects() {
  const normalizeAssetPath = (p?: string | null) => {
    if (!p) return '';
    if (/^https?:\/\//i.test(p)) return p;
    const cleaned = p.replace(/^\/+/, '');
    return '/' + encodeURI(cleaned);
  };

  const [activeCategory, setActiveCategory] = useState('All');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string | null>(null);
  const [currentVideoPoster, setCurrentVideoPoster] = useState<string | null>(null);
  const [currentFullVideoSrc, setCurrentFullVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const preloaded = useRef<Record<string, boolean>>({});

  const warmCacheRange = (url?: string) => {
    if (!url) return;
    try {
      const nav = (navigator as unknown) as { connection?: { effectiveType?: string; saveData?: boolean } };
      const effective = nav?.connection?.effectiveType;
      const saveData = nav?.connection?.saveData;
      if (saveData || (effective && /2g|slow-2g|3g/i.test(effective))) return;

      fetch(url, { headers: { Range: 'bytes=0-200000' }, method: 'GET', cache: 'force-cache' })
        .catch(() => {});
    } catch {}
  };
  
  useEffect(() => {
    const preloadCount = 3;
    projects.slice(0, preloadCount).forEach((p) => {
      const candidate = p.video ?? p.demo;
      if (!candidate) return;
      const href = normalizeAssetPath(candidate);
      if (preloaded.current[href]) return;
      if (/\.(mp4|webm)$/i.test(href)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'video';
        link.href = href;
        link.type = 'video/mp4';
        document.head.appendChild(link);
        preloaded.current[href] = true;
      }
    });
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

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
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/30 hover:border-border/60 rounded-xl">
                  
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
                    
                    <div className="absolute inset-0 p-4 flex flex-col justify-end">
                      
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
                          onMouseEnter={() => {
                            const candidate = project.video ?? project.demo;
                            const href = normalizeAssetPath(candidate);
                            if (candidate && !preloaded.current[href]) {
                              const link = document.createElement('link');
                              link.rel = 'preload';
                              link.as = 'video';
                              link.href = href;
                              link.type = 'video/mp4';
                              document.head.appendChild(link);
                              preloaded.current[href] = true;
                            }
                          }}
                          onClick={() => {
                            const isVideoFile = (s?: string | null) => !!s && /\.(mp4|webm)$/i.test(s);
                            const candidate = project.video ?? project.demo ?? null;
                            if (candidate && isVideoFile(candidate)) {
                              const fullSrc = normalizeAssetPath(candidate);
                              const previewCandidate = project.preview ?? null;
                              const previewSrc = previewCandidate ? normalizeAssetPath(previewCandidate) : null;

                              warmCacheRange(fullSrc);

                              if (previewSrc) {
                                setCurrentFullVideoSrc(fullSrc);
                                setCurrentVideoSrc(previewSrc);
                              } else {
                                setCurrentFullVideoSrc(null);
                                setCurrentVideoSrc(fullSrc);
                              }
                              setCurrentVideoPoster(project.image ?? null);
                              setIsVideoOpen(true);
                            } else if (project.demo) {
                              const href = /^https?:\/\//i.test(project.demo) ? project.demo : normalizeAssetPath(project.demo);
                              if (!/^https?:\/\//i.test(href)) warmCacheRange(href);
                              window.open(href, '_blank');
                            }
                          }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

          {/* Video Dialog */}
          <Dialog open={isVideoOpen} onOpenChange={(open: boolean) => {
            setIsVideoOpen(open);
            if (!open) setCurrentVideoSrc(null);
          }}>
            <DialogContent className="max-w-4xl">
              <DialogTitle>Project Demo</DialogTitle>
              <DialogDescription>
                A short demo video of the project.
              </DialogDescription>
              {currentVideoSrc ? (
                <div className="mt-4 relative">
                  <video
                    ref={videoRef}
                    key={currentVideoSrc}
                    src={currentVideoSrc ?? undefined}
                    poster={currentVideoPoster ?? undefined}
                    className="w-full rounded-md"
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    onWaiting={() => {}}
                    onLoadedData={() => {}}
                    onPlaying={() => {}}
                    onPlay={() => {
                      
                      if (currentFullVideoSrc && currentVideoSrc !== currentFullVideoSrc) {
                        try {
                          if (videoRef.current) {
                            videoRef.current.src = currentFullVideoSrc;
                            // Force the element to load the new source and resume.
                            videoRef.current.load();
                            videoRef.current.play().catch(() => {});
                          }
                        } catch {}
                        setCurrentVideoSrc(currentFullVideoSrc);
                        setCurrentFullVideoSrc(null);
                      }
                    }}
                  />
                </div>
              ) : (
                <p className="mt-4 text-sm text-muted-foreground">No video available.</p>
              )}
              <DialogClose />
            </DialogContent>
          </Dialog>

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
