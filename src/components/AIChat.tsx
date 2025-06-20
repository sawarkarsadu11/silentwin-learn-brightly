
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
      text: "Hi! I'm your SilentWin AI assistant. I can help you with learning, sign language, homework, and more! How can I help you today? 🤖✋",
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
      text: "Thanks for your message! I understand you need help. As your AI assistant, I can provide support with:\n\n🎓 Academic questions\n✋ Sign language learning\n📊 Progress tracking\n👥 Connecting with study groups\n🔄 Text-to-sign conversion\n\nWhat specific topic would you like to explore?",
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
        <div className="bg-gradient-primary p-4 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <span className="text-2xl">🤖</span>
              <div>
                <div className="text-lg font-bold">SilentWin AI Assistant</div>
                <div className="text-sm opacity-90">Always here to help</div>
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
                      ? 'bg-gradient-soft text-slate-800'
                      : 'bg-gradient-primary text-white'
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
              placeholder="Type your message or question..."
              className="flex-1 bg-slate-50 border-slate-200 focus:border-silent-blue-400"
            />
            <Button 
              type="submit"
              className="bg-gradient-primary hover:shadow-lg transition-all duration-300"
            >
              Send
            </Button>
          </form>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("How do I learn sign language?")}
            >
              Learn ISL
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("Help with math homework")}
            >
              Math Help
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("Convert text to sign language")}
            >
              Text to Sign
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIChat;
