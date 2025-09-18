export interface Recipe {
  id: number;
  title: string;
  image: string;
  category: 'vegetarian' | 'non-vegetarian' | 'international';
  cuisine: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  description: string;
  isPremium?: boolean;
}