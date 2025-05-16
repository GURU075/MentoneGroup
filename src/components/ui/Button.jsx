import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  href = null,
  to = null,
  onClick = null,
  type = 'button',
  ...props 
}) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;