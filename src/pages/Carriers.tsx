import PageHeader from "../components/PageHeader";
import SectionTitle from "../components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Zap, Code, Layout, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard"; // Import the new component

const CareersPage = () => {
  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Engineer (React/Node)",
      department: "Software Development",
      location: "Nairobi, Kenya (Hybrid)",
      type: "Full-time",
      link: "/jobs/senior-fullstack-engineer",
    },
    {
      id: 2,
      title: "UI/UX Product Designer",
      department: "Product & Design",
      location: "Virtual (Global)",
      type: "Full-time",
      link: "/jobs/ui-ux-designer",
    },
    {
      id: 3,
      title: "Data Science Intern",
      department: "Data & Analytics",
      location: "Nairobi, Kenya",
      type: "Internship",
      link: "/jobs/data-science-intern",
    },
    {
      id: 4,
      title: "DevOps Engineer (Contract)",
      department: "Infrastructure",
      location: "Virtual (Remote)",
      type: "Contract",
      link: "/jobs/devops-contract",
    },
    {
      id: 5,
      title: "Product Manager (FinTech)",
      department: "Product & Strategy",
      location: "Nairobi, Kenya",
      type: "Full-time",
      link: "/jobs/product-manager-fintech",
    },
    {
      id: 6,
      title: "Junior Frontend Developer",
      department: "Software Development",
      location: "Nairobi, Kenya (Hybrid)",
      type: "Full-time",
      link: "/jobs/junior-frontend",
    },
  ];

  const categories = [
    { name: "Engineering", icon: Code, count: 4, color: "text-red-500" },
    { name: "Product & Design", icon: Layout, count: 1, color: "text-techblue" },
    { name: "Internships", icon: UserPlus, count: 1, color: "text-techgold" },
    { name: "Operations", icon: Zap, count: 0, color: "text-gray-500" },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        title="Careers at Tech Team"
        description="Join our mission to empower technology everywhere. Find your next challenge with a team of innovators."
      />

      {/* 1. SEARCH AND CATEGORIES */}
      <section className="section-padding pt-0">
        <div className="container-custom">
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-12">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input 
                        placeholder="Search jobs by title, skill, or location..."
                        className="w-full h-14 pl-12 pr-4 rounded-full text-base border-2 border-gray-200 focus:border-techblue shadow-md"
                    />
                    <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 bg-techblue hover:bg-techblue-dark rounded-full font-semibold">
                        Search
                    </Button>
                </div>
            </div>

            {/* Job Categories Filter */}
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat, index) => (
                    <Button 
                        key={index}
                        variant="outline"
                        className={`rounded-full px-6 border-2 font-semibold ${cat.count > 0 ? `border-techgold/50 hover:bg-techgold/10 ${cat.color}` : 'border-gray-200 text-gray-500 cursor-not-allowed'}`}
                        disabled={cat.count === 0}
                    >
                        <cat.icon className={`h-4 w-4 mr-2 ${cat.count > 0 ? cat.color : 'text-gray-500'}`} />
                        {cat.name} ({cat.count})
                    </Button>
                ))}
            </div>
        </div>
      </section>

      <hr className="my-10" />

      {/* 2. OPEN JOB LISTINGS */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <SectionTitle 
            title="Current Openings" 
            subtitle={`We're hiring for ${jobListings.length} exciting roles across our teams.`} 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {jobListings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-10 py-6 text-lg border-2 border-techblue text-techblue hover:bg-techblue/5 font-bold transition-colors">
                View All {jobListings.length} Open Jobs
            </Button>
          </div>
        </div>
      </section>
      
      {/* 3. INTERNSHIP & PARTNER SECTION (High Contrast) */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Internship Application Form (Based on image_6578c0.jpg idea) */}
            <div className="p-8 bg-white rounded-xl shadow-2xl border-t-4 border-techgold">
              <SectionTitle title="Internship Opportunities" subtitle="Kickstart your career with hands-on experience in a dynamic tech environment." />
              <form className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="text" placeholder="Full Name" className="h-12 border-gray-300 focus:border-techgold" />
                  <Input type="email" placeholder="Email Address" className="h-12 border-gray-300 focus:border-techgold" />
                </div>
                <Input type="text" placeholder="Preferred Internship Field (e.g., Software, Marketing, Data)" className="h-12 border-gray-300 focus:border-techgold" />
                <textarea 
                  placeholder="Tell us about yourself and your career goals (optional)"
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-techgold focus:ring-techgold transition-colors"
                />
                <Button type="submit" className="w-full bg-techgold hover:bg-yellow-600 text-black font-extrabold rounded-full h-12 shadow-md transition-transform hover:scale-[1.01]">
                  Submit Application
                </Button>
              </form>
            </div>

            {/* Recruitment Ad / Perks Card (Based on 'WE ARE HIRING' image idea) */}
            <div className="rounded-3xl shadow-xl p-8 bg-techblue text-white">
                <h3 className="text-3xl font-extrabold mb-3 border-b-2 border-techgold pb-2">Why Join Tech Team? 💡</h3>
                <p className="text-white/90 text-lg mb-6">
                    We offer more than just a job; we offer a career path defined by growth, impact, and innovation.
                </p>
                <ul className="space-y-3 text-sm font-medium">
                    <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-techgold" />
                        **Continuous Learning**: Dedicated budget for courses, certifications, and conferences.
                    </li>
                    <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-techgold" />
                        **Flexible Work**: Hybrid and remote options for most roles.
                    </li>
                    <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-techgold" />
                        **Wellness Focus**: Premium healthcare and mental wellness resources.
                    </li>
                    <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-techgold" />
                        **Innovation Lab Access**: Time and resources dedicated to side projects and R&D.
                    </li>
                </ul>
                <Link to="/about">
                    <Button variant="outline" className="mt-8 bg-white/10 backdrop-blur-sm text-white border-white/50 hover:bg-white/20 rounded-full font-semibold px-8">
                        Learn More About Our Culture
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;