import React from 'react';
import { Clock, Users, Star, Crown } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onSelect: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelect }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vegetarian':
        return 'bg-green-100 text-green-800';
      case 'non-vegetarian':
        return 'bg-red-100 text-red-800';
      case 'international':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Hard':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
      onClick={() => onSelect(recipe)}
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(recipe.category)}`}>
            {recipe.category.replace('-', ' ')}
          </span>
        </div>
        {recipe.isPremium && (
          <div className="absolute top-4 right-4">
            <Crown className="h-6 w-6 text-yellow-400" />
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-sm">
          {recipe.cuisine}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
          {recipe.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{recipe.prepTime + recipe.cookTime}min</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className={`font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">4.{Math.floor(Math.random() * 5) + 5}</span>
          </div>
          <div className="text-sm font-medium text-orange-600">
            {recipe.nutrition.calories} cal
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;