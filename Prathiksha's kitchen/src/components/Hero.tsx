import React from 'react';
import { ChefHat, Clock, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-yellow-200">PRATHIKSHA'S</span> Kitchen
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover authentic flavors from around the world with our curated collection of 
            vegetarian, non-vegetarian, and international recipes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Explore Recipes
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-200">
              Join Premium
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <ChefHat className="h-8 w-8 text-yellow-200" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm opacity-90">Recipes</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-yellow-200" />
              </div>
              <div className="text-3xl font-bold">15min</div>
              <div className="text-sm opacity-90">Quick Recipes</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-yellow-200" />
              </div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm opacity-90">Happy Cooks</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-200" />
              </div>
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;