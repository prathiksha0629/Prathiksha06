import React, { useState } from 'react';
import { Filter, Clock, Globe } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string, filters: any) => void;
  activeCategory: string;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, activeCategory }) => {
  const [filters, setFilters] = useState({
    category: 'all',
    cuisine: 'all',
    maxTime: 0
  });

  const categories = [
    { id: 'all', name: 'All Recipes', color: 'bg-gray-600' },
    { id: 'vegetarian', name: 'Vegetarian', color: 'bg-green-600' },
    { id: 'non-vegetarian', name: 'Non-Vegetarian', color: 'bg-red-600' },
    { id: 'international', name: 'International', color: 'bg-blue-600' }
  ];

  const cuisines = [
    'all', 'Indian', 'Italian', 'Chinese', 'Thai', 'Mexican', 'Japanese', 
    'American', 'French', 'Spanish', 'Greek', 'Middle Eastern'
  ];

  const timeRanges = [
    { value: 0, label: 'Any Time' },
    { value: 30, label: 'Under 30 min' },
    { value: 60, label: 'Under 1 hour' },
    { value: 90, label: 'Under 1.5 hours' }
  ];

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    onSearch('', newFilters);
  };

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onSearch('', newFilters);
  };

  return (
    <section className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Cuisine Filter */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Globe className="h-4 w-4 mr-2" />
              Cuisine Type
            </label>
            <select
              value={filters.cuisine}
              onChange={(e) => handleFilterChange('cuisine', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {cuisines.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine === 'all' ? 'All Cuisines' : cuisine}
                </option>
              ))}
            </select>
          </div>

          {/* Time Filter */}
          <div className="relative">
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <Clock className="h-4 w-4 mr-2" />
              Cooking Time
            </label>
            <select
              value={filters.maxTime}
              onChange={(e) => handleFilterChange('maxTime', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {timeRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          <div className="flex items-end">
            <button
              onClick={() => {
                const resetFilters = { category: 'all', cuisine: 'all', maxTime: 0 };
                setFilters(resetFilters);
                onSearch('', resetFilters);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;