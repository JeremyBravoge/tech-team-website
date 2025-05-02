
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  MessageSquare, 
  Image, 
  User
} from "lucide-react";

const QuickLinksSection = () => {
  const links = [
    {
      title: "Educational Content",
      description: "Tutorials, guides, and learning resources",
      icon: <BookOpen className="h-10 w-10 text-techblue" />,
      link: "/blogs"
    },
    {
      title: "Upcoming Events",
      description: "Webinars, meet-ups, and conferences",
      icon: <Calendar className="h-10 w-10 text-techblue" />,
      link: "/events"
    },
    {
      title: "Community Forums",
      description: "Discuss topics with fellow tech enthusiasts",
      icon: <MessageSquare className="h-10 w-10 text-techblue" />,
      link: "/discussion"
    },
    {
      title: "About Us",
      description: "Learn about our mission and team",
      icon: <Users className="h-10 w-10 text-techblue" />,
      link: "/about"
    },
    {
      title: "Project Gallery",
      description: "Explore community member projects",
      icon: <Image className="h-10 w-10 text-techblue" />,
      link: "/projects"
    },
    {
      title: "Member Dashboard",
      description: "Access your personal account",
      icon: <User className="h-10 w-10 text-techblue" />,
      link: "/dashboard"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle 
          title="Quick Links" 
          subtitle="Find what you're looking for with these handy shortcuts to popular sections"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.link} 
              className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="mr-4">
                {link.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
                <p className="text-gray-600">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;
