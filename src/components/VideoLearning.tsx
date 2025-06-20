
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, Eye, EyeOff, FileText, Volume2, VolumeX } from 'lucide-react';

interface VideoLearningProps {
  onBack: () => void;
}

const VideoLearning = ({ onBack }: VideoLearningProps) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showISL, setShowISL] = useState(true);
  const [showCaptions, setShowCaptions] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);

  const subjects = [
    {
      name: 'Mathematics',
      videos: [
        { title: 'Addition & Subtraction Basics', duration: '12:45', level: 'Beginner', thumbnail: '🔢' },
        { title: 'Multiplication Tables', duration: '15:30', level: 'Intermediate', thumbnail: '✖️' },
        { title: 'Fractions Made Easy', duration: '18:20', level: 'Advanced', thumbnail: '½' },
      ]
    },
    {
      name: 'Science',
      videos: [
        { title: 'The Solar System', duration: '20:15', level: 'Beginner', thumbnail: '🌍' },
        { title: 'Water Cycle Explained', duration: '14:30', level: 'Intermediate', thumbnail: '💧' },
        { title: 'Plant Life Cycle', duration: '16:45', level: 'Advanced', thumbnail: '🌱' },
      ]
    },
    {
      name: 'English',
      videos: [
        { title: 'Alphabet & Phonics', duration: '10:30', level: 'Beginner', thumbnail: '🔤' },
        { title: 'Simple Sentences', duration: '13:20', level: 'Intermediate', thumbnail: '📝' },
        { title: 'Story Reading', duration: '25:10', level: 'Advanced', thumbnail: '📚' },
      ]
    }
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🎥</span>
                </div>
                <div>
                  <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Video Learning</h1>
                  <p className="text-sm text-slate-500">Interactive video lessons with ISL Avatar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {!selectedVideo ? (
          // Video Library
          <Tabs defaultValue="mathematics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm">
              <TabsTrigger value="mathematics">Mathematics</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="english">English</TabsTrigger>
            </TabsList>

            {subjects.map((subject) => (
              <TabsContent key={subject.name.toLowerCase()} value={subject.name.toLowerCase()}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subject.videos.map((video, index) => (
                    <Card key={index} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          <div className="text-6xl">{video.thumbnail}</div>
                          <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                              size="lg"
                              className="bg-white/90 text-blue-600 hover:bg-white"
                              onClick={() => setSelectedVideo(video)}
                            >
                              <Play className="w-6 h-6" />
                            </Button>
                          </div>
                        </div>
                        <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-sm text-slate-500 mb-3">
                          <span>⏱️ {video.duration}</span>
                          <Badge variant="secondary">{video.level}</Badge>
                        </div>
                        <Button
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600"
                          onClick={() => setSelectedVideo(video)}
                        >
                          Watch Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          // Video Player
          <div className="space-y-6">
            <Button variant="ghost" onClick={() => setSelectedVideo(null)}>
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Library
            </Button>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Video Area */}
              <div className="lg:col-span-2">
                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-8xl mb-4">{selectedVideo.thumbnail}</div>
                          <p className="text-xl">Video Player Placeholder</p>
                          <p className="text-sm opacity-70">Interactive video with ISL overlay</p>
                        </div>
                      </div>
                      
                      {/* ISL Avatar Overlay */}
                      {showISL && (
                        <div className="absolute bottom-4 right-4 w-32 h-32 bg-white/90 rounded-xl flex items-center justify-center">
                          <div className="text-4xl">✋</div>
                        </div>
                      )}

                      {/* Captions */}
                      {showCaptions && (
                        <div className="absolute bottom-4 left-4 right-36 bg-black/80 text-white p-3 rounded-lg">
                          <p className="text-sm">Welcome to today's lesson on {selectedVideo.title}...</p>
                        </div>
                      )}
                    </div>

                    {/* Video Controls */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-bold text-xl">{selectedVideo.title}</h2>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowISL(!showISL)}
                        >
                          {showISL ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                          ISL
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowCaptions(!showCaptions)}
                        >
                          {showCaptions ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                          CC
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowTranscript(!showTranscript)}
                        >
                          <FileText className="w-4 h-4" />
                          Transcript
                        </Button>
                      </div>
                    </div>

                    <Progress value={35} className="mb-4" />
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>4:20 / {selectedVideo.duration}</span>
                      <span>Speed: 1.0x</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {showTranscript && (
                  <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">Transcript</CardTitle>
                    </CardHeader>
                    <CardContent className="max-h-96 overflow-y-auto">
                      <div className="space-y-3 text-sm">
                        <p className="p-2 bg-blue-50 rounded">
                          <span className="text-blue-600 font-medium">[00:15]</span> Welcome to today's lesson on {selectedVideo.title}.
                        </p>
                        <p className="p-2 hover:bg-slate-50 rounded cursor-pointer">
                          <span className="text-slate-600 font-medium">[01:30]</span> Let's start with the basic concepts...
                        </p>
                        <p className="p-2 hover:bg-slate-50 rounded cursor-pointer">
                          <span className="text-slate-600 font-medium">[02:45]</span> As you can see in this example...
                        </p>
                        <p className="p-2 hover:bg-slate-50 rounded cursor-pointer">
                          <span className="text-slate-600 font-medium">[04:20]</span> Now let's practice together...
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Notes & Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      📝 Download Notes
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      📊 Practice Quiz
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🎯 Related Videos
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoLearning;
