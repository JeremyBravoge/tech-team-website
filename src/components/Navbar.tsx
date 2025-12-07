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
  Newspaper,
  Megaphone,
  Image,
  Video,
  Mic,
  Globe,
  Share2,
} from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mediaDropdown, setMediaDropdown] = useState(false);

  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  /* ================= CLICK OUTSIDE TO CLOSE DESKTOP MENU ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !aboutRef.current?.contains(e.target as Node) &&
        !projectsRef.current?.contains(e.target as Node) &&
        !mediaRef.current?.contains(e.target as Node)
      ) {
        setProjectsDropdown(false);
        setAboutDropdown(false);
        setMediaDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= NAV DATA ================= */

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", dropdown: true },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects", dropdown: true },
    { name: "Media", path: "/media", dropdown: true },
    { name: "Discussion", path: "/discussion" },
    { name: "Career", path: "/carrier" },
    { name: "Contact", path: "/contact" },
  ];

  const projectLinks = [
    { name: "Developers Community Hub", path: "/projects", icon: <Users className="w-4 h-4 text-techgold" /> },
    { name: "Tech Workshops & Bootcamps", path: "/projects/workshops", icon: <Wrench className="w-4 h-4 text-techgold" /> },
    { name: "Cybersecurity Squad", path: "/projects/security", icon: <Shield className="w-4 h-4 text-techgold" /> },
    { name: "AI & Robotics Unit", path: "/projects/ai-robotics", icon: <Cpu className="w-4 h-4 text-techgold" /> },
    { name: "Web & Mobile Dev Missions", path: "/projects/missions", icon: <Rocket className="w-4 h-4 text-techgold" /> },
    { name: "Gaming & Innovation League", path: "/projects/gaming", icon: <Gamepad2 className="w-4 h-4 text-techgold" /> },
  ];

  const aboutLinks = [
    { name: "Who We Are", path: "/about", icon: <Users className="w-4 h-4 text-techgold" /> },
    { name: "Leadership & Governance", path: "/about/leadership", icon: <Building2 className="w-4 h-4 text-techgold" /> },
    { name: "Our Community", path: "/about/community", icon: <Users className="w-4 h-4 text-techgold" /> },
    { name: "Innovation & Impact", path: "/about/impact", icon: <Wrench className="w-4 h-4 text-techgold" /> },
    { name: "Our Journey", path: "/about/journey", icon: <Rocket className="w-4 h-4 text-techgold" /> },
    { name: "Tech Programs", path: "/about/programs", icon: <School className="w-4 h-4 text-techgold" /> },
    { name: "Meet the Team", path: "/about/team", icon: <Users className="w-4 h-4 text-techgold" /> },
    { name: "Partnerships", path: "/about/partnerships", icon: <Handshake className="w-4 h-4 text-techgold" /> },
    { name: "Awards", path: "/about/awards", icon: <Trophy className="w-4 h-4 text-techgold" /> },
  ];

  const mediaLinks = [
    { name: "News & Announcements", path: "/media/news", icon: <Megaphone className="w-4 h-4 text-techgold" /> },
    { name: "Press Releases", path: "/media/press", icon: <Newspaper className="w-4 h-4 text-techgold" /> },
    { name: "Blog / Articles", path: "/media/blogs", icon: <Globe className="w-4 h-4 text-techgold" /> },
    { name: "Gallery", path: "/media/gallery", icon: <Image className="w-4 h-4 text-techgold" /> },
    { name: "Videos", path: "/media/videos", icon: <Video className="w-4 h-4 text-techgold" /> },
    { name: "Podcasts", path: "/media/podcasts", icon: <Mic className="w-4 h-4 text-techgold" /> },
    { name: "Media Appearances", path: "/media/appearances", icon: <Share2 className="w-4 h-4 text-techgold" /> },
    { name: "Social Media Channels", path: "/media/socials", icon: <Globe className="w-4 h-4 text-techgold" /> },
  ];

  /* ================= JSX ================= */

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      {/* TOP BAR */}
      <div className="hidden md:block bg-gray-900 text-gray-300 text-xs border-b border-techgold/20">
        <div className="container-custom flex justify-between items-center py-2">
          <div className="flex gap-6">
            <a href="tel:0115000514" className="flex items-center gap-1 hover:text-techgold">
              <Phone className="w-4 h-4 text-techgold" /> 0115000514
            </a>
            <a href="mailto:info@techteam.org" className="flex items-center gap-1 hover:text-techgold">
              <Mail className="w-4 h-4 text-techgold" /> info@techteam.org
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="container-custom flex justify-between items-center py-3">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/tech team logo.png" className="h-9 w-9 rounded-full border-2 border-techblue" />
          <span className="text-xl font-bold">Tech Team</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item =>
            item.dropdown ? (
              <div
                key={item.name}
                ref={item.name === "Projects" ? projectsRef : item.name === "About" ? aboutRef : mediaRef}
                className="relative"
              >
                <button
                  onClick={() => {
                    setProjectsDropdown(item.name === "Projects" ? !projectsDropdown : false);
                    setAboutDropdown(item.name === "About" ? !aboutDropdown : false);
                    setMediaDropdown(item.name === "Media" ? !mediaDropdown : false);
                  }}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-techgold"
                >
                  {item.name} <ChevronDown className="w-4 h-4" />
                </button>

                {(item.name === "Projects" && projectsDropdown) ||
                (item.name === "About" && aboutDropdown) ||
                (item.name === "Media" && mediaDropdown) ? (
                  <div className="absolute left-0 mt-3 w-[540px] grid grid-cols-2 gap-2 rounded-xl bg-white p-4 border shadow-xl">
                    {(item.name === "Projects"
                      ? projectLinks
                      : item.name === "About"
                      ? aboutLinks
                      : mediaLinks
                    ).map(link => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-gray-50 hover:text-techgold transition"
                      >
                        {link.icon} {link.name}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition
                  ${isActive(item.path)
                    ? "text-techgold"
                    : "text-gray-700 hover:text-techgold hover:bg-gray-100"}`}
              >
                {item.name}
              </Link>
            )
          )}

          <Link to="/dashboard">
            <Button className="ml-3 h-9 text-sm bg-techblue hover:bg-techblue-dark">
              Member Login
            </Button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-techgold px-4 py-4 shadow-lg space-y-2">

          {navItems.map(item => (
            <div key={item.name} className="border-b border-techgold-dark">

              {/* DROPDOWN HANDLING */}
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => {
                      if (item.name === "Projects") setMobileProjectsOpen(!mobileProjectsOpen);
                      if (item.name === "About") setMobileAboutOpen(!mobileAboutOpen);
                      if (item.name === "Media") setMobileMediaOpen(!mobileMediaOpen);
                    }}
                    className="w-full flex justify-between items-center py-3 text-sm font-medium text-gray-900"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        (item.name === "Projects" && mobileProjectsOpen) ||
                        (item.name === "About" && mobileAboutOpen) ||
                        (item.name === "Media" && mobileMediaOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {(item.name === "Projects"
                    ? mobileProjectsOpen
                    : item.name === "About"
                    ? mobileAboutOpen
                    : mobileMediaOpen) && (
                   <div className="ml-4 mt-2 mb-3 rounded-lg bg-white p-3 shadow-md space-y-2">
                      {(item.name === "Projects"
                        ? projectLinks
                        : item.name === "About"
                        ? aboutLinks
                        : mediaLinks
                      ).map(sub => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => {
                            setMobileProjectsOpen(false);
                            setMobileAboutOpen(false);
                            setMobileMediaOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="flex items-center gap-3 px-2 py-2 text-sm text-gray-800 hover:text-techgold"
                        >
                          {sub.icon}
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}   // 🔥 CLOSE MENU WHEN CLICKED
                  className="block py-3 text-gray-900 text-sm hover:text-techblue"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link to="/dashboard">
            <Button className="w-full mt-3 bg-white text-techgold hover:bg-gray-100">
              Member Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
