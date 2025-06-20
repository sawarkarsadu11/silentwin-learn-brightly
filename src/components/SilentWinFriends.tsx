
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { ArrowLeft, MessageCircle, Video, Users, UserPlus, Search } from 'lucide-react';

interface SilentWinFriendsProps {
  onBack: () => void;
}

const SilentWinFriends = ({ onBack }: SilentWinFriendsProps) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');

  const friends = [
    { id: 1, name: 'Priya', age: 12, grade: 'Class 7', status: 'online', avatar: '👧', lastSeen: 'Online' },
    { id: 2, name: 'Arjun', age: 11, grade: 'Class 6', status: 'offline', avatar: '👦', lastSeen: '2 hours ago' },
    { id: 3, name: 'Meera', age: 13, grade: 'Class 8', status: 'online', avatar: '👧', lastSeen: 'Online' },
    { id: 4, name: 'Karan', age: 12, grade: 'Class 7', status: 'away', avatar: '👦', lastSeen: '30 min ago' },
  ];

  const studyGroups = [
    { id: 1, name: 'Math Wizards', members: 8, subject: 'Mathematics', active: true },
    { id: 2, name: 'Science Squad', members: 12, subject: 'Science', active: true },
    { id: 3, name: 'English Explorers', members: 6, subject: 'English', active: false },
    { id: 4, name: 'ISL Learners', members: 15, subject: 'Sign Language', active: true },
  ];

  const messages = [
    { id: 1, sender: 'Priya', message: 'Hi! How are you doing with the math homework?', time: '10:30 AM', isSelf: false },
    { id: 2, sender: 'You', message: 'I need help with question 5. Can you explain?', time: '10:32 AM', isSelf: true },
    { id: 3, sender: 'Priya', message: 'Sure! Let me send you a video explanation in ISL', time: '10:33 AM', isSelf: false },
    { id: 4, sender: 'Priya', message: '🎥 Video explaining multiplication problem', time: '10:35 AM', isSelf: false },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('');
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
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">👫</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">SilentWin Friends</h1>
                  <p className="text-sm text-slate-500">Connect with peers safely</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!selectedChat ? (
          <Tabs defaultValue="friends" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="friends">My Friends</TabsTrigger>
              <TabsTrigger value="groups">Study Groups</TabsTrigger>
              <TabsTrigger value="discover">Discover</TabsTrigger>
            </TabsList>

            <TabsContent value="friends">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Friends List */}
                <div className="lg:col-span-2">
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Friends ({friends.length})</span>
                        <Button size="sm" className="bg-gradient-to-r from-pink-500 to-purple-600">
                          <UserPlus className="w-4 h-4 mr-2" />
                          Add Friend
                        </Button>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {friends.map((friend) => (
                        <div key={friend.id} className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-pointer">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-2xl">
                              {friend.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              friend.status === 'online' ? 'bg-green-400' : 
                              friend.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                            }`}></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold">{friend.name}</h3>
                            <p className="text-sm text-slate-500">{friend.grade} • {friend.lastSeen}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedChat(friend)}
                            >
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Video className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Group Chat
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Video className="w-4 h-4 mr-2" />
                        Video Call
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Users className="w-4 h-4 mr-2" />
                        Create Study Room
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Safety Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-slate-600">
                      <p>🛡️ Only connect with verified students</p>
                      <p>👥 Study in supervised groups</p>
                      <p>🚫 Never share personal information</p>
                      <p>📢 Report any inappropriate behavior</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="groups">
              <div className="grid md:grid-cols-2 gap-6">
                {studyGroups.map((group) => (
                  <Card key={group.id} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-lg">{group.name}</CardTitle>
                          <CardDescription>{group.subject}</CardDescription>
                        </div>
                        <Badge variant={group.active ? "default" : "secondary"}>
                          {group.active ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>👥 {group.members} members</span>
                        <span>{group.active ? '🟢 Online now' : '⚫ Offline'}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600">
                        {group.active ? 'Join Group' : 'Request to Join'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="discover">
              <div className="space-y-6">
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle>Find Study Partners</CardTitle>
                    <CardDescription>Connect with students in your grade and subjects</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex space-x-4">
                      <Input placeholder="Search by name, grade, or subject..." className="flex-1" />
                      <Button className="bg-gradient-to-r from-pink-500 to-purple-600">
                        <Search className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="bg-white/50 border border-white/30">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
                              👧
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold">Ananya</h4>
                              <p className="text-sm text-slate-500">Class 7 • Math & Science</p>
                            </div>
                            <Button size="sm" variant="outline">
                              <UserPlus className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-white/50 border border-white/30">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                              👦
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold">Rahul</h4>
                              <p className="text-sm text-slate-500">Class 8 • English & ISL</p>
                            </div>
                            <Button size="sm" variant="outline">
                              <UserPlus className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          // Chat Interface
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
              {/* Chat Header */}
              <CardHeader className="border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" onClick={() => setSelectedChat(null)}>
                      <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-xl">
                      {selectedChat.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold">{selectedChat.name}</h3>
                      <p className="text-sm text-slate-500">{selectedChat.lastSeen}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="p-0">
                <div className="h-96 overflow-y-auto p-6 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isSelf ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        msg.isSelf 
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                          : 'bg-white/70 text-slate-800'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.isSelf ? 'text-white/70' : 'text-slate-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="border-t border-slate-200 p-4">
                  <div className="flex space-x-3">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      className="bg-gradient-to-r from-pink-500 to-purple-600"
                      onClick={handleSendMessage}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SilentWinFriends;
