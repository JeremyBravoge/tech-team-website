import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, GraduationCap, Network, History, ArrowRight } from "lucide-react"; // Import new icons

// --- 🎯 New Component: TeamMemberCard (For Improved Structure/Reusability) ---
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="rounded-xl shadow-lg border border-gray-100 overflow-hidden bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-techblue/20 group">
    {/* Image Container with Aspect Ratio */}
    <div className="w-full aspect-square relative overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      {/* Role Overlay on Image */}
      <div className="absolute bottom-0 left-0 bg-black/50 text-white px-4 py-2 text-sm font-semibold w-full backdrop-blur-sm">
        {member.role}
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-extrabold mb-1 text-gray-900">{member.name}</h3>
      <p className="text-sm font-medium mb-3 text-techgold uppercase tracking-wider">{member.role}</p>
      <p className="text-gray-600 text-sm line-clamp-3">{member.bio}</p>
    </div>
  </div>
);


// --- 🚀 Main About Page Component ---
const AboutPage = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Jeremy Bravoge",
      role: "Founder & CEO",
      image: "/public/556122ea2430e4e16d95ae48234de2f6_1736366820307_0.webp~3.jpg",
      bio: "Jeremy has over 15 years of experience in the tech industry and founded Tech Team to create a supportive community for tech professionals."
    },
    {
      name: "Isaac Keroro",
      role: "Community Manager", // Enhanced role title
      image: "/Isaac (2).jpg",
      bio: "Keroro oversees all community initiatives and ensures that Tech Team remains an inclusive and engaging space for all members."
    },
    {
      name: "John Ominde",
      role: "Content Director", // Enhanced role title
      image: "/439227936_122142134894144804_8017458543335806102_n.jpg",
      bio: "John manages our educational content, blogs, and resources to ensure they provide value to community members."
    },
    {
      name: "Evans Chuchu",
      role: "Events Coordinator",
      image: "/Evans Chuchu.jpg",
      bio: "Evans organizes and coordinates all Tech Team events, workshops, and conferences throughout the year."
    }
  ];

  const visionItems = [
    {
      icon: Lightbulb,
      title: "Foster Innovation",
      description: "Create spaces where new ideas can flourish and innovative solutions can be developed collaboratively.",
      color: "text-techgold",
      bg: "bg-techgold/10"
    },
    {
      icon: GraduationCap,
      title: "Promote Education",
      description: "Provide accessible learning resources and opportunities for all levels of technical expertise.",
      color: "text-techblue",
      bg: "bg-techblue/10"
    },
    {
      icon: Network,
      title: "Build Connections",
      description: "Connect individuals and organizations to create meaningful collaborative relationships.",
      color: "text-green-500", // New complementary color
      bg: "bg-green-500/10"
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="About Tech Team"
        description="Learn more about our mission, team, and the story behind Tech Team"
      />

      {/* 1. MISSION & CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionTitle
                title="Our Mission 🤝"
                subtitle="We strive to create an inclusive and collaborative tech community"
              />
              <p className="text-gray-700 text-lg leading-relaxed">
                Tech Team was founded with a simple but powerful vision: to create a community where **technology enthusiasts, professionals, and learners** can come together to share knowledge, collaborate on projects, and support each other's growth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed border-l-4 border-techgold pl-4 italic">
                We believe that technology has the power to transform lives and communities, and our mission is to make that power accessible to everyone through **education, networking, and hands-on experience.**
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-techblue hover:bg-techblue-dark rounded-full px-8 text-white font-semibold shadow-md">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-8 border-techblue text-techblue hover:bg-techblue/5 font-semibold">
                  <Link to="/blogs">Explore Our Content</Link>
                </Button>
              </div>
            </div>
            {/* Image on the right */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/two team kist.jpg"
                alt="Team Collaboration"
                className="rounded-3xl shadow-xl hover:shadow-techblue/30 transition-shadow duration-500 max-w-full h-auto border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-10" />

      {/* 2. VISION (M-V-P Structure) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="Our Core Values" subtitle="The principles that drive our community forward" centered />
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg text-center mb-6">
              We envision a future where technological innovation is driven by diverse perspectives and accessible to all. We aim to achieve this through these pillars:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {visionItems.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl text-center border-t-4 border-techblue">
                  <div className={`${item.bg} ${item.color} rounded-full h-14 w-14 flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="my-10" />

      {/* 3. TEAM */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="The Dedicated Team 🧑‍💻" subtitle="Meet the people steering the Tech Team ship" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <hr className="my-10" />

      {/* 4. HISTORY (Timeline Approach) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* History Timeline */}
            <div className="order-2 lg:order-1 space-y-8">
              <SectionTitle
                title="Our Journey 📈"
                subtitle="A look back at how Tech Team has grown over the years"
                icon={<History className="h-6 w-6 text-techblue" />}
              />
              <ol className="relative border-l border-gray-300 ml-4">
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-techgold rounded-full -left-[6.5px] ring-8 ring-gray-50/50"></span>
                  <h3 className="text-xl font-semibold text-gray-900">2018: The Spark</h3>
                  <p className="text-gray-600">Tech Team started as a **small meetup group of 15 passionate developers** in a local coffee shop, focusing on practical coding challenges.</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-techgold rounded-full -left-[6.5px] ring-8 ring-gray-50/50"></span>
                  <h3 className="text-xl font-semibold text-gray-900">2019: First Conference</h3>
                  <p className="text-gray-600">Our community expanded to over 500 members and we held our **first annual tech conference**, establishing our presence.</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-techgold rounded-full -left-[6.5px] ring-8 ring-gray-50/50"></span>
                  <h3 className="text-xl font-semibold text-gray-900">2020: Global Pivot</h3>
                  <p className="text-gray-600">We pivoted to fully virtual events during the pandemic and launched our online platform to connect members **globally**, expanding our reach.</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-3 h-3 bg-techgold rounded-full -left-[6.5px] ring-8 ring-gray-50/50"></span>
                  <h3 className="text-xl font-semibold text-gray-900">2021-Present: Expanding Impact</h3>
                  <p className="text-gray-600">Tech Team continues to grow, serving thousands of members with numerous educational initiatives, community projects, and strategic partnerships.</p>
                </li>
              </ol>
            </div>
            
            {/* Image on the left */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <img
                src="/tech teams kist.jpg"
                alt="Tech History"
                className="rounded-3xl shadow-xl hover:shadow-techgold/30 transition-shadow duration-500 max-w-full h-auto border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (High Contrast) */}
      <section className="section-padding bg-gradient-to-r from-techblue to-blue-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Ready to Level Up Your Career?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Become a part of Tech Team today and connect with fellow technology enthusiasts, access exclusive resources, and participate in exciting events.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-techgold hover:bg-yellow-600 text-black border-0 font-extrabold rounded-full px-10 py-7 shadow-xl hover:scale-[1.02] transition-transform">
              <Link to="/dashboard" className="flex items-center">
                Sign Up Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 font-semibold rounded-full px-10 py-7">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;