
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Learn</span>
                <br />
                <span className="text-slate-800">Beyond Sound</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-lg">
                Empowering deaf and hard-of-hearing students from Nursery to 10th grade 
                with visual learning, sign language, and interactive education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-primary hover:shadow-xl transition-all duration-300 text-lg px-8 py-4"
              >
                Start Learning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-silent-blue-200 hover:bg-silent-blue-50 text-lg px-8 py-4"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-slate-500">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-slate-500">Video Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">95%</div>
                <div className="text-sm text-slate-500">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-hero rounded-3xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative z-10 flex items-center justify-center h-96">
                <div className="text-center text-white space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <span className="text-4xl">👋</span>
                  </div>
                  <h3 className="text-2xl font-bold">Welcome to SilentWin</h3>
                  <p className="text-lg opacity-90">Where every student can shine</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
                <span className="text-2xl">📚</span>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
