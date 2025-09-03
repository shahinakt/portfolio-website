"use client";

import { motion } from 'framer-motion';
import { easeInOut } from "framer-motion";
import { Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from './ThemeContext';
import Image from 'next/image';


interface HeroProps {
  onNavigate: (section: string) => void;
}

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


const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeInOut
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeInOut
    }
  }
};

export function Hero({ onNavigate }: HeroProps) {
  const { theme } = useTheme();

const handleResumeDownload = () => {
  window.open('/Shahina_KT_Resume.pdf', '_blank');
};


   return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full relative"
        >
        <Image
          src="/images/image.jpg"  
          alt="Neural Network Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            console.error('Image failed to load:', e);
          }}
          onLoad={() => {
            console.log('Image loaded successfully');
          }}
        />
          
          {/* Enhanced theme-responsive overlay for better line visibility */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark' 
              ? 'bg-black/30' 
              : 'bg-white/60'
          }`} />
          
          {/* Additional contrast overlay for neural network visibility */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10'
              : 'bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50'
          }`} />
          
          {/* Content readability gradient */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-black/50 via-transparent to-black/30'
              : 'bg-gradient-to-r from-white/70 via-white/40 to-white/70'
          }`} />
        </motion.div>
      </div>

      {/* Animated particles overlay for enhanced effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-white/40' : 'bg-black/30'
            }`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="space-y-3 lg:space-y-4">
              <motion.div
                variants={itemVariants}
                className="text-muted-foreground text-base lg:text-lg"
              >
                Hello, I&apos;m
              </motion.div>
              
              <motion.h1
                variants={itemVariants}
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent'
                    : 'bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-clip-text text-transparent'
                }`}
              >
                Shahina KT
              </motion.h1>
              
              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-2xl text-muted-foreground"
              >
                SWE Intern | AI/ML • Cybersecurity • Cloud Computing
              </motion.h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`backdrop-blur-md p-4 lg:p-6 rounded-xl border transition-all duration-500 ${
                theme === 'dark'
                  ? 'bg-black/20 border-white/10'
                  : 'bg-white/60 border-black/10'
              }`}
            >
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                I create innovative digital solutions spanning full-stack development, AI/ML engineering, 
                cybersecurity, and technical writing. With expertise across multiple domains, 
                I build scalable applications that drive business growth and user engagement.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start"
            >
              <motion.div 
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className={`px-6 lg:px-8 py-3 lg:py-6 text-sm lg:text-base transition-all duration-300 backdrop-blur-sm ${
                    theme === 'dark' 
                      ? 'bg-white/90 text-black hover:bg-white border border-white/20' 
                      : 'bg-black/90 text-white hover:bg-black border border-black/20'
                  }`}
                >
                  <Mail className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
              <motion.div 
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleResumeDownload}
                  variant="outline"
                  size="lg"
                  className={`px-6 lg:px-8 py-3 lg:py-6 text-sm lg:text-base transition-all duration-300 backdrop-blur-sm ${
                    theme === 'dark'
                      ? 'border-white/30 text-white hover:bg-white/10 bg-transparent'
                      : 'border-black/30 text-black hover:bg-black/10 bg-transparent'
                  }`}
                >
                  <Download className="w-4 lg:w-5 h-4 lg:h-5 mr-2" />
                  Resume Preview
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Clean space for background visibility */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="hidden lg:block relative h-96"
          >
            {/* Subtle accent elements that enhance the neural network theme */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={`w-32 h-32 rounded-full border transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'border-white/20' 
                    : 'border-black/20'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className={`absolute w-20 h-20 rounded-full border transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'border-white/10' 
                    : 'border-black/10'
                }`}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    );
  }
