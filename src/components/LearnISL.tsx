
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, RotateCcw, CheckCircle } from 'lucide-react';

interface LearnISLProps {
  onBack: () => void;
}

const LearnISL = ({ onBack }: LearnISLProps) => {
  const [currentLevel, setCurrentLevel] = useState('beginner');
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const levels = [
    {
      id: 'beginner',
      name: 'Beginner',
      description: 'Basic signs and alphabet',
      progress: 80,
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      description: 'Common words and phrases',
      progress: 45,
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'advanced',
      name: 'Advanced',
      description: 'Complex sentences and expressions',
      progress: 20,
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const flashcards = {
    beginner: [
      { word: 'Hello', sign: '👋', description: 'Wave your hand in greeting' },
      { word: 'Thank You', sign: '🙏', description: 'Bring hands together near chin' },
      { word: 'Water', sign: '💧', description: 'Make a W shape with your fingers' },
      { word: 'Food', sign: '🍎', description: 'Bring fingers to mouth' },
    ],
    intermediate: [
      { word: 'Happy', sign: '😊', description: 'Circular motion over heart' },
      { word: 'Family', sign: '👨‍👩‍👧‍👦', description: 'F handshape moving in circle' },
      { word: 'School', sign: '🏫', description: 'Clap hands together twice' },
      { word: 'Friend', sign: '🤝', description: 'Interlock index fingers' },
    ],
    advanced: [
      { word: 'Beautiful', sign: '✨', description: 'Open hand circling face' },
      { word: 'Important', sign: '⭐', description: 'F handshapes touching' },
      { word: 'Understand', sign: '💡', description: 'Index finger to forehead' },
      { word: 'Communication', sign: '💬', description: 'C handshapes back and forth' },
    ]
  };

  const currentCards = flashcards[currentLevel] || [];

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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">✋</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Learn ISL</h1>
                  <p className="text-sm text-slate-500">Master Indian Sign Language</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="levels" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="levels">Learning Levels</TabsTrigger>
            <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
            <TabsTrigger value="quiz">Practice Quiz</TabsTrigger>
          </TabsList>

          <TabsContent value="levels">
            <div className="grid md:grid-cols-3 gap-6">
              {levels.map((level, index) => (
                <Card key={level.id} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-xl">✋</span>
                      </div>
                      <Badge variant="secondary">{level.progress}% Complete</Badge>
                    </div>
                    <CardTitle className="text-xl">{level.name}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={level.progress} className="mb-4" />
                    <Button 
                      className={`w-full bg-gradient-to-r ${level.color} hover:shadow-lg transition-all duration-300`}
                      onClick={() => {
                        setCurrentLevel(level.id);
                        // Switch to flashcards tab
                      }}
                    >
                      {level.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flashcards">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <select 
                    className="px-4 py-2 border border-slate-200 rounded-lg bg-white"
                    value={currentLevel}
                    onChange={(e) => setCurrentLevel(e.target.value)}
                  >
                    {levels.map(level => (
                      <option key={level.id} value={level.id}>{level.name}</option>
                    ))}
                  </select>
                  <Badge variant="secondary">
                    {currentCard + 1} of {currentCards.length}
                  </Badge>
                </div>
                <Button variant="outline" onClick={() => setShowAnswer(false)}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>

              {currentCards.length > 0 && (
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="text-8xl mb-4">
                        {showAnswer ? currentCards[currentCard].sign : '❓'}
                      </div>
                      
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-slate-800">
                          {currentCards[currentCard].word}
                        </h2>
                        
                        {showAnswer && (
                          <div className="space-y-3">
                            <p className="text-lg text-slate-600">
                              {currentCards[currentCard].description}
                            </p>
                            <div className="flex items-center justify-center space-x-2 text-green-600">
                              <CheckCircle className="w-5 h-5" />
                              <span className="font-medium">Well done!</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        {!showAnswer ? (
                          <Button
                            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:shadow-lg transition-all duration-300"
                            onClick={() => setShowAnswer(true)}
                          >
                            Show Sign
                          </Button>
                        ) : (
                          <div className="flex space-x-3">
                            <Button
                              variant="outline"
                              onClick={() => {
                                setShowAnswer(false);
                                setCurrentCard(Math.max(0, currentCard - 1));
                              }}
                              disabled={currentCard === 0}
                            >
                              Previous
                            </Button>
                            <Button
                              className="bg-gradient-to-r from-purple-500 to-blue-600"
                              onClick={() => {
                                setShowAnswer(false);
                                setCurrentCard(Math.min(currentCards.length - 1, currentCard + 1));
                              }}
                              disabled={currentCard === currentCards.length - 1}
                            >
                              Next
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="mt-6">
                <Progress value={(currentCard / Math.max(1, currentCards.length - 1)) * 100} />
                <p className="text-center text-sm text-slate-500 mt-2">
                  Progress: {currentCard + 1} / {currentCards.length} cards
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="quiz">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">ISL Practice Quiz</CardTitle>
                <CardDescription>Test your sign language knowledge</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">👋</div>
                  <h3 className="text-xl font-bold mb-4">What does this sign mean?</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="text-center">
                        <div className="text-2xl mb-2">A</div>
                        <div>Hello</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="text-center">
                        <div className="text-2xl mb-2">B</div>
                        <div>Goodbye</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="text-center">
                        <div className="text-2xl mb-2">C</div>
                        <div>Thank You</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto">
                      <div className="text-center">
                        <div className="text-2xl mb-2">D</div>
                        <div>Help</div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <Progress value={25} className="mb-2" />
                  <p className="text-sm text-slate-500">Question 1 of 10</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LearnISL;
