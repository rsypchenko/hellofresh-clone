import { useState, useEffect } from 'react';

import { parseRawPrice } from '../helpers/price';
import useFetchHelloFreshBox from 'hooks/useFetchHelloFreshBox';
import useSelectedRecipes from './useSelectedRecipes';
import useCalculatedTotalPrice from './useCalculatedTotalPrice';
import useSummary from './useSummary';

const getRecipeIndex = (recipes, recipeId) => recipes.findIndex((recipe) => recipe.id === recipeId);

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { data, loading } = useFetchHelloFreshBox();
  const { minRecipesSelected, maxRecipesSelected } = useSelectedRecipes({
    recipes,
    min: data?.min ?? 0,
    max: data?.max ?? 0,
  });
  const summary = useSummary({ recipes, data });
  const calculatedTotalPrice = useCalculatedTotalPrice({
    summary,
  });
  const totalPrice = parseRawPrice(calculatedTotalPrice);
  const headline =  data?.headline ?? '';
  
  const handleAddRecipe = (recipeId) => {
    const recipesCopy = [...recipes];
    const recipeIndex = getRecipeIndex(recipesCopy, recipeId);
    recipesCopy[recipeIndex].selected += 1;
    setRecipes(recipesCopy);
  };

  const handleRemoveRecipe = (recipeId) => {
    const recipesCopy = [...recipes];
    const recipeIndex = getRecipeIndex(recipesCopy, recipeId);
    recipesCopy[recipeIndex].selected -= 1;
    setRecipes(recipesCopy);
  };

  useEffect(() => {
    const { recipes: fetchedRecipes } = data;

    if (fetchedRecipes) {
      setRecipes(fetchedRecipes);
    }
  }, [setRecipes, data]);

  return {
    loading,
    recipes,
    summary,
    totalPrice,
    handleAddRecipe,
    handleRemoveRecipe,
    minRecipesSelected,
    maxRecipesSelected,
    headline
  };
};

export default useRecipes;
