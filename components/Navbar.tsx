"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Mail } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Button } from './ui/button';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  type NavLink = {
    name: string;
    id: string;
    external?: boolean;
    href?: string;
  };

  const navLinks: NavLink[] = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blog', id: 'blog', external: true, href: 'https://medium.com/@shahinasareen' },
  ];

  const handleNavClick = (link: NavLink) => {
    if (link.external) {
      window.open(link.href, '_blank');
    } else {
      onNavigate(link.id);
    }
    setMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    onNavigate('contact');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <motion.button
              onClick={() => onNavigate('hero')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-primary text-base lg:text-lg">&lt;/&gt;</span>
              <span className="text-base lg:text-lg font-medium">Shahina KT</span>
            </motion.button>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden md:flex items-center justify-end flex-1">
              <div className="flex items-center space-x-6 lg:space-x-8 mr-6 lg:mr-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavClick(link)}
                    className={`relative px-2 lg:px-3 py-2 transition-colors text-sm lg:text-base ${
                      activeSection === link.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Desktop Actions */}
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="w-8 h-8 lg:w-9 lg:h-9"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </Button>
                <Button onClick={handleContactClick} className="px-4 lg:px-6 text-sm lg:text-base">
                  Contact
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-8 h-8"
              >
                {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="w-8 h-8"
              >
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/50 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-background border-l border-border z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="text-base font-medium">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-8 h-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1 px-4 py-6">
                  <div className="space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.button
                        key={link.id}
                        onClick={() => handleNavClick(link)}
                        className={`block w-full text-left p-3 rounded-lg transition-colors text-base ${
                          activeSection === link.id
                            ? 'bg-accent text-accent-foreground'
                            : 'hover:bg-accent hover:text-accent-foreground'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.name}
                      </motion.button>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navLinks.length * 0.1 }}
                      className="pt-4"
                    >
                      <Button onClick={handleContactClick} className="w-full justify-start" size="lg">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}