
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MessageSquare, Users, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiscussionPage = () => {
  const categories = [
    {
      id: "ai-ml",
      name: "Artificial Intelligence & Machine Learning",
      description: "Discuss the latest in AI research, machine learning models, and their applications.",
      icon: "🤖",
      topics: 156,
      posts: 2341
    },
    {
      id: "quantum",
      name: "Quantum Computing",
      description: "Explore quantum computing concepts, developments, and potential applications.",
      icon: "⚛️",
      topics: 78,
      posts: 945
    },
    {
      id: "blockchain",
      name: "Blockchain & Cryptocurrencies",
      description: "Dive into blockchain technology, cryptocurrencies, and decentralized applications.",
      icon: "🔗",
      topics: 124,
      posts: 1876
    },
    {
      id: "5g",
      name: "5G & Telecommunication",
      description: "Discuss the evolution of 5G technology and its impact on telecommunications.",
      icon: "📡",
      topics: 92,
      posts: 1089
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description: "Share insights on cybersecurity trends, threats, and best practices.",
      icon: "🔒",
      topics: 143,
      posts: 2205
    },
    {
      id: "ar-vr",
      name: "Augmented Reality & Virtual Reality",
      description: "Explore the worlds of AR and VR technology and their diverse applications.",
      icon: "🥽",
      topics: 104,
      posts: 1567
    }
  ];

  const recentTopics = [
    {
      id: 1,
      title: "GPT-4 and Its Implications for Software Development",
      category: "Artificial Intelligence & Machine Learning",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "2 hours ago",
      replies: 24,
      views: 156
    },
    {
      id: 2,
      title: "Quantum Supremacy: Latest Breakthroughs and Challenges",
      category: "Quantum Computing",
      author: "Sarah Chen",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "5 hours ago",
      replies: 17,
      views: 89
    },
    {
      id: 3,
      title: "Securing Smart Contracts: Best Practices and Common Pitfalls",
      category: "Blockchain & Cryptocurrencies",
      author: "Michael Rodriguez",
      authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "Yesterday",
      replies: 31,
      views: 203
    },
    {
      id: 4,
      title: "5G Network Security Concerns: Addressing the Challenges",
      category: "5G & Telecommunication",
      author: "Priya Patel",
      authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
      date: "2 days ago",
      replies: 19,
      views: 127
    },
    {
      id: 5,
      title: "Implementing Zero Trust Security in Enterprise Networks",
      category: "Cybersecurity",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "3 days ago",
      replies: 26,
      views: 184
    }
  ];

  return (
    <div>
      <PageHeader
        title="Discussion Forums"
        description="Join conversations on cutting-edge technologies and connect with fellow tech enthusiasts"
      >
        <div className="relative max-w-md mx-auto">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            type="search" 
            placeholder="Search discussions..." 
            className="pl-10 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
          />
        </div>
      </PageHeader>

      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="categories" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="recent">Recent Topics</TabsTrigger>
            </TabsList>

            <TabsContent value="categories">
              <SectionTitle
                title="Discussion Categories"
                subtitle="Browse our discussion forums by topic category"
                centered
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {categories.map(category => (
                  <div key={category.id} className="bg-white rounded-xl shadow-md p-6 transition-transform hover:shadow-lg hover:-translate-y-1 flex flex-col">
                    <div className="mb-4 text-3xl">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {category.topics} Topics
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {category.posts} Posts
                      </span>
                    </div>
                    <Button asChild className="w-full bg-techblue hover:bg-techblue-dark">
                      <a href={`#${category.id}`} className="flex items-center justify-center">
                        Browse Topics <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recent">
              <SectionTitle
                title="Recent Discussions"
                subtitle="Join the conversation on these active discussion topics"
                centered
              />
              <div className="space-y-4 mt-8">
                {recentTopics.map(topic => (
                  <div key={topic.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                          {topic.category}
                        </span>
                        <span className="text-xs text-gray-500">{topic.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 hover:text-techblue transition-colors">
                        <a href={`#topic-${topic.id}`}>{topic.title}</a>
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={topic.authorImage} 
                            alt={topic.author}
                            className="h-8 w-8 rounded-full mr-2 object-cover"
                          />
                          <span className="font-medium text-sm">{topic.author}</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-600 text-sm">
                          <span className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {topic.replies}
                          </span>
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            {topic.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button className="bg-techblue hover:bg-techblue-dark">
                  Load More
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Start Discussion CTA */}
          <div className="mt-16 bg-gradient-to-r from-techblue to-techblue-dark text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Have a question or idea to discuss?</h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Start a new discussion topic and engage with our community of tech enthusiasts and professionals.
            </p>
            <Button asChild size="lg" className="bg-white text-techblue hover:bg-gray-100 border-0">
              <a href="#new-topic">Start New Topic</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscussionPage;
