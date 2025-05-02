
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";

const AboutSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="About Our Community"
          subtitle="Tech Team is a vibrant community of technology professionals, enthusiasts, and innovators dedicated to sharing knowledge and fostering collaboration."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="bg-techblue/10 text-techblue rounded-full h-12 w-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Hub</h3>
            <p className="text-gray-600 mb-4">Connect with like-minded tech enthusiasts and professionals. Share ideas, collaborate on projects, and grow your network.</p>
            <Link to="/about" className="text-techblue hover:text-techblue-dark font-medium inline-flex items-center">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="bg-techblue/10 text-techblue rounded-full h-12 w-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Educational Content</h3>
            <p className="text-gray-600 mb-4">Access tutorials, workshops, and resources to enhance your skills. Learn from industry experts and stay updated with latest trends.</p>
            <Link to="/blogs" className="text-techblue hover:text-techblue-dark font-medium inline-flex items-center">
              Explore content <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 card-hover">
            <div className="bg-techblue/10 text-techblue rounded-full h-12 w-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Events & Updates</h3>
            <p className="text-gray-600 mb-4">Participate in webinars, hackathons, and meetups. Stay informed about upcoming technology events and industry news.</p>
            <Link to="/events" className="text-techblue hover:text-techblue-dark font-medium inline-flex items-center">
              View events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/about" className="btn-primary inline-block">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
