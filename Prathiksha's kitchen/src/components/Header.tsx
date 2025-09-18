import React, { useState } from 'react';
import { Search, Menu, X, User, Heart, ShoppingCart } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string, filters: any) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, { category: 'all', cuisine: 'all', maxTime: 0 });
  };

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Vegetarian', href: '#vegetarian' },
    { name: 'Non-Vegetarian', href: '#non-vegetarian' },
    { name: 'International', href: '#international' },
    { name: 'Subscription', href: '#subscription' },
    { name: 'About', href: '#about' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">
                PRATHIKSHA'S <span className="text-teal-600">Recipes</span>
              </h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Search recipes, ingredients, or cuisines..."
              />
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-orange-600 transition-colors duration-200">
              <User className="h-6 w-6" />
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-600 hover:text-orange-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search recipes..."
            />
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;