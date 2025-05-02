
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Discussion", path: "/discussion" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/public/lovable-uploads/10cd6829-3061-4a7b-8551-9b0b5badcd43.png" 
            alt="Tech Team Logo" 
            className="h-10 w-10"
          />
          <span className="font-bold text-xl text-techblue">Tech Team</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "text-techblue font-semibold"
                  : "text-gray-600 hover:text-techblue hover:bg-gray-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/dashboard">
            <Button className="ml-4 bg-techblue hover:bg-techblue-dark">
              Member Login
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-techblue hover:bg-gray-50"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? "text-techblue font-semibold bg-gray-50"
                    : "text-gray-600 hover:text-techblue hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="mt-2 w-full bg-techblue hover:bg-techblue-dark">
                Member Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
