import { createContext, ReactNode, useEffect, useState } from "react";

export type RecipeType =  {
  name: string;
    image: string;
    id:number,
    caloriesPerServing:number,
    cookTimeMinutes:number,
    cuisine:string,
    difficulty:string,
    ingredients:string[],
    instructions:string[],
    mealType:string[],
    prepTimeMinutes:number,
    rating:number,
    reviewCount:number,
    servings:number,
    tags:string[]
}

export interface RecipeContextType {
  recipeData: RecipeType[];
  isLoading: boolean;
}

export const RecipeContext = createContext<RecipeContextType>({
  recipeData: [],
  isLoading: false,
});

export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipeData, setRecipeData] = useState<RecipeType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipeData(data.recipes);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    }
    fetchApi();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipeData, isLoading }}>
      {children}
    </RecipeContext.Provider>
  );
};
