import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DashboardProps {
  onNavigate: (page: string) => void;
  onShowClassBoardSelection?: () => void;
  showClassBoardSelection?: boolean;
  initialShowSelection?: boolean;
  onClassBoardSelected?: () => void;
}

const Dashboard = ({ onNavigate, onShowClassBoardSelection, showClassBoardSelection, initialShowSelection, onClassBoardSelected }: DashboardProps) => {
  const [selectedClass, setSelectedClass] = useState(() => localStorage.getItem('silentwin_class') || '');
  const [selectedBoard, setSelectedBoard] = useState(() => localStorage.getItem('silentwin_board') || '');
  const [showSelection, setShowSelection] = useState(initialShowSelection || false);

  // Show selection if forced by prop or not selected (never on back arrow)
  const shouldShowSelection = showClassBoardSelection || showSelection || (!selectedClass && !selectedBoard);

  const handleClassChange = (value: string) => {
    setSelectedClass(value);
    localStorage.setItem('silentwin_class', value);
  };
  const handleBoardChange = (value: string) => {
    setSelectedBoard(value);
    localStorage.setItem('silentwin_board', value);
  };
  const handleSelectionDone = () => {
    setShowSelection(false);
    if (onClassBoardSelected) onClassBoardSelected();
  };

  // On mount, initialize from localStorage if available
  useEffect(() => {
    const storedClass = localStorage.getItem('silentwin_class');
    const storedBoard = localStorage.getItem('silentwin_board');
    if (storedClass) setSelectedClass(storedClass);
    if (storedBoard) setSelectedBoard(storedBoard);
  }, []);

  // If selection is done, call handler
  useEffect(() => {
    if (selectedClass && selectedBoard && shouldShowSelection) {
      handleSelectionDone();
    }
  }, [selectedClass, selectedBoard]);

  const subjects = [
    { 
      name: 'Mathematics', 
      progress: 75, 
      icon: '🔢', 
      color: 'from-blue-400 to-blue-600',
      topics: ['Addition & Subtraction', 'Multiplication', 'Fractions', 'Geometry']
    },
    { 
      name: 'Science', 
      progress: 60, 
      icon: '🔬', 
      color: 'from-green-400 to-green-600',
      topics: ['Solar System', 'Water Cycle', 'Plant Life', 'Animals']
    },
    { 
      name: 'English', 
      progress: 85, 
      icon: '📚', 
      color: 'from-purple-400 to-purple-600',
      topics: ['Alphabet', 'Grammar', 'Reading', 'Writing']
    },
    { 
      name: 'Social Studies', 
      progress: 45, 
      icon: '🌍', 
      color: 'from-teal-400 to-teal-600',
      topics: ['Geography', 'History', 'Civics', 'Culture']
    },
    { 
      name: 'Hindi', 
      progress: 70, 
      icon: '✍️', 
      color: 'from-indigo-400 to-indigo-600',
      topics: ['Letters', 'Words', 'Stories', 'Poems']
    },
    { 
      name: 'ISL Learning', 
      progress: 90, 
      icon: '✋', 
      color: 'from-emerald-400 to-emerald-600',
      topics: ['Basic Signs', 'Numbers', 'Emotions', 'Daily Life']
    },
  ];

  const features = [
    {
      title: 'Learn ISL',
      description: 'Master Indian Sign Language',
      icon: '✋',
      color: 'from-purple-400 to-purple-600',
      page: 'learn-isl'
    },
    {
      title: 'Quiz & Progress',
      description: 'Track your learning progress',
      icon: '📊',
      color: 'from-green-400 to-green-600',
      page: 'quiz-progress'
    },
    {
      title: 'SilentWin Friends',
      description: 'Connect with peers safely',
      icon: '👫',
      color: 'from-pink-400 to-pink-600',
      page: 'friends'
    },
    {
      title: 'Text to Sign',
      description: 'Convert text to sign language',
      icon: '🔄',
      color: 'from-teal-400 to-teal-600',
      page: 'text-to-sign'
    }
  ];

  const recentActivities = [
    { activity: 'Completed Math Quiz', time: '2 hours ago', score: '8/10', color: 'bg-blue-100 text-blue-800' },
    { activity: 'Watched Science Video', time: 'Yesterday', duration: '15 min', color: 'bg-green-100 text-green-800' },
    { activity: 'ISL Practice Session', time: '2 days ago', progress: 'Advanced Level', color: 'bg-purple-100 text-purple-800' },
    { activity: 'Connected with Study Group', time: '3 days ago', type: 'Social', color: 'bg-teal-100 text-teal-800' },
  ];

  const achievements = [
    { title: 'Math Master', description: 'Completed 50 math problems', icon: '🏆', color: 'from-blue-400 to-purple-500' },
    { title: 'Sign Language Star', description: 'Mastered 100 ISL signs', icon: '⭐', color: 'from-purple-400 to-pink-500' },
    { title: 'Quiz Champion', description: 'Perfect score in 5 quizzes', icon: '🎯', color: 'from-blue-400 to-cyan-500' },
    { title: 'Study Streak', description: '7 days continuous learning', icon: '🔥', color: 'from-emerald-400 to-teal-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">✋</span>
              </div>
              <div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">SilentWin</h1>
                <p className="text-sm text-slate-500">Learn Beyond Sound</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="border-slate-200 hover:bg-slate-50">
                Profile Settings
              </Button>
              {(!shouldShowSelection && onShowClassBoardSelection) && (
                <Button variant="secondary" onClick={() => { setShowSelection(true); onShowClassBoardSelection(); }}>
                  Change Class/Board
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Class and Board Selection */}
        {shouldShowSelection && (
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Choose Your Learning Path</CardTitle>
              <CardDescription>Select your class and board to get personalized content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Class
                  </label>
                  <Select value={selectedClass} onValueChange={handleClassChange}>
                    <SelectTrigger className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50">
                      <SelectValue placeholder="Choose your class" />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-blue-50 via-purple-50 to-white/90">
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
                  <Select value={selectedBoard} onValueChange={handleBoardChange}>
                    <SelectTrigger className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-50">
                      <SelectValue placeholder="Choose your board" />
                    </SelectTrigger>
                    <SelectContent className="bg-gradient-to-br from-blue-50 via-purple-50 to-white/90">
                      <SelectItem value="cbse">CBSE</SelectItem>
                      <SelectItem value="state">State Board</SelectItem>
                      <SelectItem value="icse">ICSE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {selectedClass && selectedBoard && (
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-lg">
                    Perfect! Let's start learning 🚀
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {!shouldShowSelection && selectedClass && selectedBoard && (
          <>
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">12</div>
                  <div className="text-sm text-slate-500">Lessons Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">8</div>
                  <div className="text-sm text-slate-500">Quizzes Passed</div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4</div>
                  <div className="text-sm text-slate-500">Badges Earned</div>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">7</div>
                  <div className="text-sm text-slate-500">Day Streak</div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="subjects" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm">
                <TabsTrigger value="subjects">My Subjects</TabsTrigger>
                <TabsTrigger value="features">Special Features</TabsTrigger>
                <TabsTrigger value="activities">Recent Activity</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="friends">Friends</TabsTrigger>
              </TabsList>

              <TabsContent value="subjects">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subjects.map((subject, index) => (
                    <Card 
                      key={index} 
                      className="subject-card group bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200"
                      onClick={() => onNavigate('video-learning')}
                    >
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
                        <div className="mb-4">
                          <p className="text-sm text-slate-600 mb-2">Topics:</p>
                          <div className="flex flex-wrap gap-1">
                            {subject.topics.slice(0, 3).map((topic, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                            {subject.topics.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{subject.topics.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300">
                          Start Learning
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="features">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <Card 
                      key={index} 
                      className="bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 border border-white/20 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => onNavigate(feature.page)}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-3xl text-white">{feature.icon}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                        <p className="text-slate-600 text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activities">
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
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
                          <Badge className={activity.color}>
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
                    <Card key={index} className="bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200 border border-white/20 rounded-2xl shadow-lg overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center`}>
                            <span className="text-3xl">{achievement.icon}</span>
                          </div>
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

              <TabsContent value="friends">
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle>SilentWin Friends</CardTitle>
                    <CardDescription>Connect with your learning community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">👫</div>
                      <h3 className="text-xl font-bold mb-2">Connect with Friends</h3>
                      <p className="text-slate-600 mb-4">Join study groups, chat safely, and learn together</p>
                      <Button 
                        onClick={() => onNavigate('friends')}
                        className="bg-gradient-to-r from-pink-500 to-purple-600"
                      >
                        Explore Friends
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
