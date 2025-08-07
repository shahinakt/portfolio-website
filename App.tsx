"use client";

import { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    
    // Scroll to section with offset for fixed navbar
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 64; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar
      
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        
        <main className="relative">
          {/* Hero Section - Primary background (white/black) */}
          <div id="hero">
            <Hero onNavigate={handleNavigate} />
          </div>
          
          {/* About Section - Secondary background (light grey/dark grey) */}
          <div id="about">
            <About />
          </div>
          
          {/* Skills Section - Secondary background (light grey/dark grey) */}
          <div id="skills">
            <Skills />
          </div>
          
          {/* Projects Section - Primary background (white/black) */}
          <div id="projects">
            <Projects />
          </div>
          
          {/* Contact Section - Secondary background (light grey/dark grey) */}
          <div id="contact">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-background border-t border-border py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs lg:text-sm text-muted-foreground">
              © 2025 Shahina. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </ThemeProvider>
  );
}