import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { ImageWithFallback } from "./imgdo/ImageWithFallback"
import { motion } from "framer-motion"

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated code generation to intelligent user experiences.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI & Tech",
      link: "#"
    },
    {
      title: "Cybersecurity Best Practices for Modern Web Apps",
      excerpt: "A comprehensive guide to securing your web applications against common vulnerabilities and implementing robust security measures.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      date: "Dec 10, 2024", 
      readTime: "8 min read",
      category: "Security",
      link: "#"
    },
    {
      title: "SEO Strategies That Actually Work in 2024",
      excerpt: "Discover the latest SEO techniques that drive real results, from technical optimization to content strategies that rank.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      date: "Dec 5, 2024",
      readTime: "6 min read", 
      category: "SEO & Marketing",
      link: "#"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the architectural patterns and best practices for creating React applications that can grow with your business needs.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "Development",
      link: "#"
    },
    {
      title: "The Art of Prompt Engineering",
      excerpt: "Master the techniques of crafting effective prompts for AI systems to get better results and more accurate outputs.",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&h=400&fit=crop", 
      date: "Nov 20, 2024",
      readTime: "4 min read",
      category: "AI & Prompts",
      link: "#"
    },
    {
      title: "Machine Learning for Web Developers",
      excerpt: "A practical introduction to integrating machine learning models into web applications without complex infrastructure.",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=600&h=400&fit=crop",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      category: "ML & AI",
      link: "#"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="blog" className="min-h-screen flex items-center px-6 py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-6">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, AI, cybersecurity, and the latest tech trends.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-border hover:border-primary/20 transition-all duration-300 group hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <motion.h3 
                    className="text-lg mb-3 font-medium group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {post.title}
                  </motion.h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn p-0 h-auto hover:bg-transparent"
                    asChild
                  >
                    <a href={post.link} className="flex items-center gap-2">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full hover:scale-105 transition-transform duration-200"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  )
}