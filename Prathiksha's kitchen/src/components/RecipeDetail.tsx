import React from 'react';
import { ArrowLeft, Clock, Users, ChefHat, Heart, Share2, Crown, Star } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'vegetarian':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'non-vegetarian':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'international':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Medium':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Hard':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image */}
      <div className="relative h-96">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </button>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex space-x-3">
          <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg">
            <Heart className="h-6 w-6 text-gray-800" />
          </button>
          <button className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-colors duration-200 shadow-lg">
            <Share2 className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Recipe Title Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center mb-3 space-x-3">
            <span className={`px-4 py-2 text-sm font-medium rounded-full border ${getCategoryColor(recipe.category)}`}>
              {recipe.category.replace('-', ' ')}
            </span>
            <span className="px-4 py-2 text-sm bg-black/50 text-white rounded-full">
              {recipe.cuisine}
            </span>
            {recipe.isPremium && (
              <span className="flex items-center px-3 py-2 text-sm bg-yellow-500 text-white rounded-full">
                <Crown className="h-4 w-4 mr-1" />
                Premium
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">{recipe.title}</h1>
          <p className="text-gray-200 text-lg">{recipe.description}</p>
        </div>
      </div>

      {/* Recipe Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Prep Time</div>
                  <div className="text-lg font-semibold">{recipe.prepTime}min</div>
                </div>
                <div className="text-center">
                  <ChefHat className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Cook Time</div>
                  <div className="text-lg font-semibold">{recipe.cookTime}min</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-500">Servings</div>
                  <div className="text-lg font-semibold">{recipe.servings}</div>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </div>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm">4.{Math.floor(Math.random() * 5) + 5}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold mr-4 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Nutrition Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-semibold text-orange-600">{recipe.nutrition.calories}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-semibold">{recipe.nutrition.protein}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Carbohydrates</span>
                  <span className="font-semibold">{recipe.nutrition.carbs}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fat</span>
                  <span className="font-semibold">{recipe.nutrition.fat}</span>
                </div>
              </div>
            </div>

            {/* Recipe Tips */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chef's Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fresh ingredients make all the difference</li>
                <li>• Taste and adjust seasoning as you go</li>
                <li>• Let meat rest before slicing</li>
                <li>• Prep all ingredients before cooking</li>
              </ul>
            </div>

            {/* Share Recipe */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share This Recipe</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm">
                  Facebook
                </button>
                <button className="bg-pink-500 text-white p-3 rounded-lg hover:bg-pink-600 transition-colors duration-200 text-sm">
                  Instagram
                </button>
                <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors duration-200 text-sm">
                  WhatsApp
                </button>
                <button className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 text-sm">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;