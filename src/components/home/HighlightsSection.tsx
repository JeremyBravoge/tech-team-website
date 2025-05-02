
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

const HighlightsSection = () => {
  const highlights = [
    {
      category: "Blog",
      title: "The Future of AI in Everyday Applications",
      description: "Explore how artificial intelligence is being integrated into daily applications...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      link: "/blogs"
    },
    {
      category: "Event",
      title: "Annual Tech Conference 2023",
      description: "Join us for our biggest tech conference of the year with industry leaders...",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      link: "/events"
    },
    {
      category: "Project",
      title: "Open Source AI Assistant",
      description: "Community-led project focusing on building an accessible AI assistant for everyone...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      link: "/projects"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle 
          title="Latest Highlights" 
          subtitle="Check out the most recent and noteworthy content from our community"
          centered 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:shadow-xl hover:translate-y-[-5px]">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-medium text-techgold bg-techgold/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mt-3 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link to={item.link} className="text-techblue hover:text-techblue-dark font-medium inline-flex items-center">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-techblue hover:bg-techblue-dark">
            <Link to="/blogs">View All Content</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
