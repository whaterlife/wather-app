import React, { useState } from "react";
import { Info, Box, Wrench, Mail, BookOpen, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isEducationOpen, setEducationOpen] = useState(false);

  return (
    <nav className="text-orange-800 px-8 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <img src="src/assets/images/hat.jpg" alt="logo" />
        <ul className="hidden md:flex space-x-8">
          <li className="flex items-center space-x-1">
            <Info size={18} />
            <a href="#about" className="hover:text-orange-400">About</a>
          </li>
          <li
            className="relative flex items-center space-x-1"
            onClick={() => setProductsOpen((prev) => !prev)}
          >
            <Box size={18} />
            <a href="#products" className="hover:text-orange-400">
              Products & Services
            </a>
            {isProductsOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-blue-600 shadow-lg rounded-md z-20">
                <a href="#plumbing-materials" className="block px-4 py-2 hover:bg-blue-100">
                  Plumbing Materials
                </a>
                <a href="#services" className="block px-4 py-2 hover:bg-blue-100">
                  Services
                </a>
              </div>
            )}
          </li>
          <li
            className="relative flex items-center space-x-1"
            onClick={() => setEducationOpen((prev) => !prev)}
          >
            <BookOpen size={18} />
            <a href="#education" className="hover:text-orange-400">
              Education
            </a>
            {isEducationOpen && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-white text-blue-600 shadow-lg rounded-md z-20">
                <a href="#resources" className="block px-4 py-2 hover:bg-blue-100">
                  Resources
                </a>
                <a href="#events" className="block px-4 py-2 hover:bg-blue-100">
                  Events
                </a>
                <a href="#campaign" className="block px-4 py-2 hover:bg-blue-100">
                  Campaign
                </a>
              </div>
            )}
          </li>
          <li className="flex items-center space-x-1">
            <Wrench size={18} />
            <a href="#plumberlist"><Link to="/list" className="hover:text-orange-400" >Plumberlist</Link></a>
          </li>
          <li className="flex items-center space-x-1">
            <Mail size={18} />
            <a href="#contact" className="hover:text-orange-400">Contact Us</a>
          </li>
        </ul>

        {/* Plumber Shortcut Icon */}
        <Link
          to="/plumber"
          className="flex items-center justify-center w-14 h-14 bg-white rounded-full hover:bg-gray-200 mr-4"
        >
          <User size={35} className="text-orange-700" />
        </Link>

        <div className="hidden md:block">
          <Link to="/sign" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400">Sign Up</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

