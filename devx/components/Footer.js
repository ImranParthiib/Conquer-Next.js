// components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 DEVX. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-pink-500">
            Facebook
          </a>
          <a href="#" className="hover:text-pink-500">
            Twitter
          </a>
          <a href="#" className="hover:text-pink-500">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
