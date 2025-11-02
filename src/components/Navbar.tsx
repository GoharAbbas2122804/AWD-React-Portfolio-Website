import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      >
        <div className="px-4 backdrop-blur-3xl bg-black/50 rounded-50 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="white" strokeWidth="2" />
                </svg>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6 ml-8">
              <Link to="/">
                <button className="px-4 py-2 text-sm text-white hover:text-gray-300 transition-colors">
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className="px-4 py-2 text-sm text-white hover:text-gray-300 transition-colors">
                  About
                </button>
              </Link>
              <Link to="/projects">
                <button className="px-4 py-2 text-sm text-white hover:text-gray-300 transition-colors">
                  Projects
                </button>
              </Link>
              <Link to="/services">
                <button className="px-4 py-2 text-sm text-white hover:text-gray-300 transition-colors">
                  Services
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/contact">
              <button className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm text-white hover:bg-gray-700/80 transition-colors">
                Contact
              </button>
            </Link>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            {/* Mobile menu button */}
            <button
              className="p-2 rounded-md focus:outline-none text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
              <button
                className="absolute top-6 right-6 p-2 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-6 py-3 text-white">Home</button>
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-6 py-3 text-white">About</button>
              </Link>
              <Link to="/projects" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-6 py-3 text-white">Projects</button>
              </Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-6 py-3 text-white">Services</button>
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full text-white">
                  Contact
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;