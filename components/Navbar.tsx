import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { SectionId } from '../types';

const navItems = [
  { label: 'Mission', href: `#${SectionId.ABOUT}` },
  { label: 'Tracks', href: `#${SectionId.TRACKS}` },
  { label: 'Curriculum', href: `#${SectionId.CURRICULUM}` },
  { label: 'Team', href: `#${SectionId.TEAM}` },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo(`#${SectionId.HOME}`)}
        >
          <div className="relative flex items-center justify-center w-10 h-10 bg-brand-dark rounded-full">
             <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold font-mono tracking-tight text-brand-dark">
            Bloom<span className="text-brand-primary">Stacks</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="text-sm font-medium text-brand-dark/70 hover:text-brand-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo(`#${SectionId.JOIN}`)}
            className="px-6 py-2.5 bg-brand-dark text-white font-medium text-sm rounded-full hover:bg-brand-primary transition-colors shadow-lg shadow-brand-primary/20"
          >
            Launch BETA
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-lg font-medium text-brand-dark"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo(`#${SectionId.JOIN}`)}
                className="w-full py-3 bg-brand-dark text-white font-bold rounded-full"
              >
                Launch BETA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};