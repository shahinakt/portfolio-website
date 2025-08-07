"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "../components/ThemeContext";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to the section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        <main>
          {/* Page 1: Normal background */}
          <div id="hero">
            <Hero onNavigate={handleNavigate} />
          </div>
          
          {/* Page 2: Light grey background */}
          <div id="about">
            <About />
          </div>
          
          {/* Page 3: White background */}
          <div id="skills">
            <Skills />
          </div>
          
          {/* Page 4: Light grey background */}
          <div id="projects">
            <Projects />
          </div>
          
          {/* Page 5: White background */}
          <div id="contact">
            <Contact />
          </div>
        </main>
        
        <footer className="border-t border-border py-8 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2025 Shahina KT. Built with Next.js, Tailwind CSS & TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}