import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section bg-gray-200 text-center py-20 px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Our Forum!</h1>
      <p className="text-xl text-gray-600 mb-8">Join our community to share knowledge, discuss ideas, and connect with others.</p>
      <Link to="/categories" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Browse Categories
      </Link>
    </div>
  );
};

export default HeroSection;