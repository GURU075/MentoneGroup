import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  // Company data with name, description, and background image info
  const companies = [
    {
      name: "Mentone-Concrete",
      description: "Premium concrete solutions for residential and commercial projects",
      bgImage: "https://media.istockphoto.com/id/1420678520/photo/building-site-at-sunset.jpg?s=612x612&w=0&k=20&c=HoDUK1RxsH78Fj9D34nao_MUTbf-vR3G97zUWMtES4k=" // Using placeholder images
    },
    {
      name: "Mentone-Aluform",
      description: "Innovative formwork solutions for modern construction",
      bgImage: "https://t4.ftcdn.net/jpg/02/20/67/65/360_F_220676590_4zfuo3TKXbys7xkC4Nx0YYFcMzkCkHTf.jpg"
    },
    {
      name: "Mentone-Surgical",
      description: "High-precision surgical instruments for healthcare professionals",
      bgImage: "https://img.freepik.com/free-photo/construction-site-silhouettes_1127-3253.jpg?semt=ais_hybrid&w=740"
    },
    {
      name: "Jeaplast",
      description: "Sustainable plastic manufacturing for diverse industries",
      bgImage: "https://t4.ftcdn.net/jpg/03/00/13/51/360_F_300135186_OLvr4cgD5uiiidmPKXh5dtn2we2oWDbl.jpg"
    },
    {
      name: "Oriflame-Studio",
      description: "Award-winning design studio for branding and digital experiences",
      bgImage: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?cs=srgb&dl=pexels-sevenstormphotography-439416.jpg&fm=jpg"
    },
    {
      name: "Pgpawar-Foundation",
      description: "Cutting-edge technology solutions for the digital age",
      bgImage: "https://static.vecteezy.com/system/resources/thumbnails/035/858/476/small/construction-site-banner-truck-car-workers-concrete-piles-tower-crane-under-construction-design-background-building-materials-and-equipment-cityscape-skyline-cartoon-flat-illustration-vector.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === companies.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative bg-gray-900 h-screen flex items-center overflow-hidden">
      {/* Background image slides with enhanced animation */}
      {companies.map((company, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentSlide === index 
              ? 'opacity-100 scale-100' 
              : index === (currentSlide + 1) % companies.length 
                ? 'opacity-0 scale-110' 
                : 'opacity-0 scale-100'
          }`}
        >
          <img
            src={company.bgImage}
            alt={company.name}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-500 transform translate-y-0">
          Mentone Group
        </h1>
        
        <div className="mb-12 overflow-hidden h-32">
          {companies.map((company, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-full opacity-0 absolute'
              }`}
            >
              <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-blue-700">
                {company.name}
              </h2>
              <p className="text-lg md:text-xl max-w-2xl">
                {company.description}
              </p>
            </div>
          ))}
        </div>
        
      <div className="relative z-10">
  <Link
    to="/discoverourcompany"
    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md text-lg transition-colors"
  >
    Discover Our Companies
  </Link>
</div>

        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {companies.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                currentSlide === index ? 'bg-blue-500 w-8' : 'bg-white/30 w-4'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;