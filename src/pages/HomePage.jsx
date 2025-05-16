// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import CompaniesSection from '../components/sections/CompaniesSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Mentone Group | Home</title>
        <meta name="description" content="Mentone Group - A conglomerate of innovative companies spanning concrete, aluminum formwork, surgical instruments, plastics and creative studios." />
      </Helmet>
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutSection />
        <CompaniesSection />
        <ContactSection />
      </motion.div>
    </>
  );
};

export default HomePage;