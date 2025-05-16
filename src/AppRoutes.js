// src/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import CompanyPage from './pages/CompanyPage';
// import ContactPage from './pages/ContactPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/company/:id" element={<CompanyPage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default AppRoutes;