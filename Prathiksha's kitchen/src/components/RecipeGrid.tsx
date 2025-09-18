import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types/Recipe';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeSelect: (recipe: Recipe) => void;
  searchQuery: string;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, onRecipeSelect, searchQuery }) => {
  if (recipes.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">No recipes found</h3>
          <p className="text-gray-600 mb-8">
            {searchQuery 
              ? `We couldn't find any recipes matching "${searchQuery}". Try adjusting your search or filters.`
              : "Try adjusting your filters to see more recipes."
            }
          </p>
          <div className="text-sm text-gray-500">
            <p>Suggestions:</p>
            <ul className="mt-2 space-y-1">
              <li>• Check your spelling</li>
              <li>• Try broader search terms</li>
              <li>• Remove some filters</li>
              <li>• Browse our featured categories</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Recipe Collection'}
          </h2>
          <p className="text-gray-600">
            {recipes.length} delicious recipe{recipes.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onSelect={onRecipeSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeGrid;