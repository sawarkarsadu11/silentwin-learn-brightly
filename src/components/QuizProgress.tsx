
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Trophy, Star, Target, TrendingUp } from 'lucide-react';

interface QuizProgressProps {
  onBack: () => void;
}

const QuizProgress = ({ onBack }: QuizProgressProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState(null);

  const quizzes = [
    {
      id: 1,
      title: 'Mathematics - Addition',
      questions: 10,
      duration: '5 min',
      difficulty: 'Easy',
      subject: 'Math',
      icon: '🔢',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      title: 'Science - Solar System',
      questions: 15,
      duration: '8 min',
      difficulty: 'Medium',
      subject: 'Science',
      icon: '🌍',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'English - Grammar Basics',
      questions: 12,
      duration: '6 min',
      difficulty: 'Easy',
      subject: 'English',
      icon: '📚',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const sampleQuestions = [
    {
      question: "What is 5 + 3?",
      options: ["6", "7", "8", "9"],
      correct: 2,
      explanation: "5 + 3 = 8. When we add 5 and 3 together, we get 8."
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      correct: 1,
      explanation: "Mercury is the closest planet to the Sun in our solar system."
    }
  ];

  const progressData = [
    { subject: 'Mathematics', completed: 8, total: 12, score: 85 },
    { subject: 'Science', completed: 6, total: 10, score: 78 },
    { subject: 'English', completed: 10, total: 15, score: 92 },
    { subject: 'ISL', completed: 5, total: 8, score: 88 }
  ];

  const achievements = [
    { title: 'Quiz Master', description: 'Completed 20 quizzes', icon: '🏆', earned: true },
    { title: 'Perfect Score', description: 'Got 100% in 5 quizzes', icon: '⭐', earned: true },
    { title: 'Speed Demon', description: 'Completed quiz in record time', icon: '⚡', earned: false },
    { title: 'Consistent Learner', description: 'Daily quiz for 7 days', icon: '🔥', earned: true }
  ];

  const handleStartQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

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
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Quiz & Progress</h1>
                  <p className="text-sm text-slate-500">Track your learning progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!activeQuiz ? (
          <Tabs defaultValue="quizzes" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="quizzes">Available Quizzes</TabsTrigger>
              <TabsTrigger value="progress">My Progress</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="quizzes">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map((quiz) => (
                  <Card key={quiz.id} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 bg-gradient-to-r ${quiz.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-white text-xl">{quiz.icon}</span>
                        </div>
                        <Badge variant="secondary">{quiz.difficulty}</Badge>
                      </div>
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <CardDescription>{quiz.subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>📝 {quiz.questions} questions</span>
                        <span>⏱️ {quiz.duration}</span>
                      </div>
                      <Button 
                        className={`w-full bg-gradient-to-r ${quiz.color} hover:shadow-lg transition-all duration-300`}
                        onClick={() => handleStartQuiz(quiz)}
                      >
                        Start Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="progress">
              <div className="space-y-6">
                {/* Overall Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                    <CardContent className="p-6">
                      <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">24</div>
                      <div className="text-sm text-slate-500">Quizzes Completed</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                    <CardContent className="p-6">
                      <Star className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">86%</div>
                      <div className="text-sm text-slate-500">Average Score</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                    <CardContent className="p-6">
                      <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">12</div>
                      <div className="text-sm text-slate-500">Perfect Scores</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                    <CardContent className="p-6">
                      <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-slate-800">+15%</div>
                      <div className="text-sm text-slate-500">Improvement</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Subject Progress */}
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle>Subject-wise Progress</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {progressData.map((subject, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{subject.subject}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{subject.score}%</Badge>
                            <span className="text-sm text-slate-500">
                              {subject.completed}/{subject.total}
                            </span>
                          </div>
                        </div>
                        <Progress value={(subject.completed / subject.total) * 100} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg ${achievement.earned ? 'ring-2 ring-yellow-400' : 'opacity-60'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`text-4xl ${achievement.earned ? 'grayscale-0' : 'grayscale'}`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg">{achievement.title}</h3>
                          <p className="text-sm text-slate-600">{achievement.description}</p>
                          {achievement.earned && (
                            <Badge className="mt-2 bg-yellow-100 text-yellow-800">Earned!</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          // Quiz Interface
          <div className="max-w-2xl mx-auto">
            {!showResult ? (
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{activeQuiz.title}</CardTitle>
                      <CardDescription>Question {currentQuestion + 1} of {sampleQuestions.length}</CardDescription>
                    </div>
                    <Button variant="outline" onClick={() => setActiveQuiz(null)}>
                      Exit Quiz
                    </Button>
                  </div>
                  <Progress value={((currentQuestion + 1) / sampleQuestions.length) * 100} />
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl font-bold mb-6">
                      {sampleQuestions[currentQuestion]?.question}
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {sampleQuestions[currentQuestion]?.options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswer === index ? "default" : "outline"}
                          className="p-4 h-auto text-left"
                          onClick={() => handleAnswerSelect(index)}
                        >
                          <div>
                            <div className="font-bold mb-1">{String.fromCharCode(65 + index)}</div>
                            <div>{option}</div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      className="bg-gradient-to-r from-green-500 to-blue-600"
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                    >
                      {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Quiz Results
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
                  <p className="text-lg text-slate-600 mb-6">Great job on completing the quiz!</p>
                  
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                    <p className="text-slate-600">Your Score</p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" onClick={() => setActiveQuiz(null)}>
                      Back to Quizzes
                    </Button>
                    <Button className="bg-gradient-to-r from-green-500 to-blue-600">
                      Try Another Quiz
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizProgress;
