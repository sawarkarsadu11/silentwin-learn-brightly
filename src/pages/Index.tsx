import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import NavigationBar from '@/components/NavigationBar';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import LoginModal from '@/components/LoginModal';
import Dashboard from '@/components/Dashboard';
import AIChat from '@/components/AIChat';
import VideoLearning from '@/components/VideoLearning';
import LearnISL from '@/components/LearnISL';
import QuizProgress from '@/components/QuizProgress';
import SilentWinFriends from '@/components/SilentWinFriends';
import TextToSign from '@/components/TextToSign';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showClassBoardSelection, setShowClassBoardSelection] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    setShowClassBoardSelection(true);
    setCurrentPage('dashboard');
  };

  const handleGetStarted = () => {
    setShowLoginModal(true);
  };

  const handleShowClassBoardSelection = () => {
    setShowClassBoardSelection(true);
  };

  const handleClassBoardSelected = () => {
    setShowClassBoardSelection(false);
  };

  const renderCurrentPage = () => {
    if (!isLoggedIn) return null;
    if (showClassBoardSelection) {
      return <Dashboard onNavigate={setCurrentPage} showClassBoardSelection initialShowSelection onClassBoardSelected={handleClassBoardSelected} />;
    }
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} onShowClassBoardSelection={handleShowClassBoardSelection} />;
      case 'video-learning':
        return <VideoLearning onBack={() => setCurrentPage('dashboard')} />;
      case 'learn-isl':
        return <LearnISL onBack={() => setCurrentPage('dashboard')} />;
      case 'quiz-progress':
        return <QuizProgress onBack={() => setCurrentPage('dashboard')} />;
      case 'friends':
        return <SilentWinFriends onBack={() => setCurrentPage('dashboard')} />;
      case 'text-to-sign':
        return <TextToSign onBack={() => setCurrentPage('dashboard')} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} onShowClassBoardSelection={handleShowClassBoardSelection} />;
    }
  };

  if (isLoggedIn) {
    return (
      <>
        {renderCurrentPage()}
        <AIChat 
          isOpen={showAIChat} 
          onClose={() => setShowAIChat(false)} 
        />
        <Button
          onClick={() => setShowAIChat(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300 z-50"
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
        <section id="home">
          <HeroSection onGetStarted={handleGetStarted} />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
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
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300 z-50"
        size="lg"
      >
        🤖
      </Button>
    </div>
  );
};

export default Index;
