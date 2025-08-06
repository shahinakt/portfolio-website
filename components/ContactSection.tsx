'use client';

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import { motion } from "framer-motion"

// Custom Medium icon component
const MediumIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

export function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "shahina.kt@example.com", href: "mailto:shahina.kt@example.com" },
    { icon: Phone, label: "Phone", value: "+91 (555) 123-4567", href: "tel:+915551234567" },
    { icon: MapPin, label: "Location", value: "Kerala, India", href: "#" }
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MediumIcon, href: "#", label: "Medium" }
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
    <section id="contact" className="min-h-screen flex items-center px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
  Have a project in mind? I&apos;d love to hear about it. Send me a message and 
  let&apos;s discuss how we can bring your ideas to life.
</p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-6">Get in Touch</h3>
            
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info) => (
                <motion.div 
                  key={info.label} 
                  className="flex items-center gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    className="p-2 bg-muted rounded-lg"
                    whileHover={{ rotate: 360, backgroundColor: "var(--primary)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div>
              <h4 className="mb-4">Follow Me</h4>
              <motion.div 
                className="grid grid-cols-3 sm:flex gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors flex items-center justify-center"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 border-border hover:shadow-lg transition-shadow duration-300">
              <motion.form 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="hover:border-primary/50 focus:border-primary transition-colors" />
                  </motion.div>
                  <motion.div className="space-y-2" variants={itemVariants}>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="hover:border-primary/50 focus:border-primary transition-colors" />
                  </motion.div>
                </div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="hover:border-primary/50 focus:border-primary transition-colors" />
                </motion.div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Discussion" className="hover:border-primary/50 focus:border-primary transition-colors" />
                </motion.div>
                
                <motion.div className="space-y-2" variants={itemVariants}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] hover:border-primary/50 focus:border-primary transition-colors"
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
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}