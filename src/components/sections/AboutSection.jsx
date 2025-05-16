// src/components/sections/AboutSection.jsx
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamData } from '../../utils/data';

const AboutSection = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // Animation controls for staggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInSlide = (direction = 'left') => ({
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? -40 : 40 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  });

  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                delay: 0.2,
                duration: 0.8 
              }
            }
          }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
              About Mentone Group
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dynamic conglomerate with a portfolio of innovative companies spanning multiple industries,
            united by a commitment to excellence, sustainability, and forward-thinking solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <motion.div
            variants={fadeInSlide('left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="pr-0 md:pr-6"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To be a global leader in our diverse business verticals, driving innovation and sustainable growth
              while creating value for our stakeholders and making a positive impact on society.
            </p>
            <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-gray-700 leading-relaxed">
                Mentone Group was founded in 1985 with a focus on concrete technology. Over the decades, we have
                expanded our portfolio to include manufacturing, healthcare, design, and community development
                initiatives.
              </p>
            </div>
          </motion.div>
          
          {/* Fixed the image card with proper constraints and loading */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-xl relative h-64 md:h-80"
            variants={fadeInSlide('right')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <img 
              src="https://t4.ftcdn.net/jpg/02/20/67/65/360_F_220676590_4zfuo3TKXbys7xkC4Nx0YYFcMzkCkHTf.jpg  " 
              alt="Mentone Group Headquarters" 
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/placeholder.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
        
        <motion.div 
          className="mb-16 md:mb-24"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center relative inline-block">
              Our Leadership
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </h3>
          </div>
          
          {/* Improved team card grid layout with consistent image heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamData.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full transform transition duration-300 hover:shadow-2xl"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition duration-700 ease-in-out hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/profile-placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 md:p-8 flex-grow">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Stats section with consistent card sizes */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {[
            { number: '35+', text: 'Years of Excellence' },
            { number: '6', text: 'Companies' },
            { number: '500+', text: 'Employees' },
            { number: '12', text: 'Countries' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              className="p-6 md:p-8 bg-white rounded-xl shadow-md transform transition duration-300 hover:shadow-lg border-t-4 border-primary h-full flex flex-col justify-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <CountUp 
                number={stat.number} 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2" 
              />
              <p className="text-gray-600 font-medium">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Simple CountUp component for statistics
const CountUp = ({ number, className }) => {
  const isNumeric = !isNaN(parseInt(number));
  const finalNumber = isNumeric ? parseInt(number) : number;
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.3 
  });

  useEffect(() => {
    if (inView && isNumeric) {
      let start = 0;
      const end = parseInt(finalNumber);
      const duration = 2000; // 2 seconds
      const increment = Math.ceil(end / (duration / 16)); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, finalNumber, isNumeric]);

  return (
    <h3 ref={ref} className={className}>
      {isNumeric ? count : number}
    </h3>
  );
};

export default AboutSection;