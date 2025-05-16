import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CompanyCard = ({ company }) => {
  const { id, name, logo, description, color, industry } = company;
  
  return (
    <div className="card group">
      <div className="h-2" style={{ backgroundColor: color }}></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={logo} alt={name} className="w-12 h-12 object-contain mr-3" />
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <span className="text-sm text-gray-500">{industry}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link 
          to={`/company/${id}`} 
          className="flex items-center text-primary font-medium group-hover:text-secondary transition-colors"
        >
          Learn more <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
export default CompanyCard;