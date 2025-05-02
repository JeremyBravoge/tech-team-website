
import { useState } from "react";
import SectionTitle from "../SectionTitle";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "TechCorp",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "Being a part of the Tech Team community has been invaluable for my career growth. The educational resources and networking opportunities have helped me stay at the cutting edge of technology."
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "DataWorks Inc.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "I've learned so much from the workshops and discussions. The community is incredibly supportive and the knowledge sharing is top-notch. Couldn't recommend it more highly!"
    },
    {
      name: "Priya Patel",
      role: "UX Designer",
      company: "Creative Solutions",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "Tech Team provides a fantastic platform for designers and developers to collaborate. The events are well-organized and the content is always relevant to current industry trends."
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="What Our Members Say" 
          subtitle="Hear from our community members about their experiences with Tech Team"
          centered
        />
        
        <div className="mt-12 relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-techblue-light to-techblue rounded-2xl p-8 md:p-10 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="md:w-1/4 flex justify-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="rounded-full w-24 h-24 object-cover border-4 border-white"
                />
              </div>
              <div className="md:w-3/4">
                <svg className="h-10 w-10 text-white opacity-30 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg md:text-xl italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <p className="font-semibold text-xl">{testimonials[activeIndex].name}</p>
                  <p className="text-white/80">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-techblue transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === activeIndex ? 'bg-techblue' : 'bg-gray-300'}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-techblue transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
