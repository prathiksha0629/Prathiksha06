import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import SearchFilters from './components/SearchFilters';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import { Recipe } from './types/Recipe';
import { recipes } from './data/recipes';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleRecipeSelect = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToGrid = () => {
    setSelectedRecipe(null);
  };

  const handleSearch = (query: string, filters: any) => {
    setSearchQuery(query);
    let filtered = recipes;

    // Apply search query
    if (query) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(query.toLowerCase())
        )
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === filters.category);
    }

    // Apply cuisine filter
    if (filters.cuisine !== 'all') {
      filtered = filtered.filter(recipe => recipe.cuisine === filters.cuisine);
    }

    // Apply cooking time filter
    if (filters.maxTime > 0) {
      filtered = filtered.filter(recipe => recipe.cookTime <= filters.maxTime);
    }

    setFilteredRecipes(filtered);
    setActiveCategory(filters.category);
  };

  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header onSearch={handleSearch} />
        <RecipeDetail recipe={selectedRecipe} onBack={handleBackToGrid} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />
      <Hero />
      <SearchFilters onSearch={handleSearch} activeCategory={activeCategory} />
      <RecipeGrid 
        recipes={filteredRecipes} 
        onRecipeSelect={handleRecipeSelect}
        searchQuery={searchQuery}
      />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;