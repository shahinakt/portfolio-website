import { ThemeProvider } from "../components/ThemeProvider";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          {/* Page 1: Normal background */}
          <HeroSection />
          
          {/* Page 2: Light grey background */}
          <AboutSection />
          
          {/* Page 3: White background */}
          <SkillsSection />
          
          {/* Page 4: Light grey background */}
          <ProjectsSection />
          
          {/* Page 5: White background */}
          <ContactSection />
        </main>
        
        <footer className="border-t border-border py-8 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-muted-foreground">
              © 2024 Shahina KT. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}