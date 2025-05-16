import { motion } from 'framer-motion';
import CompanyCard from '../ui/CompanyCard';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

// Sample company data - replace with your actual data
const companiesData = [
  {
    id: 1,
    name: "Mentone-Concrete",
    logo: "/images/technova-logo.svg",
    description: "Pioneering AI solutions for enterprise automation and digital transformation.",
    industry: "Technology",
    website: "https://mentoneconcrete.com/index.html",
    color: "from-blue-500 to-cyan-400",
    featured: true
  },
  {
    id: 2,
    name: "Mentone-Aluform",
    logo: "/images/greenearth-logo.svg",
    description: "Sustainable solutions for renewable energy and environmental conservation.",
    industry: "Clean Energy",
    website: "https://mentonealuform.com/",
    color: "from-green-500 to-emerald-400",
    featured: true
  },
  {
    id: 3,
    name: "Mentone-surgical",
    logo: "/images/medilife-logo.svg",
    description: "Advanced healthcare technologies improving patient outcomes worldwide.",
    industry: "Healthcare",
    website: "mentonesurgical.com",
    color: "from-red-500 to-pink-400",
    featured: true
  },
  {
    id: 4,
    name: "Jeaplast",
    logo: "/images/finedge-logo.svg",
    description: "Revolutionary fintech solutions reshaping the future of banking and finance.",
    industry: "Finance",
    website: "jeaplast.com",
    color: "from-purple-500 to-indigo-400",
    featured: true
  },
  {
    id: 5,
    name: "Oriflame-Studio",
    logo: "/images/spacevoyage-logo.svg",
    description: "Pioneering space exploration technologies and satellite communications.",
    industry: "Aerospace",
    website: "oriflamestudio.com",
    color: "from-gray-700 to-gray-500",
    featured: true
  },
  {
    id: 6,
    name: "Pgpawar-Foundation",
    logo: "/images/edusphere-logo.svg",
    description: "Transforming education through immersive digital learning experiences.",
    industry: "Education",
    website: "https://pgpawarfoundation.com/",
    color: "from-amber-500 to-orange-400",
    featured: true
  }
];

// Enhanced Company Card component
const EnhancedCompanyCard = ({ company }) => {
  return (
    <motion.div
      className="h-full rounded-2xl overflow-hidden shadow-lg relative group"
      whileHover={{ 
        y: -8,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Gradient top accent */}
      <div className={`h-2 w-full bg-gradient-to-r ${company.color}`}></div>
      
      <div className="p-8 bg-white h-full flex flex-col">
        {/* Logo area */}
        <div className="mb-6 flex items-center justify-between">
          <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center">
            {company.logo ? (
              <img src={company.logo} alt={`${company.name} logo`} className="h-10 w-10" />
            ) : (
              <span className="text-xl font-bold text-gray-500">{company.name.charAt(0)}</span>
            )}
          </div>
          <motion.div 
            className="text-xs font-semibold py-1 px-3 rounded-full bg-gray-100 text-gray-600"
            whileHover={{ scale: 1.05 }}
          >
            {company.industry}
          </motion.div>
        </div>
        
        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{company.name}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{company.description}</p>
        
        {/* Visit website button */}
        <div className="mt-auto">
          <motion.a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-4 py-2 w-full rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Visit Website</span>
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            >
              <FaExternalLinkAlt />
            </motion.span>
          </motion.a>
        </div>
      </div>
      
      {/* Hover effect overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
};

const CompaniesSection = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  // Animation for floating background elements
  const floatingAnimation = {
    initial: { y: 0, opacity: 0.7 },
    animate: { 
      y: [-10, 10, -10],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        opacity: { repeat: Infinity, duration: 6, ease: "easeInOut" }
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 filter blur-3xl opacity-70 -z-10"
        initial={floatingAnimation.initial}
        animate={floatingAnimation.animate}
      />
      <motion.div 
        className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-100 filter blur-3xl opacity-70 -z-10"
        initial={floatingAnimation.initial}
        animate={{
          y: [10, -10, 10],
          opacity: [0.7, 0.9, 0.7],
          transition: {
            y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
            opacity: { repeat: Infinity, duration: 7, ease: "easeInOut" }
          }
        }}
      />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-sm font-semibold uppercase tracking-wider text-blue-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Portfolio
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Companies
          </motion.h2>
          
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Discover our diverse portfolio of innovative businesses spanning multiple industries,
            each committed to excellence and leadership in their respective fields.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {companiesData.map((company) => (
            <motion.div
              key={company.id}
              variants={itemVariants}
              className="h-full"
            >
              <EnhancedCompanyCard company={company} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 md:h-16 lg:h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.17,105.43,165.17,111.3,321.39,56.44Z"
            className="fill-gray-100"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default CompaniesSection;