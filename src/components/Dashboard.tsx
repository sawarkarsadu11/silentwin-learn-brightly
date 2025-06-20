
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');

  const subjects = [
    { name: 'Mathematics', progress: 75, icon: '🔢', color: 'from-blue-400 to-blue-600' },
    { name: 'Science', progress: 60, icon: '🔬', color: 'from-green-400 to-green-600' },
    { name: 'English', progress: 85, icon: '📚', color: 'from-purple-400 to-purple-600' },
    { name: 'Social Studies', progress: 45, icon: '🌍', color: 'from-orange-400 to-orange-600' },
    { name: 'Hindi', progress: 70, icon: '✍️', color: 'from-pink-400 to-pink-600' },
    { name: 'ISL Learning', progress: 90, icon: '✋', color: 'from-teal-400 to-teal-600' },
  ];

  const recentActivities = [
    { activity: 'Completed Math Quiz', time: '2 hours ago', score: '8/10' },
    { activity: 'Watched Science Video', time: 'Yesterday', duration: '15 min' },
    { activity: 'ISL Practice Session', time: '2 days ago', progress: 'Advanced Level' },
    { activity: 'Connected with Study Group', time: '3 days ago', type: 'Social' },
  ];

  const achievements = [
    { title: 'Math Master', description: 'Completed 50 math problems', icon: '🏆' },
    { title: 'Sign Language Star', description: 'Mastered 100 ISL signs', icon: '⭐' },
    { title: 'Quiz Champion', description: 'Perfect score in 5 quizzes', icon: '🎯' },
    { title: 'Study Streak', description: '7 days continuous learning', icon: '🔥' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="font-bold text-xl gradient-text">SilentWin Dashboard</h1>
                <p className="text-sm text-slate-500">Welcome back, Student!</p>
              </div>
            </div>
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
              Profile Settings
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Class and Board Selection */}
        {(!selectedClass || !selectedBoard) && (
          <Card className="mb-8 feature-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text">Choose Your Learning Path</CardTitle>
              <CardDescription>Select your class and board to get personalized content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Class
                  </label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger className="bg-white/70">
                      <SelectValue placeholder="Choose your class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery">Nursery</SelectItem>
                      <SelectItem value="class1">Class 1</SelectItem>
                      <SelectItem value="class2">Class 2</SelectItem>
                      <SelectItem value="class3">Class 3</SelectItem>
                      <SelectItem value="class4">Class 4</SelectItem>
                      <SelectItem value="class5">Class 5</SelectItem>
                      <SelectItem value="class6">Class 6</SelectItem>
                      <SelectItem value="class7">Class 7</SelectItem>
                      <SelectItem value="class8">Class 8</SelectItem>
                      <SelectItem value="class9">Class 9</SelectItem>
                      <SelectItem value="class10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Board
                  </label>
                  <Select value={selectedBoard} onValueChange={setSelectedBoard}>
                    <SelectTrigger className="bg-white/70">
                      <SelectValue placeholder="Choose your board" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cbse">CBSE</SelectItem>
                      <SelectItem value="state">State Board</SelectItem>
                      <SelectItem value="icse">ICSE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {selectedClass && selectedBoard && (
                <div className="text-center">
                  <Badge className="bg-gradient-primary text-white px-6 py-2 text-lg">
                    Perfect! Let's start learning 🚀
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {selectedClass && selectedBoard && (
          <>
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text">12</div>
                  <div className="text-sm text-slate-500">Lessons Completed</div>
                </CardContent>
              </Card>
              <Card className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text">8</div>
                  <div className="text-sm text-slate-500">Quizzes Passed</div>
                </CardContent>
              </Card>
              <Card className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text">4</div>
                  <div className="text-sm text-slate-500">Badges Earned</div>
                </CardContent>
              </Card>
              <Card className="feature-card text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold gradient-text">7</div>
                  <div className="text-sm text-slate-500">Day Streak</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="subjects" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="subjects">My Subjects</TabsTrigger>
                <TabsTrigger value="activities">Recent Activity</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="features">All Features</TabsTrigger>
              </TabsList>

              <TabsContent value="subjects">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <Card key={index} className="feature-card group hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 bg-gradient-to-r ${subject.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl">{subject.icon}</span>
                          </div>
                          <div>
                            <CardTitle className="text-lg">{subject.name}</CardTitle>
                            <CardDescription>{subject.progress}% Complete</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Progress value={subject.progress} className="mb-4" />
                        <Button className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300">
                          Continue Learning
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activities">
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Your learning journey so far</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                          <div>
                            <div className="font-medium text-slate-800">{activity.activity}</div>
                            <div className="text-sm text-slate-500">{activity.time}</div>
                          </div>
                          <Badge variant="secondary">
                            {activity.score || activity.duration || activity.progress || activity.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements">
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <Card key={index} className="feature-card">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-4xl">{achievement.icon}</div>
                          <div>
                            <h3 className="font-bold text-slate-800">{achievement.title}</h3>
                            <p className="text-sm text-slate-600">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="features">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="feature-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl text-white">🎥</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Video Learning</h3>
                      <p className="text-slate-600 text-sm">Interactive video lessons with ISL</p>
                    </CardContent>
                  </Card>

                  <Card className="feature-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl text-white">✋</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Learn ISL</h3>
                      <p className="text-slate-600 text-sm">Master Indian Sign Language</p>
                    </CardContent>
                  </Card>

                  <Card className="feature-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl text-white">📊</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Quiz & Progress</h3>
                      <p className="text-slate-600 text-sm">Track your learning progress</p>
                    </CardContent>
                  </Card>

                  <Card className="feature-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl text-white">👫</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">SilentWin Friends</h3>
                      <p className="text-slate-600 text-sm">Connect with peers safely</p>
                    </CardContent>
                  </Card>

                  <Card className="feature-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl text-white">🤖</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">AI Chatbot</h3>
                      <p className="text-slate-600 text-sm">Get instant help anytime</p>
                    </CardContent>
                  </Card>

                  <Card className="feature-card group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl text-white">🔄</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">Text to Sign</h3>
                      <p className="text-slate-600 text-sm">Convert text to sign language</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
