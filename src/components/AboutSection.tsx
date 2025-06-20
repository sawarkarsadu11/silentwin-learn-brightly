
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About SilentWin</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Breaking barriers in education by creating an inclusive learning environment 
            where deaf and hard-of-hearing students can excel through visual learning and sign language.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="feature-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-silent-blue-400 to-silent-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Our Mission</h3>
              <p className="text-slate-600">
                To provide equal educational opportunities through innovative visual learning 
                techniques and sign language integration.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-silent-purple-400 to-silent-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Student Impact</h3>
              <p className="text-slate-600">
                Over 10,000 students have improved their learning outcomes by 95% 
                through our specialized teaching methods.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-silent-green-400 to-silent-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">Innovation</h3>
              <p className="text-slate-600">
                Cutting-edge AI technology combined with sign language expertise 
                creates a unique learning experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-soft rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-slate-800">
            Empowering Every Student to Succeed
          </h3>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-8">
            SilentWin combines the best of visual learning, interactive content, and sign language 
            to create an educational experience that truly understands and serves the deaf community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="font-semibold text-slate-700">CBSE Curriculum</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="font-semibold text-slate-700">State Board Support</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="font-semibold text-slate-700">ISL Integration</span>
            </div>
            <div className="bg-white/70 px-6 py-3 rounded-full">
              <span className="font-semibold text-slate-700">AI-Powered Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
