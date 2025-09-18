import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  // Vegetarian Recipes
  {
    id: 1,
    title: "Butter Paneer Masala",
    image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg",
    category: "vegetarian",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 30,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "400g paneer, cubed",
      "2 tbsp butter",
      "1 large onion, chopped",
      "4 cloves garlic, minced",
      "1 inch ginger, minced",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1 cup tomato puree",
      "1/2 cup heavy cream",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Heat butter in a large pan over medium heat",
      "Add onions and cook until golden brown",
      "Add garlic, ginger, and spices. Cook for 1 minute",
      "Add tomato puree and simmer for 10 minutes",
      "Add paneer cubes and simmer for 5 minutes",
      "Stir in cream and cook for another 3 minutes",
      "Garnish with cilantro and serve hot"
    ],
    nutrition: {
      calories: 285,
      protein: "15g",
      carbs: "12g",
      fat: "22g"
    },
    description: "Rich and creamy Indian paneer curry with aromatic spices and tomato-based gravy."
  },
  {
    id: 2,
    title: "Vegetable Biryani",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    category: "vegetarian",
    cuisine: "Indian",
    prepTime: 30,
    cookTime: 45,
    difficulty: "Hard",
    servings: 6,
    ingredients: [
      "2 cups basmati rice",
      "1 cup mixed vegetables",
      "2 onions, sliced",
      "1/2 cup yogurt",
      "2 tbsp biryani masala",
      "1 tsp turmeric",
      "4 cups vegetable stock",
      "2 bay leaves",
      "4 green cardamom",
      "1 inch cinnamon stick",
      "Salt to taste",
      "Fresh mint and cilantro"
    ],
    instructions: [
      "Soak basmati rice for 30 minutes",
      "Marinate vegetables with yogurt and spices",
      "Fry onions until golden and crispy",
      "Layer rice and vegetables in a heavy-bottomed pot",
      "Add stock and whole spices",
      "Cook on high heat for 3 minutes, then simmer for 40 minutes",
      "Garnish with fried onions, mint, and cilantro"
    ],
    nutrition: {
      calories: 320,
      protein: "8g",
      carbs: "58g",
      fat: "8g"
    },
    description: "Fragrant and flavorful layered rice dish with mixed vegetables and aromatic spices."
  },
  {
    id: 3,
    title: "Margherita Pizza",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    category: "vegetarian",
    cuisine: "Italian",
    prepTime: 90,
    cookTime: 15,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "500g pizza dough",
      "200ml tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "1 tsp oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 250°C",
      "Roll out pizza dough on floured surface",
      "Spread tomato sauce evenly",
      "Add torn mozzarella pieces",
      "Drizzle with olive oil and season",
      "Bake for 12-15 minutes until golden",
      "Garnish with fresh basil before serving"
    ],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "35g",
      fat: "11g"
    },
    description: "Classic Italian pizza with fresh mozzarella, tomato sauce, and aromatic basil."
  },
  {
    id: 4,
    title: "Avocado Toast",
    image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg",
    category: "vegetarian",
    cuisine: "Western",
    prepTime: 10,
    cookTime: 5,
    difficulty: "Easy",
    servings: 2,
    ingredients: [
      "4 slices whole grain bread",
      "2 ripe avocados",
      "1 lime, juiced",
      "Salt and pepper to taste",
      "2 tbsp olive oil",
      "Red pepper flakes",
      "Cherry tomatoes for garnish"
    ],
    instructions: [
      "Toast bread slices until golden",
      "Mash avocados with lime juice and seasoning",
      "Spread avocado mixture on toast",
      "Drizzle with olive oil",
      "Sprinkle with red pepper flakes",
      "Garnish with cherry tomatoes"
    ],
    nutrition: {
      calories: 245,
      protein: "8g",
      carbs: "28g",
      fat: "14g"
    },
    description: "Healthy and delicious breakfast with creamy avocado on crispy whole grain toast."
  },
  {
    id: 5,
    title: "Caprese Salad",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg",
    category: "vegetarian",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 0,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "4 large tomatoes, sliced",
      "200g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "3 tbsp extra virgin olive oil",
      "2 tbsp balsamic vinegar",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Arrange tomato and mozzarella slices alternately",
      "Tuck basil leaves between slices",
      "Drizzle with olive oil and balsamic vinegar",
      "Season with salt and pepper",
      "Let stand for 10 minutes before serving"
    ],
    nutrition: {
      calories: 185,
      protein: "10g",
      carbs: "8g",
      fat: "14g"
    },
    description: "Fresh Italian salad with ripe tomatoes, creamy mozzarella, and fragrant basil."
  },

  // Non-Vegetarian Recipes
  {
    id: 6,
    title: "Chicken Tikka Masala",
    image: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    category: "non-vegetarian",
    cuisine: "Indian",
    prepTime: 30,
    cookTime: 40,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "1 kg chicken breast, cubed",
      "1/2 cup yogurt",
      "2 tbsp tikka masala powder",
      "2 onions, chopped",
      "4 tomatoes, pureed",
      "1/2 cup heavy cream",
      "3 tbsp ghee",
      "1 inch ginger-garlic paste",
      "Salt to taste",
      "Fresh cilantro"
    ],
    instructions: [
      "Marinate chicken in yogurt and tikka masala for 2 hours",
      "Grill chicken pieces until cooked through",
      "Heat ghee and sauté onions until golden",
      "Add ginger-garlic paste and cook for 2 minutes",
      "Add tomato puree and simmer for 15 minutes",
      "Add grilled chicken and cream",
      "Simmer for 10 minutes and garnish with cilantro"
    ],
    nutrition: {
      calories: 425,
      protein: "35g",
      carbs: "12g",
      fat: "28g"
    },
    description: "Creamy and spiced chicken curry with rich tomato-based gravy and aromatic spices.",
    isPremium: true
  },
  {
    id: 7,
    title: "Grilled Salmon",
    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg",
    category: "non-vegetarian",
    cuisine: "Western",
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "4 salmon fillets",
      "2 tbsp olive oil",
      "2 lemons, juiced",
      "3 cloves garlic, minced",
      "1 tsp dried dill",
      "Salt and pepper to taste",
      "Fresh herbs for garnish"
    ],
    instructions: [
      "Preheat grill to medium-high heat",
      "Brush salmon with olive oil",
      "Season with lemon juice, garlic, and dill",
      "Grill for 6-8 minutes per side",
      "Check internal temperature reaches 145°F",
      "Garnish with fresh herbs and serve"
    ],
    nutrition: {
      calories: 285,
      protein: "40g",
      carbs: "2g",
      fat: "12g"
    },
    description: "Perfectly grilled salmon with herbs and lemon, rich in omega-3 fatty acids."
  },
  {
    id: 8,
    title: "Beef Tacos",
    image: "https://images.pexels.com/photos/2087090/pexels-photo-2087090.jpeg",
    category: "non-vegetarian",
    cuisine: "Mexican",
    prepTime: 20,
    cookTime: 25,
    difficulty: "Easy",
    servings: 6,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tbsp taco seasoning",
      "1 cup shredded cheese",
      "Lettuce, chopped",
      "Tomatoes, diced",
      "Sour cream",
      "Salsa"
    ],
    instructions: [
      "Cook ground beef with onions until browned",
      "Add taco seasoning and cook for 5 minutes",
      "Warm taco shells in oven",
      "Fill shells with beef mixture",
      "Top with cheese, lettuce, and tomatoes",
      "Serve with sour cream and salsa"
    ],
    nutrition: {
      calories: 385,
      protein: "24g",
      carbs: "28g",
      fat: "20g"
    },
    description: "Flavorful Mexican tacos with seasoned ground beef and fresh toppings."
  },
  {
    id: 9,
    title: "Chicken Caesar Salad",
    image: "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg",
    category: "non-vegetarian",
    cuisine: "Western",
    prepTime: 20,
    cookTime: 15,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "2 chicken breasts",
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/4 cup parmesan cheese",
      "Croutons",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season and grill chicken breasts",
      "Let chicken rest, then slice",
      "Wash and chop romaine lettuce",
      "Toss lettuce with Caesar dressing",
      "Top with sliced chicken and croutons",
      "Sprinkle with parmesan cheese"
    ],
    nutrition: {
      calories: 325,
      protein: "28g",
      carbs: "12g",
      fat: "20g"
    },
    description: "Classic Caesar salad topped with grilled chicken breast and parmesan cheese."
  },
  {
    id: 10,
    title: "Fish and Chips",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    category: "non-vegetarian",
    cuisine: "British",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "4 white fish fillets",
      "500g potatoes, cut into chips",
      "1 cup flour",
      "1 cup beer",
      "2 tsp baking powder",
      "Oil for frying",
      "Salt and pepper",
      "Malt vinegar",
      "Mushy peas"
    ],
    instructions: [
      "Heat oil to 180°C for frying",
      "Make batter with flour, beer, and baking powder",
      "Fry chips until golden, set aside",
      "Coat fish in batter and fry until crispy",
      "Drain on paper towels",
      "Serve with chips, vinegar, and mushy peas"
    ],
    nutrition: {
      calories: 485,
      protein: "28g",
      carbs: "45g",
      fat: "22g"
    },
    description: "Traditional British fish and chips with beer batter and crispy golden chips."
  },

  // International Recipes
  {
    id: 11,
    title: "Pad Thai",
    image: "https://images.pexels.com/photos/1247755/pexels-photo-1247755.jpeg",
    category: "international",
    cuisine: "Thai",
    prepTime: 25,
    cookTime: 15,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "200g rice noodles",
      "200g shrimp or chicken",
      "3 eggs, beaten",
      "2 cups bean sprouts",
      "3 green onions, chopped",
      "3 tbsp tamarind paste",
      "2 tbsp fish sauce",
      "2 tbsp brown sugar",
      "Crushed peanuts",
      "Lime wedges"
    ],
    instructions: [
      "Soak rice noodles in warm water until soft",
      "Heat oil in wok over high heat",
      "Stir-fry protein until cooked",
      "Add eggs and scramble",
      "Add noodles and sauce mixture",
      "Toss with bean sprouts and green onions",
      "Garnish with peanuts and serve with lime"
    ],
    nutrition: {
      calories: 425,
      protein: "22g",
      carbs: "52g",
      fat: "15g"
    },
    description: "Authentic Thai stir-fried noodles with sweet, sour, and umami flavors."
  },
  {
    id: 12,
    title: "Ramen Bowl",
    image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
    category: "international",
    cuisine: "Japanese",
    prepTime: 20,
    cookTime: 45,
    difficulty: "Hard",
    servings: 4,
    ingredients: [
      "4 portions ramen noodles",
      "1 liter chicken broth",
      "2 tbsp miso paste",
      "4 soft-boiled eggs",
      "200g pork belly, sliced",
      "2 green onions, chopped",
      "1 sheet nori, cut",
      "Bean sprouts",
      "Bamboo shoots"
    ],
    instructions: [
      "Prepare soft-boiled eggs and set aside",
      "Heat and season chicken broth with miso",
      "Cook ramen noodles according to package",
      "Char pork belly until crispy",
      "Assemble bowls with noodles and broth",
      "Top with eggs, pork, and vegetables",
      "Garnish with nori and green onions"
    ],
    nutrition: {
      calories: 485,
      protein: "28g",
      carbs: "45g",
      fat: "22g"
    },
    description: "Rich and flavorful Japanese ramen with miso broth and traditional toppings.",
    isPremium: true
  },
  {
    id: 13,
    title: "Paella Valenciana",
    image: "https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg",
    category: "international",
    cuisine: "Spanish",
    prepTime: 30,
    cookTime: 40,
    difficulty: "Hard",
    servings: 6,
    ingredients: [
      "2 cups bomba rice",
      "4 cups chicken stock",
      "500g chicken, cut pieces",
      "200g green beans",
      "200g lima beans",
      "4 tomatoes, grated",
      "1 red pepper, sliced",
      "Saffron threads",
      "4 tbsp olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Heat oil in paella pan",
      "Brown chicken pieces and set aside",
      "Sauté vegetables until tender",
      "Add grated tomatoes and cook until thick",
      "Add rice and stir for 2 minutes",
      "Add hot stock with saffron",
      "Return chicken to pan and simmer for 25 minutes",
      "Let rest for 5 minutes before serving"
    ],
    nutrition: {
      calories: 425,
      protein: "28g",
      carbs: "48g",
      fat: "14g"
    },
    description: "Traditional Spanish rice dish with chicken, vegetables, and aromatic saffron."
  },
  {
    id: 14,
    title: "Dim Sum Dumplings",
    image: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg",
    category: "international",
    cuisine: "Chinese",
    prepTime: 60,
    cookTime: 15,
    difficulty: "Hard",
    servings: 6,
    ingredients: [
      "2 cups all-purpose flour",
      "300g ground pork",
      "100g shrimp, chopped",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tsp ginger, minced",
      "2 green onions, chopped",
      "1 tbsp cornstarch",
      "Salt and white pepper"
    ],
    instructions: [
      "Make dough with flour and warm water",
      "Mix filling ingredients in bowl",
      "Roll dough into small circles",
      "Place filling in center and seal edges",
      "Steam dumplings for 12-15 minutes",
      "Serve hot with soy dipping sauce"
    ],
    nutrition: {
      calories: 285,
      protein: "15g",
      carbs: "32g",
      fat: "12g"
    },
    description: "Delicate Chinese steamed dumplings filled with seasoned pork and shrimp."
  },
  {
    id: 15,
    title: "Greek Moussaka",
    image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg",
    category: "international",
    cuisine: "Greek",
    prepTime: 45,
    cookTime: 60,
    difficulty: "Hard",
    servings: 8,
    ingredients: [
      "2 large eggplants, sliced",
      "500g ground lamb",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "400g canned tomatoes",
      "1 tsp oregano",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Olive oil for frying"
    ],
    instructions: [
      "Salt eggplant slices and drain for 30 minutes",
      "Fry eggplant slices until golden",
      "Cook lamb with onions and garlic",
      "Add tomatoes and oregano, simmer 20 minutes",
      "Layer eggplant and meat in baking dish",
      "Top with béchamel and cheese",
      "Bake at 180°C for 45 minutes until golden"
    ],
    nutrition: {
      calories: 385,
      protein: "22g",
      carbs: "18g",
      fat: "26g"
    },
    description: "Traditional Greek layered casserole with eggplant, lamb, and creamy béchamel."
  },

  // More Vegetarian Recipes
  {
    id: 16,
    title: "Quinoa Buddha Bowl",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "vegetarian",
    cuisine: "Health Food",
    prepTime: 25,
    cookTime: 20,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "1 cup quinoa",
      "2 cups roasted vegetables",
      "1 avocado, sliced",
      "1/2 cup chickpeas",
      "2 tbsp tahini",
      "1 tbsp lemon juice",
      "1 tbsp olive oil",
      "Seeds for topping"
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Roast vegetables with olive oil and seasonings",
      "Make tahini dressing with lemon juice",
      "Arrange quinoa in bowls",
      "Top with vegetables, avocado, and chickpeas",
      "Drizzle with tahini dressing and sprinkle seeds"
    ],
    nutrition: {
      calories: 385,
      protein: "14g",
      carbs: "52g",
      fat: "16g"
    },
    description: "Nutritious bowl packed with quinoa, roasted vegetables, and healthy fats."
  },
  {
    id: 17,
    title: "Mushroom Risotto",
    image: "https://images.pexels.com/photos/1398946/pexels-photo-1398946.jpeg",
    category: "vegetarian",
    cuisine: "Italian",
    prepTime: 15,
    cookTime: 35,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "1.5 cups arborio rice",
      "500g mixed mushrooms",
      "1 liter warm vegetable stock",
      "1 onion, finely chopped",
      "3 cloves garlic, minced",
      "1/2 cup white wine",
      "100g parmesan cheese",
      "3 tbsp butter",
      "Fresh parsley"
    ],
    instructions: [
      "Sauté mushrooms and set aside",
      "Cook onions and garlic until soft",
      "Add rice and stir for 2 minutes",
      "Add wine and let it absorb",
      "Add stock one ladle at a time, stirring constantly",
      "Fold in mushrooms, butter, and parmesan",
      "Garnish with parsley and serve immediately"
    ],
    nutrition: {
      calories: 425,
      protein: "12g",
      carbs: "62g",
      fat: "14g"
    },
    description: "Creamy Italian rice dish with earthy mushrooms and parmesan cheese."
  },
  {
    id: 18,
    title: "Falafel Wrap",
    image: "https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg",
    category: "vegetarian",
    cuisine: "Middle Eastern",
    prepTime: 30,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "2 cups chickpeas, soaked overnight",
      "1 onion, chopped",
      "4 cloves garlic",
      "1/4 cup parsley",
      "2 tsp cumin",
      "1 tsp coriander",
      "4 pita breads",
      "Tahini sauce",
      "Fresh vegetables"
    ],
    instructions: [
      "Grind chickpeas, onion, garlic, and herbs",
      "Add spices and form into balls",
      "Deep fry falafel until golden brown",
      "Warm pita breads",
      "Fill with falafel and vegetables",
      "Drizzle with tahini sauce and wrap"
    ],
    nutrition: {
      calories: 385,
      protein: "16g",
      carbs: "58g",
      fat: "12g"
    },
    description: "Middle Eastern chickpea fritters wrapped with fresh vegetables and tahini."
  },

  // More Non-Vegetarian Recipes
  {
    id: 19,
    title: "Lamb Curry",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    category: "non-vegetarian",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 90,
    difficulty: "Medium",
    servings: 6,
    ingredients: [
      "1 kg lamb, cubed",
      "2 onions, sliced",
      "4 tomatoes, chopped",
      "2 tbsp ginger-garlic paste",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1 tsp red chili powder",
      "1/2 cup yogurt",
      "Fresh cilantro",
      "Oil for cooking"
    ],
    instructions: [
      "Marinate lamb in yogurt and spices",
      "Brown lamb pieces in batches",
      "Cook onions until golden",
      "Add ginger-garlic paste and spices",
      "Add tomatoes and cook until soft",
      "Return lamb to pot with water",
      "Simmer for 1 hour until tender",
      "Garnish with cilantro"
    ],
    nutrition: {
      calories: 425,
      protein: "32g",
      carbs: "8g",
      fat: "28g"
    },
    description: "Rich and flavorful Indian lamb curry with aromatic spices and tender meat.",
    isPremium: true
  },
  {
    id: 20,
    title: "BBQ Ribs",
    image: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
    category: "non-vegetarian",
    cuisine: "American",
    prepTime: 30,
    cookTime: 180,
    difficulty: "Medium",
    servings: 6,
    ingredients: [
      "2 racks baby back ribs",
      "2 tbsp brown sugar",
      "2 tbsp paprika",
      "1 tbsp garlic powder",
      "1 tbsp onion powder",
      "1 tsp cayenne pepper",
      "1 cup BBQ sauce",
      "Salt and pepper"
    ],
    instructions: [
      "Mix dry rub ingredients",
      "Season ribs with rub and let marinate",
      "Wrap in foil and bake at 135°C for 2.5 hours",
      "Remove foil and brush with BBQ sauce",
      "Grill for 10 minutes to caramelize",
      "Let rest before cutting and serving"
    ],
    nutrition: {
      calories: 485,
      protein: "28g",
      carbs: "15g",
      fat: "35g"
    },
    description: "Tender and smoky BBQ ribs with dry rub seasoning and tangy sauce."
  },

  // More International Recipes
  {
    id: 21,
    title: "Sushi Rolls",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    category: "international",
    cuisine: "Japanese",
    prepTime: 45,
    cookTime: 20,
    difficulty: "Hard",
    servings: 4,
    ingredients: [
      "2 cups sushi rice",
      "4 nori sheets",
      "200g fresh salmon",
      "1 cucumber, julienned",
      "1 avocado, sliced",
      "2 tbsp rice vinegar",
      "1 tbsp sugar",
      "1 tsp salt",
      "Wasabi and soy sauce"
    ],
    instructions: [
      "Cook sushi rice and season with vinegar mixture",
      "Let rice cool to room temperature",
      "Place nori on bamboo mat",
      "Spread rice evenly, leaving border",
      "Add filling ingredients in center",
      "Roll tightly using mat",
      "Cut with sharp knife and serve with condiments"
    ],
    nutrition: {
      calories: 285,
      protein: "18g",
      carbs: "42g",
      fat: "8g"
    },
    description: "Fresh Japanese sushi rolls with salmon, avocado, and cucumber."
  },
  {
    id: 22,
    title: "Chicken Shawarma",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
    category: "non-vegetarian",
    cuisine: "Middle Eastern",
    prepTime: 240,
    cookTime: 25,
    difficulty: "Medium",
    servings: 6,
    ingredients: [
      "1 kg chicken thighs",
      "2 tbsp shawarma spice blend",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "4 pita breads",
      "Tahini sauce",
      "Pickled vegetables",
      "Fresh herbs"
    ],
    instructions: [
      "Marinate chicken in spices, oil, and lemon for 4 hours",
      "Grill chicken until cooked through",
      "Let rest and slice thinly",
      "Warm pita breads",
      "Fill with chicken and vegetables",
      "Drizzle with tahini sauce and wrap"
    ],
    nutrition: {
      calories: 425,
      protein: "32g",
      carbs: "28g",
      fat: "22g"
    },
    description: "Middle Eastern spiced chicken wrapped in pita with creamy tahini sauce."
  },
  {
    id: 23,
    title: "French Onion Soup",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    category: "vegetarian",
    cuisine: "French",
    prepTime: 20,
    cookTime: 60,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "6 large onions, sliced",
      "4 tbsp butter",
      "1 tsp sugar",
      "1/2 cup dry white wine",
      "6 cups beef stock",
      "4 slices French bread",
      "200g gruyere cheese",
      "Salt and pepper",
      "Fresh thyme"
    ],
    instructions: [
      "Caramelize onions slowly with butter and sugar",
      "Add wine and cook until evaporated",
      "Add stock and simmer for 30 minutes",
      "Toast bread slices",
      "Ladle soup into bowls",
      "Top with bread and cheese",
      "Broil until cheese is bubbly"
    ],
    nutrition: {
      calories: 325,
      protein: "15g",
      carbs: "28g",
      fat: "18g"
    },
    description: "Classic French soup with caramelized onions and melted gruyere cheese."
  },
  {
    id: 24,
    title: "Korean Bibimbap",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    category: "international",
    cuisine: "Korean",
    prepTime: 40,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "2 cups cooked rice",
      "200g beef strips",
      "Mixed vegetables (spinach, carrots, bean sprouts)",
      "4 eggs",
      "2 tbsp sesame oil",
      "3 tbsp soy sauce",
      "2 tbsp gochujang",
      "1 tbsp sesame seeds"
    ],
    instructions: [
      "Season and cook beef strips",
      "Blanch vegetables separately and season",
      "Fry eggs sunny-side up",
      "Divide rice among bowls",
      "Arrange beef and vegetables on rice",
      "Top with fried egg",
      "Serve with gochujang sauce"
    ],
    nutrition: {
      calories: 425,
      protein: "22g",
      carbs: "48g",
      fat: "16g"
    },
    description: "Korean mixed rice bowl with seasoned vegetables, beef, and spicy sauce."
  },
  {
    id: 25,
    title: "Chicken Parmigiana",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    category: "non-vegetarian",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 25,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "4 chicken breasts",
      "2 cups breadcrumbs",
      "1 cup flour",
      "2 eggs, beaten",
      "2 cups marinara sauce",
      "200g mozzarella cheese",
      "100g parmesan cheese",
      "Olive oil for frying"
    ],
    instructions: [
      "Pound chicken breasts to even thickness",
      "Set up breading station with flour, eggs, and breadcrumbs",
      "Bread chicken pieces thoroughly",
      "Fry until golden brown",
      "Top with marinara and cheeses",
      "Bake until cheese melts and bubbles"
    ],
    nutrition: {
      calories: 485,
      protein: "42g",
      carbs: "32g",
      fat: "22g"
    },
    description: "Italian-style breaded chicken topped with marinara sauce and melted cheese."
  },

  // Additional recipes to reach 50+ dishes
  {
    id: 26,
    title: "Thai Green Curry",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    category: "international",
    cuisine: "Thai",
    prepTime: 20,
    cookTime: 25,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "500g chicken, sliced",
      "Thai eggplant, quartered",
      "Green beans, trimmed",
      "Thai basil leaves",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "Jasmine rice"
    ],
    instructions: [
      "Heat thick coconut milk and fry curry paste",
      "Add chicken and cook until done",
      "Add remaining coconut milk and vegetables",
      "Season with fish sauce and palm sugar",
      "Simmer until vegetables are tender",
      "Garnish with Thai basil and serve with rice"
    ],
    nutrition: {
      calories: 385,
      protein: "28g",
      carbs: "18g",
      fat: "24g"
    },
    description: "Aromatic Thai curry with coconut milk, vegetables, and fragrant herbs."
  },
  {
    id: 27,
    title: "Vegetable Stir Fry",
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    category: "vegetarian",
    cuisine: "Asian",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Easy",
    servings: 4,
    ingredients: [
      "Mixed vegetables (bell peppers, broccoli, carrots)",
      "2 tbsp vegetable oil",
      "3 cloves garlic, minced",
      "1 inch ginger, minced",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tsp cornstarch",
      "Green onions for garnish"
    ],
    instructions: [
      "Heat oil in wok over high heat",
      "Add garlic and ginger, stir-fry briefly",
      "Add hard vegetables first, then softer ones",
      "Mix soy sauce, sesame oil, and cornstarch",
      "Add sauce and toss to coat",
      "Garnish with green onions and serve"
    ],
    nutrition: {
      calories: 185,
      protein: "6g",
      carbs: "22g",
      fat: "8g"
    },
    description: "Quick and healthy Asian-style stir-fried vegetables with savory sauce."
  },
  {
    id: 28,
    title: "Beef Stroganoff",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    category: "non-vegetarian",
    cuisine: "Russian",
    prepTime: 20,
    cookTime: 30,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "500g beef strips",
      "250g mushrooms, sliced",
      "1 onion, sliced",
      "2 tbsp flour",
      "2 cups beef stock",
      "1/2 cup sour cream",
      "2 tbsp butter",
      "Egg noodles",
      "Fresh parsley"
    ],
    instructions: [
      "Brown beef strips in batches",
      "Sauté onions and mushrooms",
      "Sprinkle flour and cook for 1 minute",
      "Gradually add stock, stirring constantly",
      "Return beef to pan and simmer",
      "Stir in sour cream off heat",
      "Serve over noodles with parsley"
    ],
    nutrition: {
      calories: 425,
      protein: "32g",
      carbs: "28g",
      fat: "22g"
    },
    description: "Classic Russian dish with tender beef in creamy mushroom sauce over noodles."
  },
  {
    id: 29,
    title: "Mediterranean Quinoa Salad",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg",
    category: "vegetarian",
    cuisine: "Mediterranean",
    prepTime: 25,
    cookTime: 15,
    difficulty: "Easy",
    servings: 6,
    ingredients: [
      "2 cups cooked quinoa",
      "1 cucumber, diced",
      "2 tomatoes, diced",
      "1/2 red onion, minced",
      "1/2 cup kalamata olives",
      "200g feta cheese, crumbled",
      "1/4 cup olive oil",
      "2 tbsp lemon juice",
      "Fresh herbs"
    ],
    instructions: [
      "Let cooked quinoa cool completely",
      "Dice vegetables and combine in bowl",
      "Add olives and feta cheese",
      "Whisk olive oil and lemon juice",
      "Toss salad with dressing",
      "Garnish with fresh herbs and serve"
    ],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "32g",
      fat: "14g"
    },
    description: "Fresh Mediterranean salad with quinoa, vegetables, and tangy feta cheese."
  },
  {
    id: 30,
    title: "Chocolate Lava Cake",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    category: "vegetarian",
    cuisine: "French",
    prepTime: 20,
    cookTime: 12,
    difficulty: "Medium",
    servings: 4,
    ingredients: [
      "100g dark chocolate",
      "100g butter",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tbsp flour",
      "Pinch of salt",
      "Butter for ramekins",
      "Vanilla ice cream"
    ],
    instructions: [
      "Melt chocolate and butter together",
      "Whisk eggs, yolks, and sugar until thick",
      "Fold in chocolate mixture and flour",
      "Divide among buttered ramekins",
      "Bake at 200°C for 10-12 minutes",
      "Invert onto plates and serve with ice cream"
    ],
    nutrition: {
      calories: 385,
      protein: "8g",
      carbs: "32g",
      fat: "26g"
    },
    description: "Decadent French dessert with molten chocolate center and vanilla ice cream."
  }
];

// Continue with more recipes to reach 50+ total...
// Adding more recipes with similar structure covering various cuisines and dietary preferences