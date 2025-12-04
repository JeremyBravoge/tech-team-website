import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown,
  Users,
  Wrench,
  Cpu,
  Gamepad2,
  Shield,
  Rocket,
  Building2,
  School,
  Handshake,
  Trophy,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", dropdown: true },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects", dropdown: true },
    { name: "Discussion", path: "/discussion" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const projectDropdownLinks = [
    { name: "Developers Community Hub", path: "/projects/community", icon: <Users className="text-techgold w-4 h-4" /> },
    { name: "Tech Workshops & Bootcamps", path: "/projects/workshops", icon: <Wrench className="text-techgold w-4 h-4" /> },
    { name: "Cybersecurity Squad", path: "/projects/security", icon: <Shield className="text-techgold w-4 h-4" /> },
    { name: "AI & Robotics Unit", path: "/projects/ai-robotics", icon: <Cpu className="text-techgold w-4 h-4" /> },
    { name: "Web & Mobile Dev Missions", path: "/projects/missions", icon: <Rocket className="text-techgold w-4 h-4" /> },
    { name: "Gaming & Innovation League", path: "/projects/gaming", icon: <Gamepad2 className="text-techgold w-4 h-4" /> },
  ];

  const aboutDropdownLinks = [
    { name: "Who We Are", path: "/about/who-we-are", icon: <Users className="text-techgold w-4 h-4" /> },
    { name: "Leadership & Governance", path: "/about/leadership", icon: <Building2 className="text-techgold w-4 h-4" /> },
    { name: "Our Community", path: "/about/community", icon: <Users className="text-techgold w-4 h-4" /> },
    { name: "Innovation & Impact", path: "/about/impact", icon: <Wrench className="text-techgold w-4 h-4" /> },
    { name: "Our Journey", path: "/about/journey", icon: <Rocket className="text-techgold w-4 h-4" /> },
    { name: "Tech Programs", path: "/about/programs", icon: <School className="text-techgold w-4 h-4" /> },
    { name: "Meet the Team", path: "/about/team", icon: <Users className="text-techgold w-4 h-4" /> },
    { name: "Tech Partnerships", path: "/about/partnerships", icon: <Handshake className="text-techgold w-4 h-4" /> },
    { name: "Awards & Recognition", path: "/about/awards", icon: <Trophy className="text-techgold w-4 h-4" /> },
    { name: "Membership & Benefits", path: "/about/membership", icon: <Shield className="text-techgold w-4 h-4" /> },
  ];

  const CONTACT_PHONE = "0115000514";
  const CONTACT_EMAIL = "info@techteam.org";

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        aboutRef.current && !aboutRef.current.contains(e.target) &&
        projectsRef.current && !projectsRef.current.contains(e.target)
      ) {
        setProjectsDropdown(false);
        setAboutDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="bg-gray-900 text-gray-300 text-sm py-2 hidden md:block border-b border-techgold/20">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center hover:text-techgold">
              <Phone className="h-4 w-4 mr-1 text-techgold" />{CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center hover:text-techgold">
              <Mail className="h-4 w-4 mr-1 text-techgold" />{CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="shadow-md">
        <div className="container-custom flex justify-between items-center py-4">

          <Link to="/" className="flex items-center space-x-2 group">
            <img src="/tech team logo.png" className="h-10 w-10 rounded-full border-2 border-techblue group-hover:border-techgold transition" />
            <span className="font-extrabold text-2xl text-gray-900 group-hover:text-techgold transition">Tech Team</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 relative">

            {navItems.map(item => (
              item.dropdown ? (
                <div
                  key={item.name}
                  ref={item.name === "Projects" ? projectsRef : aboutRef}
                  className="relative"
                >
                  <button
                    onClick={() => {
                      if (item.name === "Projects") {
                        setProjectsDropdown(!projectsDropdown);
                        setAboutDropdown(false);
                      } else {
                        setAboutDropdown(!aboutDropdown);
                        setProjectsDropdown(false);
                      }
                    }}
                    className={`flex items-center px-3 py-2 font-semibold transition
                      ${isActive(item.path)
                        ? "text-techgold border-b-2 border-techgold"
                        : "text-gray-700 hover:text-techgold"}`}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {item.name === "Projects" && projectsDropdown && (
                    <div className="absolute left-0 mt-2 bg-white w-[620px] border border-gray-200 rounded-md p-6 z-50 shadow-lg grid grid-cols-2 gap-4">
                      {projectDropdownLinks.map(link => (
                        <Link key={link.name} to={link.path} className="flex items-center gap-3 py-2 hover:text-techgold text-gray-700 text-sm">
                          {link.icon}
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.name === "About" && aboutDropdown && (
                    <div className="absolute left-0 mt-2 bg-white w-[620px] border border-gray-200 rounded-md p-6 z-50 shadow-lg grid grid-cols-2 gap-4">
                      {aboutDropdownLinks.map(link => (
                        <Link key={link.name} to={link.path} className="flex items-center gap-3 py-2 hover:text-techgold text-gray-700 text-sm">
                          {link.icon}
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-base font-semibold transition
                    ${isActive(item.path)
                      ? "text-techgold border-b-2 border-techgold"
                      : "text-gray-700 hover:text-techgold hover:bg-gray-100"}`}
                >
                  {item.name}
                </Link>
              )
            ))}

            <Link to="/dashboard">
              <Button className="ml-4 bg-techblue hover:bg-techblue-dark shadow-lg">Member Login</Button>
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg absolute w-full">

          {navItems.map(item => (
            item.dropdown ? (
              <div key={item.name}>
                <button
                  onClick={() => {
                    if (item.name === "Projects") {
                      setMobileProjectsOpen(!mobileProjectsOpen);
                      setMobileAboutOpen(false);
                    } else {
                      setMobileAboutOpen(!mobileAboutOpen);
                      setMobileProjectsOpen(false);
                    }
                  }}
                  className="flex justify-between w-full px-3 py-2 font-medium text-gray-700 hover:text-techgold"
                >
                  {item.name} <ChevronDown />
                </button>

                {item.name === "Projects" && mobileProjectsOpen && (
                  <div className="pl-4 space-y-2">
                    {projectDropdownLinks.map(sub => (
                      <Link key={sub.name} to={sub.path} className="block text-sm hover:text-techgold">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}

                {item.name === "About" && mobileAboutOpen && (
                  <div className="pl-4 space-y-2">
                    {aboutDropdownLinks.map(sub => (
                      <Link key={sub.name} to={sub.path} className="block text-sm hover:text-techgold">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.name} to={item.path} className="block px-3 py-2 hover:text-techgold">
                {item.name}
              </Link>
            )
          ))}

          <Link to="/dashboard">
            <Button className="mt-4 w-full bg-techblue hover:bg-techblue-dark">Member Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
