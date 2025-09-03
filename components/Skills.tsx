"use client";

import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'Java','JavaScript', 'TypeScript', 'C', 'SQL'],
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800'
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'],
    color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800'
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'REST APIs', 'GraphQL'],
    color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800'
  },
  {
    category: 'AI & ML',
    skills: [
      'Scikit-learn', 'TensorFlow', 'Transformers', 'OpenCV',
      'LangChain', 'Prompt Engineering', 'NLP', 'CLIP', 'Pandas', 'NumPy'
    ],
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800'
  },
  {
    category: 'Cybersecurity',
    skills: [
      'Penetration Testing', 'OSINT', 'MITRE ATT&CK', 'OWASP Top 10',
      'Secure Coding', 'Burp Suite', 'Kali Linux', 'Blockchain Security'
    ],
    color: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800'
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Firebase', 'Vercel', 'AWS', 'Linux'],
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800'
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'VS Code', 'Postman', 'Jupyter Notebook', 'Notion', 'ChatGPT', 'Claude AI', 'Gemini'],
    color: 'bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { 
    opacity: 0, 
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: 0.03,
      delayChildren: 0.2
    }
  }
};

const skillVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const
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

export function Skills() {
  return (
    <section className="py-12 lg:py-20 min-h-screen flex items-center bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 lg:mb-4">Skills & Technologies</h2>
          <motion.p 
            variants={titleVariants}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            A comprehensive toolkit for building modern digital solutions
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="space-y-8 lg:space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="space-y-4 lg:space-y-6"
            >
              <motion.h3 
                variants={titleVariants}
                className="text-xl lg:text-2xl text-center font-medium"
              >
                {category.category}
              </motion.h3>
              <motion.div 
                variants={categoryVariants}
                className="flex flex-wrap gap-2 lg:gap-3 justify-center"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -4,
                      transition: { 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 17 
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className={`px-3 lg:px-4 py-2 text-xs lg:text-sm cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${category.color}`}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
