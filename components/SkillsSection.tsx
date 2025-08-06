'use client';

import { motion } from "framer-motion"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Vue.js", "Angular"]
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL", "MongoDB", "Django", "FastAPI"]
    },
    {
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn", "Pandas", "NumPy", "LangChain", "Hugging Face"]
    },
    {
      title: "Database & Cloud",
      skills: ["PostgreSQL", "Firebase", "AWS", "Vercel", "Netlify", "Supabase", "Redis", "Docker"]
    },
    {
      title: "Cybersecurity",
      skills: ["OWASP", "Penetration Testing", "Security Audits", "SSL/TLS", "Authentication", "Encryption"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Git", "VS Code", "Linux", "Postman", "Webpack"]
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="text-center">
                <h3 className="text-lg font-medium mb-6 text-primary">{category.title}</h3>
              </div>
              
              <motion.div 
                className="space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="bg-muted/50 px-4 py-3 rounded-lg text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default hover:shadow-md"
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ 
                      duration: 0.3, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile-specific additional spacing */}
        <div className="block sm:hidden mt-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              Continuously learning and adapting to new technologies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}