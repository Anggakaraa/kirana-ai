"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, BookOpen, Users, MessageSquare, Download, ExternalLink, Play, Clock, Globe } from "lucide-react"

const upcomingEvents = [
  {
    title: "Global Education Leadership Retreat",
    date: "March 15-17, 2025",
    location: "Singapore",
    type: "In-Person",
    spots: "12 spots left",
    description: "3-day intensive on data-driven decision making with education ministers from 15 countries",
  },
  {
    title: "AI in Education Policy Workshop",
    date: "February 8, 2025",
    location: "Virtual",
    type: "Online",
    spots: "Open",
    description: "Learn how to develop ethical AI policies for education systems",
  },
  {
    title: "Equity Strategy Bootcamp",
    date: "April 22-24, 2025",
    location: "Nairobi, Kenya",
    type: "In-Person",
    spots: "8 spots left",
    description: "Hands-on workshop on designing and implementing equity interventions",
  },
]

const learningTracks = [
  {
    title: "Data-Driven Policymaking Fundamentals",
    duration: "4 hours",
    modules: 6,
    level: "Beginner",
    description: "Learn to use education data for evidence-based policy decisions",
    progress: 0,
  },
  {
    title: "Equity Strategy Design",
    duration: "6 hours",
    modules: 8,
    level: "Intermediate",
    description: "Design interventions that close achievement gaps and improve access",
    progress: 25,
  },
  {
    title: "AI in Education: Policy and Practice",
    duration: "5 hours",
    modules: 7,
    level: "Advanced",
    description: "Navigate the opportunities and challenges of AI in education systems",
    progress: 0,
  },
  {
    title: "Teacher Policy and Workforce Development",
    duration: "7 hours",
    modules: 10,
    level: "Intermediate",
    description: "Build effective teacher recruitment, training, and retention strategies",
    progress: 60,
  },
]

const curatedReports = [
  {
    title: "Education at a Glance 2024",
    organization: "OECD",
    type: "Annual Report",
    pages: "450 pages",
    description: "Comprehensive analysis of education systems across OECD countries",
    tags: ["Global Trends", "Comparative Analysis"],
  },
  {
    title: "The State of Global Learning Poverty",
    organization: "World Bank",
    type: "Research Brief",
    pages: "32 pages",
    description: "Latest data on learning poverty and recovery post-pandemic",
    tags: ["Learning Outcomes", "COVID Recovery"],
  },
  {
    title: "Teaching at the Right Level: Evidence from Randomized Evaluations",
    organization: "J-PAL",
    type: "Policy Insight",
    pages: "28 pages",
    description: "Evidence on targeted instruction approaches for improving learning",
    tags: ["Pedagogy", "RCT Evidence"],
  },
  {
    title: "Global Education Monitoring Report 2024",
    organization: "UNESCO",
    type: "Annual Report",
    pages: "380 pages",
    description: "Progress toward SDG 4 and technology in education",
    tags: ["SDG 4", "Technology"],
  },
]

const experts = [
  {
    name: "Dr. Sarah Chen",
    expertise: "Education Technology Policy",
    organization: "Stanford University",
    experience: "15+ years",
    availability: "Available",
  },
  {
    name: "Prof. James Tooley",
    expertise: "Private Education & Innovation",
    organization: "University of Buckingham",
    experience: "20+ years",
    availability: "Limited",
  },
  {
    name: "Dr. Rukmini Banerji",
    expertise: "Learning Assessment & Pedagogy",
    organization: "Pratham",
    experience: "25+ years",
    availability: "Available",
  },
  {
    name: "Dr. Luis Crouch",
    expertise: "Education Systems Reform",
    organization: "RTI International",
    experience: "30+ years",
    availability: "Booked",
  },
]

export default function LearningHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">🎓 EduPilot Learning Hub</h1>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Accelerate your impact through continuous learning, peer connection, and expert guidance
            </p>
          </div>

          <Tabs defaultValue="events" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="tracks">Learning Tracks</TabsTrigger>
              <TabsTrigger value="reading">Reading Shelf</TabsTrigger>
              <TabsTrigger value="experts">Talk to Expert</TabsTrigger>
              <TabsTrigger value="playbooks">Playbooks</TabsTrigger>
              <TabsTrigger value="forum">Forum</TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Calendar className="h-5 w-5" />
                    🗓️ Leadership Retreats & Events
                  </CardTitle>
                  <CardDescription>
                    Connect with global education leaders through exclusive events and training programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-blue-900">{event.title}</h3>
                            <Badge variant={event.type === "In-Person" ? "default" : "secondary"}>{event.type}</Badge>
                          </div>
                          <div className="text-sm text-blue-700 mb-2">
                            📅 {event.date} • 📍 {event.location}
                          </div>
                          <p className="text-sm text-gray-700 mb-3">{event.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-green-600">✅ {event.spots}</span>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              Register Interest
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tracks" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Play className="h-5 w-5" />💻 Online Learning Tracks
                  </CardTitle>
                  <CardDescription>
                    Self-paced modules on data-driven policymaking, equity strategy, AI in education
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {learningTracks.map((track, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-blue-900 text-sm">{track.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {track.level}
                            </Badge>
                          </div>
                          <div className="text-xs text-blue-700 mb-2">
                            <Clock className="inline h-3 w-3 mr-1" />
                            {track.duration} • {track.modules} modules
                          </div>
                          <p className="text-xs text-gray-700 mb-3">{track.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span>Progress</span>
                              <span>{track.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${track.progress}%` }}
                              ></div>
                            </div>
                            <Button size="sm" variant="outline" className="w-full text-xs">
                              {track.progress > 0 ? "Continue" : "Start"} Learning
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reading" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <BookOpen className="h-5 w-5" />📚 Curated Reading Shelf
                  </CardTitle>
                  <CardDescription>Selected reports from OECD, RISE, J-PAL, GEM, and more</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {curatedReports.map((report, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-blue-900">{report.title}</h3>
                            <Badge variant="outline">{report.organization}</Badge>
                          </div>
                          <div className="text-sm text-blue-700 mb-2">
                            {report.type} • {report.pages}
                          </div>
                          <p className="text-sm text-gray-700 mb-3">{report.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-1">
                              {report.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experts" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Users className="h-5 w-5" />
                    🧑‍💼 Talk to an Expert
                  </CardTitle>
                  <CardDescription>Request to speak with global policy or research experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {experts.map((expert, index) => (
                      <Card key={index} className="border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-blue-900">{expert.name}</h3>
                            <Badge
                              variant={
                                expert.availability === "Available"
                                  ? "default"
                                  : expert.availability === "Limited"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {expert.availability}
                            </Badge>
                          </div>
                          <div className="text-sm text-blue-700 mb-1">{expert.expertise}</div>
                          <div className="text-xs text-gray-600 mb-2">
                            {expert.organization} • {expert.experience}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full"
                            disabled={expert.availability === "Booked"}
                          >
                            Request Consultation
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="playbooks" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Globe className="h-5 w-5" />🧠 Peer Stories & Playbooks
                  </CardTitle>
                  <CardDescription>Downloadable country case studies with lessons learned</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <BookOpen className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Explore Country Success Stories</h3>
                    <p className="text-blue-700 mb-6">
                      Access our comprehensive collection of peer country playbooks and case studies
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Peer Playbook
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forum" className="space-y-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <MessageSquare className="h-5 w-5" />💬 Community Forum (Coming Soon)
                  </CardTitle>
                  <CardDescription>A discussion space for education practitioners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <MessageSquare className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Community Forum Coming Soon</h3>
                    <p className="text-blue-700 mb-6 max-w-md mx-auto">
                      Connect with education leaders worldwide, share experiences, and get advice from peers facing
                      similar challenges.
                    </p>
                    <Button variant="outline" className="border-blue-600 text-blue-600">
                      Join Waitlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
