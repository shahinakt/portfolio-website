"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from "sonner";

// Custom Medium icon component
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/shahinakt', color: 'hover:text-blue-600' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/shahinakt', color: 'hover:text-gray-900 dark:hover:text-white' },
  { name: 'Medium', icon: MediumIcon, url: 'https://medium.com/@shahinasareen', color: 'hover:text-green-600' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/shxynh', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/shahinasareen', color: 'hover:text-pink-600' },
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/shahinasareen', color: 'hover:text-blue-700' },
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

const formVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const contactInfoVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const socialVariants = {
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-12 lg:py-20 min-h-screen flex items-center bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true,  margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 lg:mb-4">Get In Touch</h2>
          <motion.p 
            variants={titleVariants}
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{once: true,  margin: "-50px" }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={formVariants}>
          <Card className="w-full max-w-md border-border/50 hover:shadow-lg transition-all duration-500 overflow-hidden">


              <CardHeader className="pb-4">
                <motion.div variants={itemVariants}>
                  <CardTitle className="text-xl lg:text-2xl">Send Message</CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  <motion.div 
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm lg:text-base">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm lg:text-base">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="hover:border-primary/50 focus:border-primary transition-colors"
                        placeholder="youremail@example.com"
                      />
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="subject" className="text-sm lg:text-base">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="hover:border-primary/50 focus:border-primary transition-colors"
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="message" className="text-sm lg:text-base">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full h-40 resize-none break-words overflow-y-auto overflow-x-hidden whitespace-pre-wrap hover:border-primary/50 focus:border-primary transition-colors"
                      placeholder="Tell me about your project or idea..."
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full hover:scale-105 transition-transform duration-200"
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            variants={contactInfoVariants}
            className="space-y-6 lg:space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card className="w-full max-w-2xl border-border/50 hover:shadow-lg transition-all duration-500 overflow-hidden">

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl lg:text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-6">
                  {[
                    { icon: Mail, label: 'Email', value: 'shahinasareen@gmail.com'},
                    { icon: Phone, label: 'Phone', value: '+91 8078034006' },
                    { icon: MapPin, label: 'Location', value: 'Kerala, India' }
                  ].map((contact) => (
                    <motion.div
                      key={contact.label}
                      variants={itemVariants}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs lg:text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-sm lg:text-base truncate">{contact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={itemVariants}>
              <Card className="border-border/50 hover:shadow-lg transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl lg:text-2xl">Let&apos;s Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    variants={containerVariants}
                    className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4"
                  >
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        variants={socialVariants}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 lg:w-12 lg:h-12 bg-secondary rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                        whileHover={{ 
                          y: -6, 
                          scale: 1.15,
                          rotate: 5,
                          transition: { 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 17 
                          }
                        }}
                        whileTap={{ scale: 0.9 }}
                        title={social.name}
                      >
                        <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                      </motion.a>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}