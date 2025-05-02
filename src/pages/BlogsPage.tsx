
import { useState } from "react";
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BlogsPage = () => {
  const categories = ["All", "Tech News", "Tutorials", "Coding Challenge", "Reviews", "Member Spotlight", "Career Advice"];
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is changing the landscape of software development and what developers need to know.",
      category: "Tech News",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Your First React Application: A Step-by-Step Guide",
      excerpt: "Learn how to create your first React application from scratch with this comprehensive tutorial for beginners.",
      category: "Tutorials",
      author: "Sarah Chen",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read"
    },
    {
      id: 3,
      title: "Weekly Coding Challenge: Build a Weather App",
      excerpt: "Test your skills with this week's coding challenge: create a weather application that fetches data from an API.",
      category: "Coding Challenge",
      author: "Michael Rodriguez",
      authorImage: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "May 1, 2023",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      readTime: "15 min read"
    },
    {
      id: 4,
      title: "Review: The Latest Development Tools for 2023",
      excerpt: "Our team reviews the most innovative and useful development tools that have emerged in 2023 so far.",
      category: "Reviews",
      author: "Priya Patel",
      authorImage: "https://randomuser.me/api/portraits/women/65.jpg",
      date: "March 18, 2023",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Member Spotlight: Jane Doe's Journey from Beginner to Senior Developer",
      excerpt: "Learn about community member Jane Doe's inspiring career path and her advice for aspiring developers.",
      category: "Member Spotlight",
      author: "Alex Johnson",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "February 10, 2023",
      image: "https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?auto=format&fit=crop&w=800&q=80",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Navigating the Tech Job Market in 2023",
      excerpt: "Expert advice on how to stand out in the competitive tech job market, including resume tips and interview strategies.",
      category: "Career Advice",
      author: "Sarah Chen",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "January 25, 2023",
      image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&w=800&q=80",
      readTime: "7 min read"
    }
  ];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div>
      <PageHeader
        title="Tech Team Blog"
        description="Stay informed with the latest tech news, tutorials, coding challenges, and more"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="search" 
                  placeholder="Search articles..." 
                  className="pl-10 w-full md:w-80"
                />
              </div>
            </div>
            <div className="w-full md:w-auto overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? "bg-techblue hover:bg-techblue-dark" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                <div className="lg:col-span-2 p-8 flex flex-col justify-center">
                  <span className="text-sm font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full inline-block mb-4">
                    {filteredPosts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={filteredPosts[0].authorImage} 
                        alt={filteredPosts[0].author}
                        className="h-10 w-10 rounded-full mr-3 object-cover"
                      />
                      <div>
                        <p className="font-medium">{filteredPosts[0].author}</p>
                        <p className="text-sm text-gray-500">{filteredPosts[0].date}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <Button className="mt-6 bg-techblue hover:bg-techblue-dark">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).map(post => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium text-techblue bg-techblue/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={post.authorImage} 
                        alt={post.author}
                        className="h-8 w-8 rounded-full mr-2 object-cover"
                      />
                      <div>
                        <p className="font-medium text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-techblue hover:text-techblue-dark hover:bg-techblue/5 p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-1">
              <Button variant="outline" className="w-10 h-10 p-0">
                &laquo;
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 bg-techblue text-white">
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                3
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                &raquo;
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
