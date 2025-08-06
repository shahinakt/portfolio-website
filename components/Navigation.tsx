"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { useTheme } from "./ThemeProvider"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const mainNavItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog", external: true, href: "https://your-blog-website.com" }
  ]

  // Show nav items
  const showNavItems = true 

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled && activeSection !== "home" ? "bg-transparent" : 
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Always visible and clickable */}
          <motion.button 
            className="flex items-center space-x-3"
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="text-primary text-xl font-mono">&lt;/&gt;</div>
            <span className="text-lg font-medium">Shahina KT</span>
          </motion.button>

          {/* Desktop Navigation - Only show on home */}
          <AnimatePresence>
            {showNavItems && (
              <motion.div
                className="hidden md:flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Main Nav Items */}
                <div className="flex items-center space-x-2">
                  {mainNavItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => item.external ? window.open(item.href, '_blank') : scrollToSection(item.id)}
                      className="text-sm hover:bg-transparent hover:text-primary transition-all duration-200"
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
                
                {/* Dark Mode Toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="rounded-full w-10 h-10 p-0 hover:bg-muted"
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </Button>
                
                {/* Contact Button */}
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full hover:scale-105 transition-transform duration-200"
                >
                  View my work
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu - Only show on home */}
          <AnimatePresence>
            {showNavItems && (
              <motion.div
                className="md:hidden flex items-center space-x-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="rounded-full w-10 h-10 p-0"
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-full w-10 h-10 p-0"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4" />
                  )}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Dropdown - Only show on home */}
        <AnimatePresence>
          {isMobileMenuOpen && showNavItems && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 space-y-2 overflow-hidden"
            >
              {mainNavItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => item.external ? window.open(item.href, '_blank') : scrollToSection(item.id)}
                    className="w-full justify-start"
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: mainNavItems.length * 0.1 }}
              >
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="w-full justify-start"
                >
                  View my work
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}