'use client';

import { Card } from "./ui/card"
import { Code, Database, Brain, Shield, PenTool, Search } from "lucide-react"
import { motion } from "framer-motion"

export function AboutSection() {
  const specializations = [
    { 
      name: "Frontend Developer", 
      icon: Code, 
      description: "Creating beautiful, responsive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    { 
      name: "Backend Developer", 
      icon: Database, 
      description: "Building robust server-side applications with Node.js, Python, and database management."
    },
    { 
      name: "AI & ML Engineer", 
      icon: Brain, 
      description: "Developing intelligent systems and machine learning models for data-driven solutions."
    },
    { 
      name: "Cybersecurity Specialist", 
      icon: Shield, 
      description: "Implementing security best practices and protecting systems from vulnerabilities."
    },
    { 
      name: "Prompt Engineer", 
      icon: PenTool, 
      description: "Crafting effective prompts for AI systems and optimizing language model interactions."
    },
    { 
      name: "SEO Writer", 
      icon: Search, 
      description: "Creating versatile, search-optimized content that drives traffic and engagement."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I am a versatile developer with 5+ years of experience across multiple domains. 
            I combine technical expertise with creative problem-solving to deliver comprehensive solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* My Journey Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <Card className="p-8 h-full border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl mb-6 text-center">My Journey</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Started as a graphic designer, transitioned into web development, and expanded into 
                  AI/ML and cybersecurity. I believe in continuous learning and adapting to emerging technologies.
                </p>
                <p className="text-muted-foreground">
                  My diverse skill set allows me to approach problems from multiple angles, whether its 
                  building secure applications, optimizing for search engines, or implementing AI solutions.
                </p>
                <p className="text-muted-foreground">
                  When I am not coding, you will find me exploring new tech trends, writing technical content, 
                  or contributing to open-source projects.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Specializations Grid */}
          <motion.div 
            className="lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {specializations.map((spec, index) => (
                <motion.div key={spec.name} variants={itemVariants}>
                  <Card className="p-6 h-full border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:scale-105 group">
                    <div className="flex flex-col items-center text-center">
                      <motion.div 
                        className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <spec.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <h4 className="mb-3 text-sm font-medium">{spec.name}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}