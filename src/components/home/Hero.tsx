
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-techblue to-techblue-dark text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`, 
          backgroundSize: "50px 50px" 
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              <span className="block">Empowering Technology</span>
              <span className="block text-techgold">Everywhere</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Join our community of tech enthusiasts, innovators, and developers to learn, collaborate and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="bg-techgold hover:bg-techgold-dark text-white border-0">
                <Link to="/about">Join Our Community</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                <Link to="/events" className="flex items-center">
                  Explore Events <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fade-in">
            <img 
              src="/public/lovable-uploads/10cd6829-3061-4a7b-8551-9b0b5badcd43.png" 
              alt="Tech Team Logo" 
              className="h-64 md:h-80 w-64 md:w-80 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
