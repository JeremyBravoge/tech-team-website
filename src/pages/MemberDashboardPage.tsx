
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, MessageSquare, FileText, CalendarDays, Heart, Settings, PlusCircle } from "lucide-react";

const MemberDashboardPage = () => {
  return (
    <div>
      <PageHeader
        title="Member Dashboard"
        description="Manage your profile, content, and interactions with the community"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="Profile"
                        className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <CardTitle>Alex Johnson</CardTitle>
                  <CardDescription>Software Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Member Since</span>
                      <span className="text-sm font-medium">June 2022</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Contributions</span>
                      <span className="text-sm font-medium">47</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Forum Posts</span>
                      <span className="text-sm font-medium">125</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Events Attended</span>
                      <span className="text-sm font-medium">8</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Settings className="h-4 w-4" /> Edit Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md text-gray-600 hover:text-techblue">
                      <MessageSquare className="h-4 w-4" /> My Discussions
                    </a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md text-gray-600 hover:text-techblue">
                      <FileText className="h-4 w-4" /> My Content
                    </a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md text-gray-600 hover:text-techblue">
                      <CalendarDays className="h-4 w-4" /> My Events
                    </a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md text-gray-600 hover:text-techblue">
                      <Heart className="h-4 w-4" /> Saved Items
                    </a>
                    <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md text-gray-600 hover:text-techblue">
                      <Settings className="h-4 w-4" /> Account Settings
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="content">My Content</TabsTrigger>
                  <TabsTrigger value="submissions">Submissions</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-gray-500">Posts</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-techblue">125</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-gray-500">Upcoming Events</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-techblue">3</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-gray-500">Contributions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-3xl font-bold text-techblue">47</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
                            <MessageSquare className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">You replied to "GPT-4 and Its Implications for Software Development"</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
                            <CalendarDays className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">You RSVP'd to "Annual Tech Conference 2023"</p>
                            <p className="text-sm text-gray-500">Yesterday</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="bg-green-100 text-green-600 p-2 rounded-full">
                            <Heart className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-medium">You liked "Building Your First React Application: A Step-by-Step Guide"</p>
                            <p className="text-sm text-gray-500">2 days ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-techblue/10 text-techblue p-3 rounded-md shrink-0">
                            <CalendarDays className="h-6 w-6" />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">Annual Tech Conference 2023</p>
                            <p className="text-sm text-gray-500">June 15-17, 2023 • San Francisco</p>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-techblue/10 text-techblue p-3 rounded-md shrink-0">
                            <CalendarDays className="h-6 w-6" />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">Frontend Development Workshop</p>
                            <p className="text-sm text-gray-500">May 25, 2023 • Virtual</p>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="bg-techblue/10 text-techblue p-3 rounded-md shrink-0">
                            <CalendarDays className="h-6 w-6" />
                          </div>
                          <div className="flex-grow">
                            <p className="font-medium">AI and Machine Learning Meetup</p>
                            <p className="text-sm text-gray-500">June 5, 2023 • Tech Hub Downtown</p>
                          </div>
                          <Button variant="outline" size="sm">View</Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View All Events</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="content">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle>My Content</CardTitle>
                        <Button className="bg-techblue hover:bg-techblue-dark flex items-center gap-2">
                          <PlusCircle className="h-4 w-4" /> Create New
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="articles">
                        <TabsList className="mb-4">
                          <TabsTrigger value="articles">Articles</TabsTrigger>
                          <TabsTrigger value="discussions">Discussions</TabsTrigger>
                          <TabsTrigger value="projects">Projects</TabsTrigger>
                        </TabsList>
                        <TabsContent value="articles">
                          <div className="space-y-4">
                            <div className="p-4 border rounded-md hover:bg-gray-50">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="font-medium">10 Tips for Better Code Reviews</h3>
                                <span className="text-xs text-gray-500">Apr 15, 2023</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">Improve your code review process with these practical tips and best practices...</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">243 views • 18 comments</span>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">Edit</Button>
                                  <Button variant="outline" size="sm" className="text-gray-500">Delete</Button>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 border rounded-md hover:bg-gray-50">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className="font-medium">Getting Started with TypeScript</h3>
                                <span className="text-xs text-gray-500">Mar 22, 2023</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">A beginner's guide to TypeScript, covering basic concepts and setup...</p>
                              <div className="flex justify-between items-center">
                                <span className="text-xs text-gray-500">187 views • 12 comments</span>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm">Edit</Button>
                                  <Button variant="outline" size="sm" className="text-gray-500">Delete</Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="discussions">
                          <div className="p-8 text-center text-gray-500">
                            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-30" />
                            <p className="mb-4">You haven't started any discussions yet.</p>
                            <Button className="bg-techblue hover:bg-techblue-dark">Start a Discussion</Button>
                          </div>
                        </TabsContent>
                        <TabsContent value="projects">
                          <div className="p-8 text-center text-gray-500">
                            <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
                            <p className="mb-4">You haven't submitted any projects yet.</p>
                            <Button className="bg-techblue hover:bg-techblue-dark">Submit a Project</Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="submissions">
                  <Card>
                    <CardHeader>
                      <CardTitle>Content Submissions</CardTitle>
                      <CardDescription>
                        Submit content to share with the Tech Team community
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <div className="bg-techblue/10 text-techblue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                            <FileText className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Submit an Article</h3>
                          <p className="text-gray-600 mb-6">
                            Share your knowledge through tutorials, how-to guides, or industry insights.
                          </p>
                          <Button className="bg-techblue hover:bg-techblue-dark">New Article</Button>
                        </div>
                        <div className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <div className="bg-techblue/10 text-techblue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                            <MessageSquare className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Start a Discussion</h3>
                          <p className="text-gray-600 mb-6">
                            Initiate conversations on tech topics or ask questions to the community.
                          </p>
                          <Button className="bg-techblue hover:bg-techblue-dark">New Discussion</Button>
                        </div>
                        <div className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <div className="bg-techblue/10 text-techblue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                            <CalendarDays className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Suggest an Event</h3>
                          <p className="text-gray-600 mb-6">
                            Propose a workshop, webinar, or meetup for the Tech Team community.
                          </p>
                          <Button className="bg-techblue hover:bg-techblue-dark">Suggest Event</Button>
                        </div>
                        <div className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                          <div className="bg-techblue/10 text-techblue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 11 2-2-2-2"/><path d="M11 13h4"/><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Share a Project</h3>
                          <p className="text-gray-600 mb-6">
                            Showcase your work and get feedback from the tech community.
                          </p>
                          <Button className="bg-techblue hover:bg-techblue-dark">Submit Project</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="mt-8">
                    <CardHeader>
                      <CardTitle>Poll Ideas</CardTitle>
                      <CardDescription>
                        Help us decide what content to create next
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <h3 className="font-medium">Which topic would you like to see covered in our next workshop?</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input type="radio" id="topic1" name="topic" className="mr-2" />
                              <label htmlFor="topic1">Advanced React Patterns</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="topic2" name="topic" className="mr-2" />
                              <label htmlFor="topic2">Introduction to Quantum Computing</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="topic3" name="topic" className="mr-2" />
                              <label htmlFor="topic3">Cybersecurity Best Practices</label>
                            </div>
                            <div className="flex items-center">
                              <input type="radio" id="topic4" name="topic" className="mr-2" />
                              <label htmlFor="topic4">Building AR/VR Applications</label>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-techblue hover:bg-techblue-dark">Vote</Button>
                        <div className="text-sm text-gray-500">
                          Have a suggestion? <a href="#" className="text-techblue">Submit your idea</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberDashboardPage;
