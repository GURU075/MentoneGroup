// src/pages/ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection';
// import ContactForm from '../components/ui/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Mentone Group</title>
        <meta 
          name="description" 
          content="Get in touch with Mentone Group. Contact us for inquiries about our companies, products, or services." 
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        {/* Full-width responsive contact section */}
        <div className="w-full">
          <ContactSection />
        </div>
      </motion.div>
    </>
  );
};

export default ContactPage;
