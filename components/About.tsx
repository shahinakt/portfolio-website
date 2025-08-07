"use client";

import { motion } from 'framer-motion';
import { Code, Shield, Brain, PenTool, Search, Server } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const roles = [
  {
    title: 'Frontend Developer',
    icon: Code,
    description: 'React, Next.js, TypeScript, Tailwind CSS'
  },
  {
    title: 'Backend Developer',
    icon: Server,
    description: 'Node.js, Python, MongoDB, REST APIs'
  },
  {
    title: 'Cybersecurity Specialist',
    icon: Shield,
    description: 'Penetration Testing, MITRE ATT&CK, Secure Coding'
  },
  {
    title: 'AI & ML Engineer',
    icon: Brain,
    description: 'LangChain, Transformers, NLP'
  },
  {
    title: 'Prompt Engineer',
    icon: PenTool,
    description: 'LLM Prompting, OpenAI API'
  },
  {
    title: 'SEO Writer',
    icon: Search,
    description: 'Content Strategy, Technical Writing, SEO Optimization'
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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
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
      ease: [0.25, 0.46, 0.45, 0.94] as const,
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
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
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
            Fast-learning full-stack dev with hands-on experience in AI and secure, scalable systems.
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
                  Hello there! 👋
                </motion.h3>
                <motion.div
                  variants={containerVariants}
                  className="space-y-3 lg:space-y-4 text-muted-foreground leading-relaxed text-sm lg:text-base"
                >
                  <motion.p variants={contentVariants}>
                  I’m Shahina KT, a self-taught full-stack developer and cybersecurity enthusiast currently pursuing a B.Sc. in Computer Science at the University of Calicut. I specialize in building secure, scalable, and intelligent web applications using React, Next.js, Node.js, FastAPI, and MongoDB, with strong hands-on experience across both frontend and backend systems.
                  </motion.p>
                  <motion.p variants={contentVariants}>
                  My work spans across AI/ML, blockchain integration, and cyber threat intelligence. I’ve built 10+ real-world projects including an AI-powered disease predictor, decentralized voice login system, cyber threat monitoring platform, and facial recognition-based identity finder — all deployed with cloud-native tooling like Docker, Kubernetes, and CI/CD pipelines.
                  </motion.p>
                  <motion.p variants={contentVariants}>
                  In the AI space, I’m skilled in machine learning, NLP, LangChain, and prompt engineering, having integrated large language models and built smart automation tools. On the security side, I conduct penetration testing, implement OSINT techniques, and follow frameworks like MITRE ATT&CK for real-world threat mitigation.
                  </motion.p>
                  <motion.p variants={contentVariants}>
                  Alongside development, I’m an active technical writer with 60+ articles and 10,000+ claps on Medium, focusing on AI, cybersecurity, and emerging tech trends. I’m currently seeking a Software Engineer Internship where I can contribute to impactful projects while continuing to grow as a developer and innovator.
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