import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              PRATHIKSHA'S <span className="text-orange-500">Recipes</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Discover authentic flavors from around the world. From traditional family recipes to 
              modern culinary innovations, we bring you the best of global cuisine right to your kitchen.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#vegetarian" className="text-gray-400 hover:text-white transition-colors duration-200">Vegetarian Recipes</a></li>
              <li><a href="#non-vegetarian" className="text-gray-400 hover:text-white transition-colors duration-200">Non-Vegetarian</a></li>
              <li><a href="#international" className="text-gray-400 hover:text-white transition-colors duration-200">International Cuisine</a></li>
              <li><a href="#subscription" className="text-gray-400 hover:text-white transition-colors duration-200">Premium Plans</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-3" />
                hello@prathiksharecipes.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-3" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-3" />
                123 Culinary Street, Food City
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest recipes, cooking tips, and exclusive offers.
              </p>
            </div>
            <div className="flex max-w-md lg:ml-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PRATHIKSHA'S Recipes. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;