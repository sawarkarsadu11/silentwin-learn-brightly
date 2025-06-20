
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Play, Pause, RotateCcw, Download, Copy } from 'lucide-react';

interface TextToSignProps {
  onBack: () => void;
}

const TextToSign = ({ onBack }: TextToSignProps) => {
  const [inputText, setInputText] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleClear = () => {
    setInputText('');
    setIsPlaying(false);
  };

  const exampleTexts = [
    "Hello, how are you?",
    "I need help with my homework",
    "Thank you for your help",
    "What is your name?",
    "I am learning sign language"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🔄</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Text to Sign</h1>
                  <p className="text-sm text-slate-500">Convert text to sign language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Enter Text</CardTitle>
                <CardDescription>Type or paste the text you want to convert to ISL</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Type your text here..."
                  value={inputText}
                  onChange={handleTextChange}
                  className="min-h-32 resize-none"
                />
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>{inputText.length} characters</span>
                  <span>{inputText.split(' ').filter(word => word.length > 0).length} words</span>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-teal-500 to-blue-600"
                    disabled={!inputText.trim()}
                    onClick={handlePlay}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isPlaying ? 'Pause' : 'Convert & Play'}
                  </Button>
                  <Button variant="outline" onClick={handleClear}>
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Examples */}
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Examples</CardTitle>
                <CardDescription>Try these common phrases</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {exampleTexts.map((text, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3"
                    onClick={() => setInputText(text)}
                  >
                    <div className="text-sm">{text}</div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Avatar Display */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">
                        {isPlaying ? '✋' : '👤'}
                      </div>
                      <div className="text-xl font-bold text-slate-700 mb-2">
                        {isPlaying ? 'Converting to ISL...' : 'ISL Avatar'}
                      </div>
                      <p className="text-sm text-slate-500">
                        {inputText.trim() 
                          ? isPlaying 
                            ? 'Watch the sign language translation' 
                            : 'Click "Convert & Play" to see the signs'
                          : 'Enter text to see sign language translation'
                        }
                      </p>
                    </div>
                  </div>

                  {/* Captions */}
                  {showCaptions && inputText && (
                    <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-3 rounded-lg">
                      <p className="text-sm text-center">{inputText}</p>
                    </div>
                  )}
                </div>

                {/* Playback Controls */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowCaptions(!showCaptions)}
                    >
                      CC
                    </Button>
                    <select 
                      className="px-3 py-1 text-sm border border-slate-200 rounded-md bg-white"
                      value={playbackSpeed}
                      onChange={(e) => setPlaybackSpeed(parseFloat(e.target.value))}
                    >
                      <option value={0.5}>0.5x</option>
                      <option value={1.0}>1.0x</option>
                      <option value={1.5}>1.5x</option>
                      <option value={2.0}>2.0x</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled={!inputText.trim()}>
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" disabled={!inputText.trim()}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Progress Bar */}
                {inputText && (
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: isPlaying ? '45%' : '0%' }}
                    ></div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Word Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  {inputText.trim() ? (
                    <div className="space-y-2">
                      {inputText.split(' ').filter(word => word.length > 0).map((word, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                          <span className="font-medium">{word}</span>
                          <Badge variant="secondary" className="text-xs">
                            {index + 1}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-slate-500 text-center py-4">
                      Enter text to see word breakdown
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Real-time conversion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">3D Avatar animation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Adjustable speed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Caption support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Download video (Pro)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSign;
