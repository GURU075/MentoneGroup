import React, { useState, useEffect } from 'react';

const DiscoverOurCompany = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const companies = [
    {
      id: 1,
      name: "Mentone Concrete",
      url: "mentoneconcrete.com",
      logo: "/api/placeholder/80/80",
      category: "construction",
      description: "Premium concrete solutions for commercial and residential projects.",
      color: "bg-blue-600"
    },
    {
      id: 2,
      name: "Mentone Aluform",
      url: "mentonealuform.com",
      logo: "/api/placeholder/80/80",
      category: "manufacturing",
      description: "Innovative aluminum formwork systems for modern construction.",
      color: "bg-gray-700"
    },
    {
      id: 3,
      name: "Mentone Surgical",
      url: "mentonesurgical.com",
      logo: "/api/placeholder/80/80",
      category: "healthcare",
      description: "Advanced surgical equipment and healthcare solutions.",
      color: "bg-teal-600"
    },
    {
      id: 4,
      name: "JEA Plast",
      url: "jeaplast.com",
      logo: "/api/placeholder/80/80",
      category: "manufacturing",
      description: "Specialized plastic manufacturing for industrial applications.",
      color: "bg-green-600"
    },
    {
      id: 5,
      name: "Oriflame Studio",
      url: "oriflamestudio.com",
      logo: "/api/placeholder/80/80",
      category: "creative",
      description: "Creative design studio delivering unique visual identities.",
      color: "bg-purple-600"
    },
    {
      id: 6,
      name: "PGP Awar Foundation",
      url: "pgpawarfoundation.com",
      logo: "/api/placeholder/80/80",
      category: "nonprofit",
      description: "Supporting community initiatives and social development projects.",
      color: "bg-amber-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Companies' },
    { id: 'construction', name: 'Construction' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'creative', name: 'Creative' },
    { id: 'nonprofit', name: 'Non-Profit' }
  ];

  const filteredCompanies = activeTab === 'all' 
    ? companies 
    : companies.filter(company => company.category === activeTab);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
     

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3">
            {categories.map(category => (
              <button
                key={category.id}
                className={`block w-full text-left px-3 py-2 rounded-md my-1 ${
                  activeTab === category.id ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setActiveTab(category.id);
                  setIsMenuOpen(false);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Discover Our Companies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of companies spanning multiple industries, 
            each committed to excellence and innovation in their respective fields.
          </p>
        </div>

        {/* Category filters - desktop */}
        <div className="hidden md:flex justify-center mb-10">
          <div className="inline-flex items-center bg-white p-1 rounded-lg shadow-md">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Companies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map(company => (
            <div 
              key={company.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105"
            >
              <div className={`${company.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
                    <p className="text-blue-600">{company.url}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{company.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600">
                    {company.category.charAt(0).toUpperCase() + company.category.slice(1)}
                  </span>
                  <a 
                    href={`https://${company.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      
    </div>
  );
};

export default DiscoverOurCompany;