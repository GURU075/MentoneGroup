// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import DiscoverOurCompany from './components/sections/DiscoverOurCompany';
import AboutSection from './components/sections/AboutSection';
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company/:companyId" element={<CompanyPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/discoverourcompany" element={<DiscoverOurCompany />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
