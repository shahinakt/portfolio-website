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
    

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


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
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        <main>
          <div id="hero">
            <Hero onNavigate={handleNavigate} />
          </div>
          
          <div id="about">
            <About />
          </div>
          
          <div id="skills">
            <Skills />
          </div>
          
          <div id="projects">
            <Projects />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>
        
        <footer className="border-t border-border py-8 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2026 Shahina Sareen KT. Built with Next.js, Tailwind CSS & TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}