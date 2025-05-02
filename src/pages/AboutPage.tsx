
import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Alex has over 15 years of experience in the tech industry and founded Tech Team to create a supportive community for tech professionals."
    },
    {
      name: "Sarah Chen",
      role: "Community Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Sarah oversees all community initiatives and ensures that Tech Team remains an inclusive and engaging space for all members."
    },
    {
      name: "Michael Rodriguez",
      role: "Content Director",
      image: "https://randomuser.me/api/portraits/men/67.jpg", 
      bio: "Michael manages our educational content, blogs, and resources to ensure they provide value to community members."
    },
    {
      name: "Priya Patel",
      role: "Events Coordinator",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "Priya organizes and coordinates all Tech Team events, workshops, and conferences throughout the year."
    }
  ];

  return (
    <div>
      <PageHeader
        title="About Tech Team"
        description="Learn more about our mission, team, and the story behind Tech Team"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Mission"
                subtitle="We strive to create an inclusive and collaborative tech community"
              />
              <p className="text-gray-600 mb-6">
                Tech Team was founded with a simple but powerful vision: to create a vibrant community where technology enthusiasts, professionals, and learners can come together to share knowledge, collaborate on projects, and support each other's growth.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that technology has the power to transform lives and communities, and our mission is to make that power accessible to everyone through education, networking, and hands-on experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="bg-techblue hover:bg-techblue-dark">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline" className="border-techblue text-techblue hover:bg-techblue/5">
                  <Link to="/blogs">Explore Our Content</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team Collaboration" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Vision"
            centered
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg mb-6">
              We envision a future where technological innovation is driven by diverse perspectives and accessible to all. We aim to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-techblue/10 text-techblue rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Foster Innovation</h3>
                <p className="text-gray-600">Create spaces where new ideas can flourish and innovative solutions can be developed collaboratively.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-techblue/10 text-techblue rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Promote Education</h3>
                <p className="text-gray-600">Provide accessible learning resources and opportunities for all levels of technical expertise.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-techblue/10 text-techblue rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network"><path d="M8 12h8"/><path d="M12 8v8"/><circle cx="12" cy="12" r="10"/></svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Build Connections</h3>
                <p className="text-gray-600">Connect individuals and organizations to create meaningful collaborative relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated individuals behind Tech Team"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-techblue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle
                title="Our History"
                subtitle="The story of how Tech Team came to be"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-techblue">2018: The Beginning</h3>
                  <p className="text-gray-600">Tech Team started as a small meetup group of 15 passionate developers in a local coffee shop.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-techblue">2019: Community Growth</h3>
                  <p className="text-gray-600">Our community expanded to over 500 members and we held our first annual tech conference.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-techblue">2020: Virtual Transition</h3>
                  <p className="text-gray-600">We pivoted to fully virtual events and launched our online platform to connect members globally.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-techblue">2021-Present: Expanding Impact</h3>
                  <p className="text-gray-600">Tech Team continues to grow with thousands of members worldwide, numerous educational initiatives, and community projects.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                alt="Tech History" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-techblue to-techblue-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Become a part of Tech Team today and connect with fellow technology enthusiasts, access exclusive resources, and participate in exciting events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-techgold hover:bg-techgold-dark text-white border-0">
              <Link to="/dashboard">Sign Up Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
