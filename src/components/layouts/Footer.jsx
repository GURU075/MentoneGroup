// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-gray-900 text-white relative">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="mb-6 lg:mb-0">
            <Link 
              to="/" 
              className="inline-flex items-center group transition-all duration-300"
            >
              <img 
                src="/images/logo.svg" 
                alt="Mentone Group" 
                className="h-12 filter drop-shadow-lg group-hover:scale-105 transition-transform" 
              />
              <span className="ml-3 font-heading font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Mentone Group
              </span>
            </Link>
            
            <p className="mt-5 text-gray-300 leading-relaxed">
              A dynamic conglomerate with diverse businesses spanning multiple industries, 
              united by a commitment to excellence and innovation.
            </p>
            
            <div className="mt-6 flex space-x-5">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Site Navigation */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/", name: "Home" },
                { path: "/about", name: "About Us" },
                { path: "/services", name: "Services" },
                { path: "/portfolio", name: "Portfolio" },
                { path: "/careers", name: "Careers" },
                { path: "/contact", name: "Contact Us" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white flex items-center group transition-all duration-300"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="border-b border-transparent group-hover:border-gray-400">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Our Companies</span>
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { path: "/company/mentone-concrete", name: "Mentone Concrete" },
                { path: "/company/mentone-aluform", name: "Mentone Aluform" },
                { path: "/company/mentone-surgical", name: "Mentone Surgical" },
                { path: "/company/jeaplast", name: "Jeaplast" },
                { path: "/company/oriflame-studio", name: "Oriflame Studio" },
                { path: "/company/pgp-awar-foundation", name: "PGP Awar Foundation" }
              ].map((company, index) => (
                <li key={index}>
                  <Link 
                    to={company.path} 
                    className="text-gray-300 hover:text-white flex items-center group transition-all duration-300"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="border-b border-transparent group-hover:border-gray-400">
                      {company.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-6 relative">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  123 Business Park, Corporate Avenue, Mumbai, India
                </span>
              </li>
              <li className="flex items-center group">
                <FaPhone className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <a href="tel:+912212345678" className="text-gray-300 group-hover:text-white transition-colors">
                  +91 22 1234 5678
                </a>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className="w-5 h-5 text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@mentonegroup.com" className="text-gray-300 group-hover:text-white transition-colors">
                  info@mentonegroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and secondary nav */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} <span className="font-medium">Mentone Group</span>. All rights reserved.
            </p>
            
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom subtle gradient */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;