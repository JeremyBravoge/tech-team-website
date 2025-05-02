
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <img 
        src="/public/lovable-uploads/10cd6829-3061-4a7b-8551-9b0b5badcd43.png" 
        alt="Tech Team Logo" 
        className="h-24 w-24 mb-8"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 text-center">Oops! The page you're looking for doesn't exist.</p>
      <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
        <Button asChild className="bg-techblue hover:bg-techblue-dark text-white">
          <Link to="/">Return to Home</Link>
        </Button>
        <Button asChild variant="outline" className="border-techblue text-techblue hover:bg-techblue/5">
          <Link to="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
