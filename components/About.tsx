"use client";

import { motion } from 'framer-motion';
import { Code, Shield, Brain, PenTool, Search, Server } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const roles = [
  {
    title: 'Backend Developer',
    icon: Server,
    description: 'Python, FastAPI, REST APIs, PostgreSQL, MongoDB'
  },
  {
    title: 'Full Stack Developer',
    icon: Code,
    description: 'React, Next.js, TypeScript, Tailwind CSS'
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Computer Vision, Scikit-learn, YOLOv8, Transformers'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Threat Intelligence, Secure Coding, OSINT'
  },
  {
    title: 'Technical Writer',
    icon: Search,
    description: 'Technical Writing, SEO, Documentation'
  },
  {
    title: 'Prompt Engineering',
    icon: PenTool,
    description: 'Prompt Design, AI-Assisted Development, AI Productivity'
  }
];

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
    y: 40,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

const contentVariants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.3
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

export function About() {
  return (
    <section className="py-12 lg:py-20 min-h-screen flex items-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true,  margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 lg:mb-4">About Me</h2>
          <motion.p 
            variants={titleVariants}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            Backend-focused software engineer building scalable APIs, secure systems, and modern full-stack applications.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Role Cards - Mobile: 2 per row, Desktop: 2 per row in left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
          >
            {roles.map((role) => (
              <motion.div
                key={role.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 hover:shadow-primary/5">
                  <CardContent className="p-3 sm:p-4 lg:p-6 text-center space-y-2 sm:space-y-3 lg:space-y-4 h-full flex flex-col justify-center">
                    <motion.div
                      whileHover={{ 
                        rotate: 10, 
                        scale: 1.15,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="mx-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center"
                    >
                      <role.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                    </motion.div>
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium leading-tight">{role.title}</h3>
                    <p className="text-xs sm:text-xs lg:text-sm text-muted-foreground leading-tight">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={contentVariants}
            className="space-y-6"
          >
            <Card className="border-border/50 hover:shadow-lg transition-all duration-500">
              <CardContent className="p-6 lg:p-8">
                <motion.h3 
                  variants={contentVariants}
                  className="text-xl lg:text-2xl mb-4 lg:mb-6"
                >
                  About Me
                </motion.h3>
                <motion.div
                  variants={containerVariants}
                  className="space-y-3 lg:space-y-4 text-muted-foreground leading-relaxed text-sm lg:text-base"
                >
                  <motion.p variants={contentVariants}>
I’m Shahina Sareen KT, a backend-focused software engineer who just completed B.Sc. in Computer Science at the University of Calicut. I enjoy designing scalable REST APIs, authentication systems, and database-driven applications using Python, FastAPI, PostgreSQL, and MongoDB while building responsive user interfaces with React and Next.js.
</motion.p>
                  <motion.p variants={contentVariants}>
My projects focus on solving real-world problems through reliable backend architecture. I have built applications including a Cyber Threat Intelligence Platform, a Customer Review Analytics Dashboard, and a Digital Identity Search Platform, implementing REST APIs, secure authentication, database design, and AI-powered features.
</motion.p>
                  <motion.p variants={contentVariants}>
Beyond backend development, I have experience in AI, machine learning, computer vision, and cybersecurity. I use these technologies to enhance software systems rather than treating them as standalone projects, enabling practical solutions that combine intelligent automation with secure software engineering.
</motion.p>
                  <motion.p variants={contentVariants}>
I continuously strengthen my software engineering skills through personal projects, technical writing, and learning modern development practices. I am currently seeking Backend Engineer and Software Engineer internship opportunities where I can contribute to scalable products while growing as an engineer.
</motion.p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
