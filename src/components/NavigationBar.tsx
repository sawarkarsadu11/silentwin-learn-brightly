
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationBarProps {
  onGetStarted: () => void;
}

const NavigationBar = ({ onGetStarted }: NavigationBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">✋</span>
            </div>
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">SilentWin</h1>
              <p className="text-xs text-slate-500">Learn Beyond Sound</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="nav-link"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </div>

          {/* Get Started Button */}
          <Button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
