
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, LayoutGrid } from "lucide-react";

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "Open Source AI Assistant",
      description: "A community-developed AI assistant that helps answer coding questions and debug errors in real-time.",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      technologies: ["Python", "TensorFlow", "React"],
      stars: 145,
      forks: 32
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology for organizational elections.",
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639322537231-2f206f0da5f7?auto=format&fit=crop&w=800&q=80",
      author: "Sarah Chen",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      technologies: ["Solidity", "Ethereum", "JavaScript"],
      stars: 98,
      forks: 24
    },
    {
      id: 3,
      title: "AR Learning Platform",
      description: "Educational platform using augmented reality to make learning more interactive and engaging.",
      category: "Augmented Reality",
      image: "https://images.unsplash.com/photo-1626379953704-055a697cbaa7?auto=format&fit=crop&w=800&q=80",
      author: "Michael Rodriguez",
      authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      technologies: ["Unity", "AR.js", "React Native"],
      stars: 76,
      forks: 15
    },
    {
      id: 4,
      title: "5G Network Monitor",
      description: "Tool for monitoring and analyzing 5G network performance and coverage in real-time.",
      category: "5G and Telecommunication",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80",
      author: "Priya Patel",
      authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
      technologies: ["Python", "Django", "D3.js"],
      stars: 112,
      forks: 27
    },
    {
      id: 5,
      title: "Cybersecurity Training Simulator",
      description: "Interactive simulation platform for training employees on recognizing and preventing cyber attacks.",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      technologies: ["JavaScript", "Node.js", "Three.js"],
      stars: 89,
      forks: 21
    },
    {
      id: 6,
      title: "Virtual Reality Meeting Space",
      description: "A VR environment for remote teams to collaborate and meet as if they were in the same physical space.",
      category: "Virtual Reality",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=800&q=80",
      author: "Sarah Chen",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      technologies: ["Unity", "WebXR", "React"],
      stars: 134,
      forks: 38
    }
  ];

  const filteredProjects = searchQuery
    ? projects.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : projects;

  return (
    <div>
      <PageHeader
        title="Community Projects"
        description="Explore projects created by our talented community members"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="w-full md:w-auto flex-grow relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                type="search" 
                placeholder="Search projects..." 
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <div className="flex items-center border rounded-md">
                <Button 
                  variant="ghost" 
                  className={`px-2 h-9 ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  className={`px-2 h-9 ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                  onClick={() => setViewMode('list')}
                  aria-label="List view"
                >
                  <Grid className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={project.authorImage} 
                          alt={project.author}
                          className="h-8 w-8 rounded-full mr-2 object-cover"
                        />
                        <span className="text-sm font-medium">{project.author}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm">
                        <span className="mr-3">⭐ {project.stars}</span>
                        <span>🔀 {project.forks}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">View Project</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-1">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ minHeight: '200px' }}
                      />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center text-gray-600">
                          <span className="mr-3">⭐ {project.stars}</span>
                          <span>🔀 {project.forks}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <img 
                            src={project.authorImage} 
                            alt={project.author}
                            className="h-8 w-8 rounded-full mr-2 object-cover"
                          />
                          <span className="font-medium">{project.author}</span>
                        </div>
                        <Button className="bg-techblue hover:bg-techblue-dark">View Project</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search query</p>
            </div>
          )}

          {/* Submit Project CTA */}
          <div className="mt-16 bg-gradient-to-r from-techblue to-techblue-dark text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Have a project to showcase?</h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Share your work with the Tech Team community and get feedback, collaborators, and recognition for your innovative ideas.
            </p>
            <Button asChild size="lg" className="bg-white text-techblue hover:bg-gray-100 border-0">
              <a href="#submit">Submit Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
