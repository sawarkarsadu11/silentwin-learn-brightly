
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Video, 
  Users, 
  Bell, 
  Search, 
  User,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import LoginModal from '@/components/LoginModal';
import Dashboard from '@/components/Dashboard';
import AIChat from '@/components/AIChat';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleGetStarted = () => {
    setShowLoginModal(true);
  };

  if (isLoggedIn) {
    return (
      <>
        <Dashboard />
        <AIChat 
          isOpen={showAIChat} 
          onClose={() => setShowAIChat(false)} 
        />
        <Button
          onClick={() => setShowAIChat(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-primary hover:shadow-lg transition-all duration-300 z-50"
          size="lg"
        >
          🤖
        </Button>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <NavigationBar onGetStarted={handleGetStarted} />
      
      <main>
        <HeroSection onGetStarted={handleGetStarted} />
        <AboutSection />
        <FeaturesSection />
        <ContactSection />
      </main>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />

      <AIChat 
        isOpen={showAIChat} 
        onClose={() => setShowAIChat(false)} 
      />

      <Button
        onClick={() => setShowAIChat(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-primary hover:shadow-lg transition-all duration-300 z-50"
        size="lg"
      >
        🤖
      </Button>
    </div>
  );
};

export default Index;
