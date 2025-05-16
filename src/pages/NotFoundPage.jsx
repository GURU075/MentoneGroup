// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Mentone Group</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-light px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Button to="/" variant="primary">
            Back to Homepage
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;