
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🎥',
      title: 'Video Learning',
      description: 'Interactive video lessons with visual cues, subtitles, and sign language interpretation',
      color: 'from-blue-400 to-blue-600',
      benefits: ['Visual Storytelling', 'Sign Language', 'Interactive Quizzes']
    },
    {
      icon: '✋',
      title: 'Learn ISL',
      description: 'Comprehensive Indian Sign Language courses integrated with academic subjects',
      color: 'from-purple-400 to-purple-600',
      benefits: ['Basic to Advanced', 'Subject-specific Signs', 'Practice Sessions']
    },
    {
      icon: '📊',
      title: 'Quiz & Progress Tracker',
      description: 'Visual assessments and detailed progress tracking with personalized feedback',
      color: 'from-green-400 to-green-600',
      benefits: ['Visual Quizzes', 'Progress Analytics', 'Skill Mapping']
    },
    {
      icon: '👫',
      title: 'SilentWin Friends',
      description: 'Connect with peers through video chat and text messaging in a safe environment',
      color: 'from-pink-400 to-pink-600',
      benefits: ['Peer Learning', 'Study Groups', 'Safe Environment']
    },
    {
      icon: '🤖',
      title: 'AI Chatbot',
      description: 'Smart AI assistant that understands sign language and provides instant help',
      color: 'from-indigo-400 to-indigo-600',
      benefits: ['24/7 Support', 'Sign Recognition', 'Instant Answers']
    },
    {
      icon: '🔄',
      title: 'Speech/Text to Sign Converter',
      description: 'Real-time conversion of speech and text to sign language animations',
      color: 'from-teal-400 to-teal-600',
      benefits: ['Real-time Conversion', 'Multiple Languages', 'Smooth Animations']
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Core Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the powerful tools and features designed specifically for deaf and hard-of-hearing students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card group hover:shadow-2xl transition-all duration-500"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="mr-2 mb-2 bg-slate-100 text-slate-700 hover:bg-slate-200"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-gradient-hero rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6">
              Experience Learning Like Never Before
            </h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Our platform combines cutting-edge technology with educational expertise 
              to create an inclusive learning environment that adapts to every student's needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-sm">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Visual Learning</div>
              </div>
              <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-sm">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-90">AI Support</div>
              </div>
              <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-sm">
                <div className="text-2xl font-bold">Safe</div>
                <div className="text-sm opacity-90">Environment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
