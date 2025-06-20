import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about SilentWin? We're here to help you on your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="feature-card bg-gradient-to-br from-blue-50 via-purple-50 to-white/90">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 border-slate-200 focus:border-blue-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 border-slate-200 focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50 border-slate-200 focus:border-blue-400"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="feature-card bg-gradient-to-r from-blue-400 to-purple-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl text-white">📧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-800">Email Support</h4>
                    <p className="text-slate-600">support@silentwin.edu</p>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card bg-gradient-to-r from-purple-400 to-blue-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl text-white">💬</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-800">Live Chat</h4>
                    <p className="text-slate-600">Available 24/7 with sign language support</p>
                    <p className="text-sm text-slate-500">Click the AI chat button anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="feature-card bg-gradient-to-r from-blue-400 to-purple-600">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl text-white">🎥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-slate-800">Video Support</h4>
                    <p className="text-slate-600">Schedule a video call with our experts</p>
                    <p className="text-sm text-slate-500">Sign language interpreters available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="bg-gradient-soft rounded-2xl p-8">
              <h4 className="font-bold text-lg mb-4 text-slate-800">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="ghost" className="justify-start text-slate-700 hover:text-silent-blue-600">
                  Help Center
                </Button>
                <Button variant="ghost" className="justify-start text-slate-700 hover:text-silent-blue-600">
                  Documentation
                </Button>
                <Button variant="ghost" className="justify-start text-slate-700 hover:text-silent-blue-600">
                  Community Forum
                </Button>
                <Button variant="ghost" className="justify-start text-slate-700 hover:text-silent-blue-600">
                  Accessibility Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
