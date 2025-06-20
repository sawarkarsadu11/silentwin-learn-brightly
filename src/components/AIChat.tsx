
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChat = ({ isOpen, onClose }: AIChatProps) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Aria, your SilentWin AI teacher! 👋 I'm here to help you learn in the most accessible way possible. I can assist with:\n\n🎓 Academic questions\n✋ Sign language learning\n📊 Progress tracking\n👥 Finding study groups\n🔄 Text-to-sign conversion\n\nWhat would you like to explore today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    // Simulate AI response
    const botResponse = {
      id: messages.length + 2,
      text: "That's a great question! As your AI teacher, I'm designed specifically for deaf and hard-of-hearing students. I can provide visual explanations, connect concepts to sign language, and help in multiple ways:\n\n📚 Subject explanations with visual aids\n✋ ISL translations and practice\n🎯 Personalized learning paths\n🤝 Study buddy matching\n📈 Progress visualization\n\nWhich subject or topic would you like to dive into?",
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md h-[600px] p-0 flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <div>
                <div className="text-lg font-bold">Aria - AI Teacher</div>
                <div className="text-sm opacity-90">Your learning companion</div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-slate-800'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {message.text}
                  </div>
                  <div className={`text-xs mt-2 opacity-70`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t border-slate-200">
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me anything about learning..."
              className="flex-1 bg-slate-50 border-slate-200 focus:border-blue-400"
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300"
            >
              Send
            </Button>
          </form>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("Help me with math homework")}
            >
              Math Help
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("Teach me new ISL signs")}
            >
              Learn ISL
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("Show my progress")}
            >
              My Progress
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIChat;
